"use client";

import { useEffect, useRef, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type ChatWindowProps = {
  selectedChannelId: string;
  selectedChannelLabel: string;
  currentUser: {
    uid: string;
    displayName: string;
  };
};

type ReplyTo = {
  id: string;
  sender: string;
  text: string;
};

type Message = {
  id: string;
  text: string;
  sender: string;
  userId?: string;
  role?: string;
  reactions?: {
    heart?: {
      userIds: string[];
    };
  };
  replyTo?: ReplyTo;
  createdAt?: Date | null;
};

export default function ChatWindow({
  selectedChannelId,
  selectedChannelLabel,
  currentUser,
}: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [replyTarget, setReplyTarget] = useState<Message | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Load messages for selected channel
  useEffect(() => {
    if (!selectedChannelId) return;

    const q = query(
      collection(db, "channels", selectedChannelId, "messages"),
      orderBy("createdAt", "asc")
    );

    return onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data() as any;
        return {
          id: docSnap.id,
          text: data.text ?? "",
          sender: data.sender ?? "User",
          userId: data.userId,
          role: data.role,
          reactions: data.reactions ?? {},
          replyTo: data.replyTo ?? undefined,
          createdAt: data.createdAt?.toDate
            ? data.createdAt.toDate()
            : null,
        };
      });
      setMessages(msgs);
    });
  }, [selectedChannelId]);

  // Typing indicator subscription
  useEffect(() => {
    if (!selectedChannelId) return;

    const typingRef = collection(
      db,
      "channels",
      selectedChannelId,
      "typing"
    );

    return onSnapshot(typingRef, (snapshot) => {
      const now = Date.now();
      const list: string[] = [];

      snapshot.forEach((docSnap) => {
        const data = docSnap.data() as any;
        if (!data.updatedAt) return;

        const updatedAt = data.updatedAt.toDate().getTime();
        if (
          now - updatedAt < 4000 &&
          data.displayName !== currentUser.displayName
        ) {
          list.push(data.displayName);
        }
      });

      setTypingUsers(list);
    });
  }, [selectedChannelId, currentUser.displayName]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const role =
      currentUser.displayName.toLowerCase() === "ashley"
        ? "mentor"
        : "member";

    const basePayload: any = {
      text: input.trim(),
      sender: currentUser.displayName,
      userId: currentUser.uid,
      role,
      reactions: {},
      createdAt: serverTimestamp(),
    };

    if (replyTarget) {
      basePayload.replyTo = {
        id: replyTarget.id,
        sender: replyTarget.sender,
        text: replyTarget.text,
      };
    }

    await addDoc(
      collection(db, "channels", selectedChannelId, "messages"),
      basePayload
    );

    setInput("");
    setReplyTarget(null);
  };

  const handleTyping = async (value: string) => {
    setInput(value);

    const typingDoc = doc(
      db,
      "channels",
      selectedChannelId,
      "typing",
      currentUser.uid
    );

    if (!value.trim()) {
      await setDoc(typingDoc, { updatedAt: null }, { merge: true });
      return;
    }

    await setDoc(
      typingDoc,
      {
        displayName: currentUser.displayName,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  };

  const toggleHeart = async (messageId: string) => {
    const msgRef = doc(
      db,
      "channels",
      selectedChannelId,
      "messages",
      messageId
    );

    const snap = await getDoc(msgRef);
    if (!snap.exists()) return;

    const data = snap.data() as any;
    const currentList: string[] = data.reactions?.heart?.userIds ?? [];
    const hasReacted = currentList.includes(currentUser.uid);

    const updatedList = hasReacted
      ? currentList.filter((id: string) => id !== currentUser.uid)
      : [...currentList, currentUser.uid];

    await updateDoc(msgRef, {
      "reactions.heart.userIds": updatedList,
    });
  };

  const deleteMessage = async (messageId: string) => {
    const ok = window.confirm("Delete this message?");
    if (!ok) return;

    const msgRef = doc(
      db,
      "channels",
      selectedChannelId,
      "messages",
      messageId
    );

    await deleteDoc(msgRef);
  };

  const formatTime = (date: Date | null | undefined) => {
    if (!date) return "";
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
  };

  const truncate = (text: string, max = 80) => {
    if (!text) return "";
    return text.length <= max ? text : text.slice(0, max) + "…";
  };

  const typingText =
    typingUsers.length === 1
      ? `${typingUsers[0]} is typing...`
      : typingUsers.length > 1
      ? `${typingUsers.join(", ")} are typing...`
      : "";

  return (
    <div className="flex flex-col h-full">
      {/* HEADER */}
      <div className="p-5 border-b bg-white text-xl font-semibold text-gray-800 flex items-center">
        <span>{selectedChannelLabel}</span>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-[#f3f7ec] to-[#e7f2d9]">
        {messages.map((msg) => {
          const isMe = msg.userId === currentUser.uid;
          const isMentor = msg.role === "mentor";
          const heartCount = msg.reactions?.heart?.userIds?.length ?? 0;
          const hasReacted =
            msg.reactions?.heart?.userIds?.includes(currentUser.uid) ?? false;

          return (
            <div
              key={msg.id}
              className={`flex gap-3 ${
                isMe ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                  isMentor
                    ? "bg-[#7db249] text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                {getInitials(msg.sender)}
              </div>

              {/* Content */}
              <div
                className={`flex flex-col ${
                  isMe ? "items-end" : "items-start"
                }`}
              >
                {/* Top row: name, role, time, reply, delete */}
                <div className="text-xs flex items-center gap-2 text-gray-800">
                  <span className="font-semibold">{msg.sender}</span>
                  {isMentor && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#e7f2d9] text-[#4f7c25] border">
                      Mentor
                    </span>
                  )}
                  <span className="text-gray-400 text-[10px]">
                    {formatTime(msg.createdAt)}
                  </span>

                  <button
                    onClick={() => setReplyTarget(msg)}
                    className="text-[10px] text-[#7db249] hover:underline ml-1"
                  >
                    Reply
                  </button>

                  {isMe && (
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="ml-1 text-gray-400 hover:text-gray-600"
                      title="Delete message"
                    >
                      ⋮
                    </button>
                  )}
                </div>

                {/* Auto-sized message bubble with optional reply preview */}
                <div
                  className={`
                    mt-1 px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm
                    break-words whitespace-pre-wrap inline-block
                    max-w-[80vw] md:max-w-md
                    ${isMe
                      ? "bg-[#7db249] text-white rounded-br-sm"
                      : "bg-white text-gray-800 border rounded-bl-sm"}
                  `}
                >
                  {msg.replyTo && (
                    <div
                      className={`
                        mb-1 px-2 py-1 rounded-lg border-l-2 text-[11px]
                        ${isMe
                          ? "bg-white/10 border-white/60 text-green-50"
                          : "bg-gray-100 border-gray-300 text-gray-700"}
                      `}
                    >
                      <span className="block font-semibold">
                        {msg.replyTo.sender}
                      </span>
                      <span className="block truncate">
                        {msg.replyTo.text}
                      </span>
                    </div>
                  )}

                  {msg.text}
                </div>

                {/* Heart reaction row */}
                <div
                  className={`
                    mt-1 flex items-center gap-1 text-xs
                    ${isMe ? "justify-end" : "justify-start"}
                  `}
                >
                  <button
                    onClick={() => toggleHeart(msg.id)}
                    className={`
                      flex items-center gap-1 px-2 py-0.5 rounded-full border transition
                      ${hasReacted
                        ? "bg-[#7db249] text-white border-[#7db249]"
                        : "bg-white text-gray-600 border-gray-300"}
                    `}
                  >
                    ❤️ {heartCount > 0 && <span>{heartCount}</span>}
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div ref={bottomRef} />
      </div>

      {/* TYPING INDICATOR */}
      {typingText && (
        <div className="px-6 pb-1 text-xs text-gray-500">
          {typingText}
        </div>
      )}

      {/* REPLY BAR ABOVE INPUT */}
      {replyTarget && (
        <div className="px-4 py-2 border-t bg-[#f7faef] flex items-center justify-between text-xs text-gray-700">
          <div className="min-w-0">
            <span className="font-semibold">
              Replying to {replyTarget.sender}
            </span>
            <span className="ml-2 text-gray-500 italic block md:inline-block truncate max-w-[60vw]">
              “{truncate(replyTarget.text, 80)}”
            </span>
          </div>
          <button
            onClick={() => setReplyTarget(null)}
            className="ml-3 text-gray-400 hover:text-gray-600 text-base"
            title="Cancel reply"
          >
            ×
          </button>
        </div>
      )}

      {/* INPUT */}
      <div className="p-4 border-t bg-white flex gap-3">
        <input
          type="text"
          value={input}
          placeholder={`Message ${selectedChannelLabel}...`}
          onChange={(e) => handleTyping(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border rounded-xl px-4 py-3 shadow-sm"
        />

        <button
          onClick={sendMessage}
          className="px-6 py-3 bg-[#7db249] text-white rounded-xl hover:bg-[#6aa03e]"
        >
          Send
        </button>
      </div>
    </div>
  );
}

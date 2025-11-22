"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

type OnlineUser = {
  id: string;
  displayName: string;
  lastActive?: {
    toDate: () => Date;
  };
};

type UserPanelProps = {
  currentUser: {
    uid: string;
    displayName: string;
  };
};

export default function UserPanel({ currentUser }: UserPanelProps) {
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);

  useEffect(() => {
    const usersRef = collection(db, "presence");

    const unsubscribe = onSnapshot(usersRef, (snapshot) => {
      const now = Date.now();

      const activeUsers = snapshot.docs
        .map((docSnap) => ({
          id: docSnap.id,
          ...(docSnap.data() as Omit<OnlineUser, "id">),
        }))
        .filter((user) => {
          if (!user.lastActive?.toDate) return false;
          const last = user.lastActive.toDate().getTime();
          return now - last < 30000; // 30 seconds
        });

      setOnlineUsers(activeUsers);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full bg-white border-l border-gray-200 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Online Users
      </h2>

      <div className="space-y-4">
        {onlineUsers.map((user) => {
          const isYou = user.id === currentUser.uid;
          const isMentor =
            user.displayName.toLowerCase() === "ashley"; // you as mentor for now

          return (
            <div className="flex items-center gap-3" key={user.id}>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-gray-700 font-medium">
                    {user.displayName} {isYou ? "(You)" : ""}
                  </p>
                  {isMentor && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#e7f2d9] text-[#4f7c25] border border-[#c6df9f]">
                      Mentor
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

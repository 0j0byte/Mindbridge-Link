"use client";

"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import UserPanel from "./components/UserPanel";
import WelcomeScreen from "./components/WelcomeScreen";

import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { app, db, auth } from "@/lib/firebase";

import { doc, setDoc, serverTimestamp } from "firebase/firestore";

type Channel = {
  id: string;
  label: string;
  group: string;
};

const channels: Channel[] = [
  { id: "general", label: "# general", group: "Main" },

  { id: "vent", label: "# vent", group: "Support" },
  { id: "emotional-support", label: "# emotional-support", group: "Support" },
  { id: "stress-relief", label: "# stress-relief", group: "Support" },
  { id: "anxiety-support", label: "# anxiety-support", group: "Support" },
  { id: "self-care", label: "# self-care", group: "Support" },

  { id: "esl-help", label: "# esl-help", group: "International Student Life" },
  { id: "culture-shock", label: "# culture-shock", group: "International Student Life" },
  { id: "living-in-washington", label: "# living-in-washington", group: "International Student Life" },
  { id: "study-tips", label: "# study-tips", group: "International Student Life" },
  { id: "ask-a-mentor", label: "# ask-a-mentor", group: "International Student Life" },
  { id: "immigration-questions", label: "# immigration-questions", group: "International Student Life" },

  { id: "introductions", label: "# introductions", group: "Community" },
  { id: "make-friends", label: "# make-friends", group: "Community" },
  { id: "daily-check-in", label: "# daily-check-in", group: "Community" },
  { id: "photography", label: "# photography", group: "Community" },

  { id: "cultural-exchange", label: "# cultural-exchange", group: "Culture & Language" },
  { id: "learn-english", label: "# learn-english", group: "Culture & Language" },
  { id: "learn-spanish", label: "# learn-spanish", group: "Culture & Language" },

  { id: "motivation", label: "# motivation", group: "Growth & Motivation" },
];

type AppUser = {
  uid: string;
  displayName: string;
};

export default function ChatPage() {
  const [selectedChannelId, setSelectedChannelId] = useState<string>("general");
  const [firebaseUser, setFirebaseUser] = useState<any>(null);
  const [appUser, setAppUser] = useState<AppUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Firebase anonymous auth
  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setFirebaseUser(user);

        // try to load username from localStorage
        const savedName = typeof window !== "undefined"
          ? window.localStorage.getItem("mb_username")
          : null;

        if (savedName) {
          const displayName = savedName.trim();
          setAppUser({ uid: user.uid, displayName });

          // save to Firestore users collection
          await setDoc(
            doc(db, "users", user.uid),
            {
              displayName,
              updatedAt: serverTimestamp(),
            },
            { merge: true }
          );
        }
        setAuthLoading(false);
      } else {
        // sign in anonymously
        await signInAnonymously(auth);
      }
    });

    return () => unsubscribe();
  }, []);
  // Track user online presence
useEffect(() => {
  if (!firebaseUser || !appUser) return;

  const userRef = doc(db, "presence", firebaseUser.uid);

  // Set initial presence
  setDoc(
    userRef,
    {
      displayName: appUser.displayName,
      lastActive: serverTimestamp(),
    },
    { merge: true }
  );

  // Update presence every 20 seconds
  const interval = setInterval(() => {
    setDoc(
      userRef,
      {
        lastActive: serverTimestamp(),
      },
      { merge: true }
    );
  }, 20000);

  return () => clearInterval(interval);
}, [firebaseUser, appUser]);


  const selectedChannel =
    channels.find((ch) => ch.id === selectedChannelId) ?? channels[0];

  const handleUsernameComplete = async (displayName: string) => {
    if (!firebaseUser) return;

    // save in state
    setAppUser({ uid: firebaseUser.uid, displayName });

    // save in localStorage
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mb_username", displayName);
    }

    // save in Firestore
    await setDoc(
      doc(db, "users", firebaseUser.uid),
      {
        displayName,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  };

  // While auth is initializing
  if (authLoading) {
    return (
      <div className="flex h-[100vh] items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Loading chat...</p>
      </div>
    );
  }

  // If no username yet, show welcome screen
  if (!appUser) {
    return <WelcomeScreen onComplete={handleUsernameComplete} />;
  }

  // Otherwise, show full chat layout
  return (
    <div className="flex h-[100vh] bg-gray-50">
      <Sidebar
        channels={channels}
        selectedChannelId={selectedChannelId}
        onSelectChannel={setSelectedChannelId}
      />
      <div className="flex-[4] border-r border-gray-200">
        <ChatWindow
          selectedChannelId={selectedChannel.id}
          selectedChannelLabel={selectedChannel.label}
          currentUser={appUser}
        />
      </div>
      <div className="hidden lg:flex flex-[2]">
        <UserPanel currentUser={appUser} />
      </div>
    </div>
  );
}

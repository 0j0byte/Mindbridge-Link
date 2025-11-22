"use client";

import { useState } from "react";

type WelcomeScreenProps = {
  onComplete: (displayName: string) => void;
};

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onComplete(trimmed);
  };

  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-[#7db249]">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to MindBridge Link
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed">
          This is a safe, supportive space for international students to connect,
          share, and find encouragement. Before you join the chat, choose a
          display name you are comfortable using.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Display name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="For example: Ashley"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-[#7db249] shadow-sm"
          />
          <button
            type="submit"
            className="w-full mt-4 bg-[#7db249] text-white rounded-xl py-3 font-semibold hover:bg-[#6aa03e] transition"
          >
            Continue to chat
          </button>
        </form>
      </div>
    </div>
  );
}

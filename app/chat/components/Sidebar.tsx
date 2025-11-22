"use client";

import Link from "next/link";
import {
  FiHome,
  FiHash,
} from "react-icons/fi";

type Channel = {
  id: string;
  label: string;
  group: string;
};

type SidebarProps = {
  channels: Channel[];
  selectedChannelId: string;
  onSelectChannel: (id: string) => void;
};

export default function Sidebar({
  channels,
  selectedChannelId,
  onSelectChannel,
}: SidebarProps) {
  // group channels by "group" field
  const groups = Array.from(new Set(channels.map((c) => c.group)));

  return (
    <div className="flex flex-col w-72 bg-white border-r border-gray-200 py-6 px-4 shadow-sm">
      <h1 className="text-2xl font-bold text-[#7db249] mb-6 px-2">
        MindBridge Chat
      </h1>

      {/* Home link */}
      <nav className="flex flex-col gap-3 text-gray-700 text-base mb-6">
        <Link
          className="flex items-center gap-3 hover:text-[#7db249] transition-colors px-2 py-1 rounded-lg"
          href="/"
        >
          <FiHome size={20} /> Home
        </Link>
      </nav>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {groups.map((groupName) => {
          const groupChannels = channels.filter(
            (ch) => ch.group === groupName
          );
          return (
            <div key={groupName}>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                {groupName}
              </div>
              <div className="flex flex-col gap-1">
                {groupChannels.map((ch) => {
                  const isActive = ch.id === selectedChannelId;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => onSelectChannel(ch.id)}
                      className={`flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition ${
                        isActive
                          ? "bg-gray-100 text-[#7db249] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      <FiHash size={17} />
                      <span>{ch.label.replace("# ", "")}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

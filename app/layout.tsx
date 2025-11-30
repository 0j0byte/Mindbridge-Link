import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "MindBridge Link",
  description:
    "A student-created support space for international students at Green River College.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* TOP NAVBAR */}
        <header className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            {/* Logo + Title */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/mindbridge-logo.png"
                  alt="MindBridge Link logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                MindBridge Link
              </span>
            </Link>

            {/* Nav Links */}
            <nav className="flex items-center gap-5 text-sm md:text-base">
              <Link
                href="/chat"
                className="text-gray-700 hover:text-[#4f7c25] transition"
              >
                Chatroom
              </Link>
              <Link
                href="/mentors"
                className="text-gray-700 hover:text-[#4f7c25] transition"
              >
                Mentors
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 hover:text-[#4f7c25] transition"
              >
                Resources
              </Link>
              <Link
                href="/get-involved"
                className="text-gray-700 hover:text-[#4f7c25] transition"
              >
                Get Involved
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1">{children}</main>

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}

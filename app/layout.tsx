import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "MindBridge Link",
  description: "Support for international students",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">

      <nav className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

    {/* LOGO + TITLE */}
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/mindbridge-logo.png"
        alt="MindBridge Link logo"
        width={42}
        height={42}
        className="rounded-full"
      />
      <span className="text-2xl font-semibold tracking-tight text-gray-800">
        MindBridge Link
      </span>
    </Link>

    {/* NAV LINKS */}
    <div className="flex items-center gap-8 text-lg font-medium text-gray-700">
      <Link href="/" className="hover:text-[#7db249] transition-colors">Home</Link>
      <Link href="/chat" className="hover:text-[#7db249] transition-colors">Chat</Link>
      <Link href="/mentors" className="hover:text-[#7db249] transition-colors">Mentors</Link>
      <Link href="/resources" className="hover:text-[#7db249] transition-colors">Resources</Link>
      <Link href="/get-involved" className="hover:text-[#7db249] transition-colors">Get Involved</Link>
    </div>

  </div>
</nav>

        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
          {children}
        </main>

      </body>
    </html>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
        {/* About */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">About MindBridge Link</h3>
          <p className="text-gray-600 leading-relaxed">
            MindBridge Link is a student-created project designed to support
            international students at Green River with connection, resources,
            and a safe place to talk.
          </p>
        </div>

        {/* Site Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Site</h3>
          <div className="flex flex-col gap-1 text-gray-600">
            <Link href="/chat" className="hover:text-[#4f7c25]">Chatroom</Link>
            <Link href="/mentors" className="hover:text-[#4f7c25]">Mentors</Link>
            <Link href="/resources" className="hover:text-[#4f7c25]">Resources</Link>
            <Link href="/get-involved" className="hover:text-[#4f7c25]">Get Involved</Link>
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">More from this project</h3>
          <p className="text-gray-600 mb-3">
            These expand on the support MindBridge Link offers.
          </p>
          <ul className="space-y-1 text-gray-600">
            <li>• Instagram campaign (coming soon)</li>
            <li>• Podcast episode (coming soon)</li>
            <li>• Infographics & brochure (coming soon)</li>
            <li>• Resource guide PDF (coming soon)</li>
          </ul>
        </div>
      </div>

      <div className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} MindBridge Link</span>
          <span className="text-[11px]">
            This site was created for a Green River College course and is not an official GRC website.
          </span>
        </div>
      </div>
    </footer>
  );
}

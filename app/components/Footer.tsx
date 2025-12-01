import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About MindBridge Link</h3>
          <p className="text-gray-700 leading-relaxed">
            MindBridge Link is a student-created project supporting international 
            students at Green River College through connection, culturally responsive 
            resources, and peer-to-peer support.
          </p>
        </div>

        {/* Site Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Site</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/" className="hover:text-green-700">Home</Link></li>
            <li><Link href="/chatroom" className="hover:text-green-700">Chatroom</Link></li>
            <li><Link href="/mentors" className="hover:text-green-700">Mentors</Link></li>
            <li><Link href="/resources" className="hover:text-green-700">Resources</Link></li>
            <li><Link href="/get-involved" className="hover:text-green-700">Get Involved</Link></li>
          </ul>
        </div>

        {/* Project Deliverables */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Project Links</h3>
          <ul className="space-y-2 text-gray-700">

            <li>
              <a href="https://www.instagram.com/mindbridge.greenriver?igsh=N3QwZ2E3Mnk1bXVr"
                 target="_blank"
                 className="hover:text-green-700">
                Instagram Page
              </a>
            </li>

            <li>
              <a href="https://www.canva.com/design/DAG5oxA__Xw/7CfbvAp7TZU3IrC49aUJtA/view?utm_content=DAG5oxA__Xw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbd74cf6244"
                 target="_blank"
                 className="hover:text-green-700">
                Resource Guide (PDF)
              </a>
            </li>

            <li>
              <a href="/FILE_2036.pdf" 
                 target="_blank" 
                 className="hover:text-green-700">
                Brochure (PDF)
              </a>
            </li>

            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScDyXkvA6LkpaoUPEWkutZpzO4y7J-v2gMga_Ycs-6rj8Wvsw/viewform?usp=dialog"
                 target="_blank"
                 className="hover:text-green-700">
                Feedback Form
              </a>
            </li>

            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHfOQGBkt-hwj22ihbcVneW6ulwthvNTcd9Hg36tXNXPChQQ/viewform?usp=dialog"
                 target="_blank"
                 className="hover:text-green-700">
                Partner With Us
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div className="border-t bg-gray-50 py-4">
        <p className="text-center text-gray-600 text-sm">
          MindBridge Link • Green River College
        </p>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f7ec] to-[#e7f2d9] py-16 px-6">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Get Involved</h1>
        <p className="mt-4 text-lg text-gray-600">
          MindBridge Link grows through community. Explore opportunities to connect, support others, and help shape a more inclusive space for international students.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto space-y-16">

        {/* SECTION 1: Join as a Mentor */}
        <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col md:flex-row gap-8 items-start">
          <Image
            src="/mentor_help.jpeg"
            width={140}
            height={140}
            alt=""
            className="rounded-xl object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">Become a Mentor</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Mentors play a meaningful role by offering guidance, listening with care, and supporting students 
              navigating the challenges of studying in a new country. You do not need to have all the answers — only a willingness to help.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScItrJ8-Ax-ceeUrve0Kzl69hG-81qS0Zx-RQMGuzI7MhW5zg/viewform"
              target="_blank"
              className="inline-block mt-5 px-6 py-3 bg-[#7db249] text-white rounded-lg font-medium hover:bg-[#6aa03e] transition"
            >
              Apply to Become a Mentor
            </a>
          </div>
        </section>

        {/* SECTION 2: Request a Mentor */}
        <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col md:flex-row gap-8 items-start">
          <Image
            src="/bridge_handshake.jpeg"
            width={140}
            height={140}
            alt=""
            className="rounded-xl object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">Find a Mentor</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you are feeling overwhelmed, homesick, confused, or isolated — you are not alone. Connecting with a mentor can help you adjust, build confidence, and talk to someone who understands the international student experience.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0P7o4BpiqXHF61V5nyZvatrFyFduusxnvQCF7SEvoNLwjRA/viewform?usp=publish-editor"
              target="_blank"
              className="inline-block mt-5 px-6 py-3 border border-[#7db249] text-[#7db249] rounded-lg font-medium hover:bg-green-50 transition"
            >
              Request a Mentor
            </a>
          </div>
        </section>

        {/* SECTION 3: Volunteer / Partner */}
        <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col md:flex-row gap-8 items-start">
          <Image
            src="/volunteer_badge.jpeg"
            width={140}
            height={140}
            alt=""
            className="rounded-xl object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">Partner With Us</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We collaborate with student organizations, cultural clubs, counselors, and academic departments 
              to expand support for international students. If your group shares our mission, we would love to connect.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHfOQGBkt-hwj22ihbcVneW6ulwthvNTcd9Hg36tXNXPChQQ/viewform?usp=dialog"
              target="_blank"
              className="inline-block mt-5 px-6 py-3 border border-[#7db249] text-[#7db249] rounded-lg font-medium hover:bg-green-50 transition"
            >
              Partnership Inquiry Form
            </a>
          </div>
        </section>

        {/* SECTION 4: Feedback */}
        <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col md:flex-row gap-8 items-start">
          <Image
            src="/group_discussion.jpeg"
            width={140}
            height={140}
            alt=""
            className="rounded-xl object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">Share Your Feedback</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              MindBridge Link is shaped by the voices of the students who use it. If you have suggestions, ideas, 
              or needs that we can better support, please share. Your feedback directly improves our work.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScDyXkvA6LkpaoUPEWkutZpzO4y7J-v2gMga_Ycs-6rj8Wvsw/viewform?usp=dialog"
              target="_blank"
              className="inline-block mt-5 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Open Feedback Form
            </a>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="mt-24 border-t pt-10 pb-6 text-center text-gray-600">
        <p>MindBridge Link — Created by Students at Green River College</p>
        <div className="mt-2 flex justify-center gap-6">
          <a href="/" className="text-[#7db249] hover:underline">Home</a>
          <a href="/chat" className="text-[#7db249] hover:underline">Chatroom</a>
          <a href="/resources" className="text-[#7db249] hover:underline">Resources</a>
          <a href="/mentors" className="text-[#7db249] hover:underline">Mentors</a>
          <a href="https://www.instagram.com/mindbridge.greenriver" target="_blank" className="text-[#7db249] hover:underline">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

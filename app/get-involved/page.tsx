import Image from "next/image";

const FEEDBACK_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScDyXkvA6LkpaoUPEWkutZpzO4y7J-v2gMga_Ycs-6rj8Wvsw/viewform?usp=dialog";

const PARTNER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdHfOQGBkt-hwj22ihbcVneW6ulwthvNTcd9Hg36tXNXPChQQ/viewform?usp=dialog";

const INSTAGRAM_URL =
  "https://www.instagram.com/mindbridge.greenriver?igsh=N3QwZ2E3Mnk1bXVr";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-r from-[#7db249] to-[#95c76e] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Get Involved with MindBridge Link
              </h1>
              <p className="mt-5 text-base md:text-lg max-w-xl leading-relaxed opacity-95">
                MindBridge Link was created for international students at Green River
                who want support, and for people who want to support them. Even small
                actions can help someone feel less alone.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-xl bg-white">
                <Image
                  src="/bridge_handshake.jpeg"
                  alt="People connecting and supporting each other"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MAIN GRID: WAYS TO GET INVOLVED */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Ways to Get Involved
          </h2>

          <p className="text-gray-700 text-base md:text-lg max-w-3xl mb-10 leading-relaxed">
            You do not have to do everything. Choosing even one way to participate
            can make a real difference for international students who are trying to
            adjust to a new country, a new system, and a new life.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Join the Chatroom */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src="/group_discussion.jpeg"
                  alt="Students talking together"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Join the Chatroom
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                    If you are an international student, you can join the chat
                    to vent, ask questions, share wins, or just talk to people
                    who understand what it feels like to be far from home.
                  </p>
                </div>
                <div className="mt-3">
                  <a
                    href="/chat"
                    className="inline-flex items-center text-sm font-semibold text-[#7db249] hover:underline"
                  >
                    Go to the chatroom
                  </a>
                </div>
              </div>
            </div>

            {/* Become a peer mentor / listener */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src="/mentor_help.jpeg"
                  alt="Student helping another student"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Support as a Peer Mentor
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                    If you are someone who wants to listen and support others,
                    you can apply to be a peer mentor. Mentors are not therapists.
                    They are students and community members who offer empathy and
                    guidance.
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="/mentors"
                    className="inline-flex items-center text-sm font-semibold text-[#7db249] hover:underline"
                  >
                    Learn about the mentor role
                  </a>
                </div>
              </div>
            </div>

            {/* Give feedback on MindBridge */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src="/study_room.jpeg"
                  alt="Student working at a desk"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Help Improve MindBridge Link
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                    Your feedback helps us see what is working and what is missing.
                    You can let us know what feels confusing, what feels helpful,
                    and what would make the site more supportive for you.
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={FEEDBACK_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#7db249] hover:underline"
                  >
                    Fill out the feedback form
                  </a>
                </div>
              </div>
            </div>

            {/* Partner with us */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src="/volunteer_badge.jpeg"
                  alt="Volunteer badge"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Partner with MindBridge Link
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                    If you are part of a campus office, student club, or community
                    organization that supports international students, you can
                    partner with us. Together we can connect students to more
                    tailored support.
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={PARTNER_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#7db249] hover:underline"
                  >
                    Fill out the partner interest form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MORE FROM THIS PROJECT */}
        <section className="border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              More from this project
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-3xl mb-6 leading-relaxed">
              MindBridge Link is part of a larger project created by students at
              Green River College to better support international students and the
              people who care about them.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-sm md:text-base text-gray-800">
                <p className="font-semibold text-gray-900">Live now</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#7db249] hover:underline font-semibold"
                    >
                      Instagram campaign
                    </a>{" "}
                    sharing stories, reminders, and resources for international
                    students.
                  </li>
                  <li>
                    <a
                      href={FEEDBACK_FORM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#7db249] hover:underline font-semibold"
                    >
                      Feedback form
                    </a>{" "}
                    where you can suggest changes or new ideas for the site.
                  </li>
                  <li>
                    <a
                      href={PARTNER_FORM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#7db249] hover:underline font-semibold"
                    >
                      Partner with us form
                    </a>{" "}
                    for staff, faculty, and community members who want to
                    collaborate.
                  </li>
                </ul>
              </div>

              <div className="space-y-2 text-sm md:text-base text-gray-800">
                <p className="font-semibold text-gray-900">Coming soon</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Podcast episode about the experiences of international students.</li>
                  <li>Infographics and brochure that explain the project at a glance.</li>
                  <li>Expanded resource guide with more campus and community support.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SIMPLE FOOTER JUST FOR THIS PAGE */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs md:text-sm text-gray-500">
            MindBridge Link was created by students at Green River College.
          </p>
          <div className="flex gap-4 text-xs md:text-sm">
            <a href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </a>
            <a href="/chat" className="text-gray-500 hover:text-gray-700">
              Chatroom
            </a>
            <a href="/resources" className="text-gray-500 hover:text-gray-700">
              Resources
            </a>
            <a href="/mentors" className="text-gray-500 hover:text-gray-700">
              Mentors
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

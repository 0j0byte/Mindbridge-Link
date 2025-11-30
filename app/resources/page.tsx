import Image from "next/image";

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* HEADER */}
      <section className="mb-10 md:mb-14 grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Resources for International Students
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3">
            This page is meant to be more than just a list of links. It&apos;s a
            starting point for international students who are dealing with
            culture shock, mental health struggles, homesickness, or confusion
            about where to go for help.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Some of these resources are specific to Green River. Others are
            broader supports you can access anytime, even late at night.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-40 md:w-72 md:h-44 rounded-3xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src="/group_discussion.jpeg"
              alt="Students in discussion"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* EMERGENCY / CRISIS SECTION */}
      <section className="mb-12 md:mb-14">
        <div className="bg-[#fee2e2] border border-[#fecaca] rounded-3xl p-7 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-red-800 mb-3">
            If this is an emergency or you feel unsafe
          </h2>
          <p className="text-red-900 text-sm md:text-base leading-relaxed mb-3">
            MindBridge Link is not a crisis hotline. If you are thinking about
            hurting yourself, feel in danger, or are worried for someone&apos;s
            immediate safety, please contact:
          </p>
          <ul className="text-red-900 text-sm md:text-base leading-relaxed space-y-1.5">
            <li>
              • <span className="font-semibold">988</span> — Suicide &amp; Crisis
              Lifeline (you can ask for an interpreter)
            </li>
            <li>• Your local emergency number (such as 911 in the United States)</li>
            <li>• Campus safety or security, if you are on or near campus</li>
          </ul>
          <p className="text-red-900 text-xs md:text-sm mt-3">
            After you&apos;re safe, you are still welcome to come back here for
            peer support, resources, and community.
          </p>
        </div>
      </section>

      {/* CAMPUS & LOCAL SUPPORT */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Support at Green River
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          These are places on or connected to campus where international
          students can go for help with academics, emotions, and everyday life.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* ISP */}
          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              International Student Programs (ISP)
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
              A key place for questions about visas, status, documents, and
              adjusting to life in the U.S. Staff are used to working with many
              different cultures and languages.
            </p>
            <p className="text-gray-600 text-xs md:text-sm mt-3">
              You can ask them where to go for mental health support, academic
              questions, or help in your language.
            </p>
          </div>

          {/* Counseling */}
          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Counseling &amp; Wellness
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
              Confidential support for stress, anxiety, depression, and
              loneliness. Some counselors may have experience working with
              international and multilingual students.
            </p>
            <p className="text-gray-600 text-xs md:text-sm mt-3">
              Ask about wait times, whether telehealth is available, and if they
              can accommodate your language or cultural needs.
            </p>
          </div>

          {/* Learning / Tutoring */}
          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Learning Center &amp; Tutoring
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
              Free support for writing, English, math, and other classes. Feeling
              behind academically can impact mental health; you&apos;re allowed
              to ask for help before it becomes overwhelming.
            </p>
            <p className="text-gray-600 text-xs md:text-sm mt-3">
              You can bring homework, essays, or questions, even if you&apos;re
              not sure how to explain them perfectly in English.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURALLY RESPONSIVE + MULTILINGUAL */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Culturally responsive &amp; multilingual support
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          Many mental health resources are not designed with international
          students in mind. These ideas focus on language, culture, and feeling
          understood — not just &quot;fixed.&quot;
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col">
            <div className="relative w-full h-40 mb-5 rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/students_group_2.jpeg"
                alt="Students walking together"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Talk to someone who understands your culture
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
              It can feel easier to open up with someone who shares your
              language, background, or immigration experience. You can:
            </p>
            <ul className="text-gray-700 text-sm md:text-base leading-relaxed mt-2 space-y-1">
              <li>• Request a mentor with a similar cultural background.</li>
              <li>• Ask staff if any counselors have experience with your region.</li>
              <li>• Look for student clubs or communities tied to your culture.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col">
            <div className="relative w-full h-40 mb-5 rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/study_room.jpeg"
                alt="Study space"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Using your own language is okay
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
              If talking about emotions in English feels hard, you can:
            </p>
            <ul className="text-gray-700 text-sm md:text-base leading-relaxed mt-2 space-y-1">
              <li>• Journal in your first language and share parts in English.</li>
              <li>• Ask if interpreters or translated materials are available.</li>
              <li>• Use bilingual mental health resources when possible.</li>
            </ul>
            <p className="text-gray-600 text-xs md:text-sm mt-3">
              In the future, this page can include translated PDFs or links in
              specific languages based on student needs.
            </p>
          </div>
        </div>
      </section>

      {/* ONLINE / ANYTIME SUPPORT IDEA */}
      <section className="mb-4">
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 md:p-8 grid gap-6 md:grid-cols-[1.2fr,1fr] items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              When it&apos;s late and you need someone
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
              Nighttime can feel especially lonely when you&apos;re far from
              home. This site is one option, but it&apos;s okay to use more than
              one kind of support.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              You can combine MindBridge Link with crisis lines, trusted friends
              or family, mentors, and professional services. You don&apos;t have
              to choose just one.
            </p>
          </div>
          <div className="relative w-full h-40 md:h-48 rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="/abstract_hands.jpeg"
              alt="Abstract supportive hands"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

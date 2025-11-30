import Image from "next/image";
import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* HEADER */}
      <section className="mb-10 md:mb-14 grid gap-8 md:grid-cols-[1.4fr,1fr] items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Get Involved with MindBridge Link
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            MindBridge Link only works if students, staff, and community members
            get involved. You can support international students by mentoring,
            helping spread the word, or sharing feedback so we can keep
            improving.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-40 md:w-72 md:h-44 rounded-3xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src="/bridge_handshake.jpeg"
              alt="Hands shaking in partnership"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WAYS TO GET INVOLVED */}
      <section className="mb-14 grid gap-8 md:grid-cols-3">
        {/* Mentor */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Become a peer mentor
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 flex-1">
            If you&apos;ve already experienced culture shock, homesickness, or
            navigating college in a new country, you can help someone who&apos;s
            just starting that journey.
          </p>
          <Link
            href="/mentors"
            className="inline-flex mt-2 text-sm font-semibold text-[#7db249] hover:text-[#4f7c25]"
          >
            Learn more on the Mentors page →
          </Link>
        </div>

        {/* Spread the word */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Share MindBridge Link
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 flex-1">
            Tell friends, classmates, and instructors about this site. Even a
            quick share can connect someone to support when they need it most.
          </p>
          <p className="text-gray-600 text-xs md:text-sm">
            You can also print or share QR codes that link directly to{" "}
            <span className="underline">mindbridge-link.vercel.app</span>.
          </p>
        </div>

        {/* Give feedback */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Help us improve
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 flex-1">
            This project is still growing. Your feedback on what&apos;s helpful,
            confusing, or missing will directly shape the next version.
          </p>
          <p className="text-gray-600 text-xs md:text-sm">
            A feedback form can be added here so you can share anonymous thoughts.
          </p>
        </div>
      </section>

      {/* CLASS DELIVERABLES SECTION */}
      <section className="mb-12 md:mb-16">
        <div className="bg-[#f3f7ec] border border-[#d7e6be] rounded-3xl p-7 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-[#40621a] mb-4">
            Other parts of this project
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            MindBridge Link is connected to several other deliverables created
            in the same class. Together, they work to increase awareness and
            support for international students.
          </p>
          <ul className="text-gray-700 text-sm md:text-base leading-relaxed space-y-1.5">
            <li>• Instagram campaign about international student mental health</li>
            <li>• Podcast episode sharing student stories</li>
            <li>• Infographics and brochures for staff and students</li>
            <li>• A written resource guide with more detailed information</li>
          </ul>
          <p className="text-gray-600 text-xs md:text-sm mt-3">
            QR codes or direct links to these materials can be added here in the
            final version, so students and staff can access everything in one
            place.
          </p>
        </div>
      </section>

      {/* PARTNER / CONTACT IDEA */}
      <section className="mb-4">
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Want to collaborate or share this with your program?
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            MindBridge Link was created by students, but it&apos;s meant to be
            shared. If you work with international students or want to partner
            with this project, you can contact the team through the instructor
            of this course or suggest adding a small contact form here.
          </p>
        </div>
      </section>
    </div>
  );
}

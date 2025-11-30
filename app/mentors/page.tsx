import Image from "next/image";

export default function MentorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* HEADER */}
      <section className="mb-10 md:mb-14 grid gap-8 md:grid-cols-[1.5fr,1fr] items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Peer Mentors for International Students
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Mentors on MindBridge Link are students who understand what it
            feels like to move to a new country, adjust to a new school, and
            handle all the pressure at once. They&apos;re not therapists — just
            people who are willing to listen, share what they know, and walk
            with you.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-40 md:w-72 md:h-44 rounded-3xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src="/mentor_help.jpeg"
              alt="Mentor helping student"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mb-12 md:mb-16 grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            What to expect from a mentor
          </h2>
          <ul className="text-gray-700 text-sm md:text-base leading-relaxed space-y-2">
            <li>• A peer who listens without judging you.</li>
            <li>• Someone who has lived through similar experiences.</li>
            <li>• Space to talk about culture shock, homesickness, or stress.</li>
            <li>
              • Suggestions for campus resources, study strategies, and
              everyday life.
            </li>
          </ul>
        </div>

        <div className="bg-[#f3f7ec] rounded-3xl border border-[#d7e6be] p-7">
          <h2 className="text-xl font-semibold text-[#40621a] mb-3">
            How meetings usually work
          </h2>
          <ul className="text-gray-700 text-sm md:text-base leading-relaxed space-y-2">
            <li>
              • Most meetings begin online (video, audio, or chat), depending on
              what you choose in the form.
            </li>
            <li>
              • In-person meetings may be arranged if both people are
              comfortable and available.
            </li>
            <li>
              • You can talk once, or schedule ongoing check-ins — you don&apos;t
              have to commit long-term.
            </li>
            <li>
              • We aim to respond within <span className="font-semibold">1–3 days</span> of your request.
            </li>
          </ul>
        </div>
      </section>

      {/* CARDS: FIND / BECOME MENTOR */}
      <section className="mb-14 grid gap-8 md:grid-cols-2">
        {/* Find a Mentor */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              I want to find a mentor
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              If you&apos;d like to talk to someone who understands life as an
              international student, fill out this form with your basic
              information, schedule, and what you&apos;d like support with.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0P7o4BpiqXHF61V5nyZvatrFyFduusxnvQCF7SEvoNLwjRA/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center mt-2 px-5 py-3 rounded-xl bg-[#7db249] text-white text-sm md:text-base font-semibold hover:bg-[#6aa03e] transition"
          >
            Fill out the “Find a Mentor” form
          </a>
        </div>

        {/* Become a Mentor */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              I&apos;m interested in becoming a mentor
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              If you feel ready to support other international students, you can
              sign up as a mentor. We&apos;re especially looking for students
              who are patient, good listeners, and comfortable respecting
              boundaries.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScItrJ8-Ax-ceeUrve0Kzl69hG-81qS0Zx-RQMGuzI7MhW5zg/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center mt-2 px-5 py-3 rounded-xl bg-white text-[#7db249] border border-[#7db249] text-sm md:text-base font-semibold hover:bg-[#f3f7ec] transition"
          >
            Fill out the “Become a Mentor” form
          </a>
        </div>
      </section>

      {/* FAQ / BOUNDARIES */}
      <section className="mb-4">
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            A few important notes
          </h2>
          <ul className="text-gray-700 text-sm md:text-base leading-relaxed space-y-2">
            <li>• Mentors are students, not professional counselors or lawyers.</li>
            <li>
              • For urgent safety concerns, please contact 988 or emergency
              services before using this site.
            </li>
            <li>
              • You are allowed to change mentors or say you don&apos;t feel
              comfortable — your feelings matter.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

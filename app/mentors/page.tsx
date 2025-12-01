import Image from "next/image";

const FIND_MENTOR_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0P7o4BpiqXHF61V5nyZvatrFyFduusxnvQCF7SEvoNLwjRA/viewform?usp=publish-editor";

const BECOME_MENTOR_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScItrJ8-Ax-ceeUrve0Kzl69hG-81qS0Zx-RQMGuzI7MhW5zg/viewform?usp=publish-editor";

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-16 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Peer Mentors for International Students
              </h1>
              <p className="mt-5 text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
                MindBridge mentors are students and community members who understand
                how hard it can be to study in a new country. They are here to listen,
                share what they have learned, and help you feel less alone.
              </p>
              <p className="mt-3 text-sm text-gray-600 max-w-xl leading-relaxed">
                Mentors are not therapists or crisis counselors. They are people
                who care and want to support you as you navigate daily life at
                Green River.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={FIND_MENTOR_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#7db249] text-white text-sm md:text-base font-semibold hover:bg-[#6aa03e] transition"
                >
                  I want to find a mentor
                </a>
                <a
                  href={BECOME_MENTOR_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#7db249] text-[#7db249] text-sm md:text-base font-semibold hover:bg-green-50 transition"
                >
                  I am interested in becoming a mentor
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src="/mentor_help.jpeg"
                  alt="Student offering guidance to another student"
                  width={450}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY PEER MENTORING MATTERS */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why peer mentoring matters
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Many international students feel pressure to be strong all the time.
                It can be hard to ask for help or to explain what you are going
                through in a second language. A peer mentor can be someone you talk
                to without feeling judged.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Mentors can help you talk through challenges, think about next steps,
                and celebrate wins. They might share campus resources, study tips,
                or simple things that helped them feel more at home.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What mentors can help with
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li>Talking about homesickness, culture shock, or feeling out of place.</li>
                <li>Adjusting to classes, group work, and communication styles at Green River.</li>
                <li>Finding campus resources that fit your situation and your background.</li>
                <li>Practicing conversations in English in a low pressure environment.</li>
                <li>Setting gentle goals related to well-being, school, or daily routines.</li>
              </ul>
              <p className="mt-4 text-xs md:text-sm text-gray-500 leading-relaxed">
                Mentors listen and support. They do not diagnose, give legal or
                immigration advice, or replace professional counseling.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT TO EXPECT AS A STUDENT */}
        <section className="bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What you can expect if you ask for a mentor
            </h2>
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mb-6 leading-relaxed">
              If you fill out the “find a mentor” form, someone from the MindBridge
              team will look at your responses and try to match you with a mentor
              who fits your needs as much as possible.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Step 1
                </p>
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                  Tell us what you are looking for
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  You can share your background, what you are comfortable talking
                  about, and what kind of support feels most helpful.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Step 2
                </p>
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                  We review your form
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A student leader or project member looks at your answers and
                  matches you with a mentor who feels like a good fit when possible.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Step 3
                </p>
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                  Your mentor reaches out
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  You receive an email within a reasonable time frame with
                  information on how to connect, and you decide together how to meet.
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs md:text-sm text-gray-500 leading-relaxed max-w-3xl">
              Response times may vary based on how many requests are coming in and
              how many mentors are available. If you ever feel that your request is
              urgent or connected to immediate safety, please contact campus
              counseling or emergency services instead of waiting for a mentor.
            </p>
          </div>
        </section>

        {/* FOR POTENTIAL MENTORS */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                For potential mentors
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                If you want to become a mentor, you do not need to be perfect or
                have life completely figured out. You simply need to be willing
                to listen, respect different cultures, and show up consistently.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Mentors might be former or current international students, domestic
                students who care about global perspectives, or community members
                with experience supporting people across cultures.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Training or guidance can be provided on topics like active
                listening, setting boundaries, and referring students to campus
                resources when needed.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What mentors are asked to do
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li>Listen with respect and without judgment.</li>
                <li>Honor students&apos; cultural and language backgrounds.</li>
                <li>Meet or check in on a schedule that works for both people.</li>
                <li>Keep information private unless safety is a concern.</li>
                <li>Encourage students to use professional or campus services when needed.</li>
              </ul>
              <p className="mt-4 text-xs md:text-sm text-gray-500 leading-relaxed">
                If you are interested in becoming a mentor, you can fill out the
                form below and share your background, availability, and any
                experience you have working with international students.
              </p>
              <div className="mt-4">
                <a
                  href={BECOME_MENTOR_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#7db249] text-white text-sm font-semibold hover:bg-[#6aa03e] transition"
                >
                  Fill out the mentor interest form
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

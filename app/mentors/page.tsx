"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FIND_MENTOR_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0P7o4BpiqXHF61V5nyZvatrFyFduusxnvQCF7SEvoNLwjRA/viewform?usp=publish-editor";

const BECOME_MENTOR_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScItrJ8-Ax-ceeUrve0Kzl69hG-81qS0Zx-RQMGuzI7MhW5zg/viewform?usp=publish-editor";

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border-b border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-16 flex flex-col md:flex-row gap-10 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Peer Mentors for International Students
              </h1>

              <p className="mt-5 text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
                MindBridge mentors are students and community members who understand how
                hard it can be to study in a new country.
              </p>

              <p className="mt-3 text-sm text-gray-600 max-w-xl leading-relaxed">
                Mentors are not therapists or crisis counselors. They are people who care
                and want to support you.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={FIND_MENTOR_FORM_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#7db249] text-white text-sm md:text-base font-semibold hover:bg-[#6aa03e] transition"
                >
                  I want to find a mentor
                </a>

                <a
                  href={BECOME_MENTOR_FORM_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#7db249] text-[#7db249] text-sm md:text-base font-semibold hover:bg-green-50 transition"
                >
                  I am interested in becoming a mentor
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src="/mentor_help.jpeg"
                  alt="Student offering guidance"
                  width={450}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why peer mentoring matters */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-14"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why peer mentoring matters
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Many international students feel pressure to be strong all the time.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Mentors can help you talk through challenges, think about next steps, and
                celebrate wins.
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What mentors can help with
              </h3>

              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li>Homesickness, culture shock, feeling out of place.</li>
                <li>Adjusting to classes and group work.</li>
                <li>Finding campus resources.</li>
                <li>English conversation practice.</li>
                <li>Gentle well-being or study goals.</li>
              </ul>

              <p className="mt-4 text-xs md:text-sm text-gray-500 leading-relaxed">
                Mentors do not diagnose, give legal or immigration advice, or replace
                professional counseling.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Steps */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 border-t border-b border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What you can expect if you ask for a mentor
            </h2>

            <p className="text-sm md:text-base text-gray-700 max-w-3xl mb-6 leading-relaxed">
              Someone from the team will try to match you with a mentor who fits your
              needs.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "Step 1",
                  title: "Tell us what you are looking for",
                  text: "You can share your background, comfort, and needs.",
                },
                {
                  step: "Step 2",
                  title: "We review your form",
                  text:
                    "We try to match you with the best mentor available.",
                },
                {
                  step: "Step 3",
                  title: "Your mentor reaches out",
                  text:
                    "You receive an email and decide together how to meet.",
                },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    {item.step}
                  </p>

                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-xs md:text-sm text-gray-500 leading-relaxed max-w-3xl">
              If your situation is urgent, contact campus counseling or emergency
              services instead of waiting.
            </p>
          </div>
        </motion.section>

        {/* For Mentors */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-14"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                For potential mentors
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                You do not need to be perfect or have life figured out.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Mentors may be international students, domestic students, or community
                members who care about global perspectives.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Training can be provided for active listening and support.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What mentors are asked to do
              </h3>

              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li>Listen with respect.</li>
                <li>Honor cultural backgrounds.</li>
                <li>Check in consistently.</li>
                <li>Keep information private unless safety is a concern.</li>
                <li>Encourage students to use campus services when needed.</li>
              </ul>

              <p className="mt-4 text-xs md:text-sm text-gray-500 leading-relaxed">
                If you are interested, fill out the form below.
              </p>

              <div className="mt-4">
                <a
                  href={BECOME_MENTOR_FORM_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#7db249] text-white text-sm font-semibold hover:bg-[#6aa03e] transition"
                >
                  Fill out the mentor interest form
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

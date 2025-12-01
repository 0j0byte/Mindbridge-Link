"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#7db249] to-[#95c76e] py-16 md:py-20"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Get Involved with MindBridge Link
              </h1>
              <p className="mt-5 text-base md:text-lg max-w-xl leading-relaxed opacity-95">
                MindBridge Link was created for international students at Green River
                who want support, and for people who want to support them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-xl bg-white">
                <Image
                  src="/bridge_handshake.jpeg"
                  alt="People connecting"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* MAIN GRID */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
          >
            Ways to Get Involved
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-700 text-base md:text-lg max-w-3xl mb-10 leading-relaxed"
          >
            Choosing even one way to participate can make a real difference.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card Component */}
            {[
              {
                img: "/group_discussion.jpeg",
                title: "Join the Chatroom",
                text:
                  "If you are an international student, you can join the chat to vent, ask questions, or talk to people who understand.",
                link: "/chat",
                label: "Go to the chatroom",
                external: false,
              },
              {
                img: "/mentor_help.jpeg",
                title: "Support as a Peer Mentor",
                text:
                  "If you want to listen and support others, you can apply to be a peer mentor.",
                link: "/mentors",
                label: "Learn about the mentor role",
                external: false,
              },
              {
                img: "/study_room.jpeg",
                title: "Help Improve MindBridge Link",
                text:
                  "Your feedback helps us understand what is working and what needs improvement.",
                link: FEEDBACK_FORM_URL,
                label: "Fill out the feedback form",
                external: true,
              },
              {
                img: "/volunteer_badge.jpeg",
                title: "Partner with MindBridge Link",
                text:
                  "Campus offices, clubs, and organizations can collaborate with us to support international students.",
                link: PARTNER_FORM_URL,
                label: "Fill out the partner interest form",
                external: true,
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex gap-4"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-3">
                    <a
                      href={item.link}
                      {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="inline-flex items-center text-sm font-semibold text-[#7db249] hover:underline"
                    >
                      {item.label}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MORE FROM THIS PROJECT */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 bg-white"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              More from this project
            </h2>

            <p className="text-gray-700 text-sm md:text-base max-w-3xl mb-6 leading-relaxed">
              MindBridge Link is part of a larger student-created project.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-sm md:text-base text-gray-800">
                <p className="font-semibold text-gray-900">Live now</p>

                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      className="text-[#7db249] hover:underline font-semibold"
                    >
                      Instagram campaign
                    </a>{" "}
                    sharing resources and reminders.
                  </li>

                  <li>
                    <a
                      href={FEEDBACK_FORM_URL}
                      target="_blank"
                      className="text-[#7db249] hover:underline font-semibold"
                    >
                      Feedback form
                    </a>{" "}
                    for suggestions and ideas.
                  </li>

                  <li>
                    <a
                      href={PARTNER_FORM_URL}
                      target="_blank"
                      className="text-[#7db249] hover:underline font-semibold"
                    >
                      Partner with us
                    </a>{" "}
                    for collaboration.
                  </li>
                </ul>
              </div>

              <div className="space-y-2 text-sm md:text-base text-gray-800">
                <p className="font-semibold text-gray-900">Coming soon</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Podcast episode about international student experiences.</li>
                  <li>Infographics & brochure for quick information.</li>
                  <li>Expanded resource guide.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-200 bg-gray-50"
      >
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
      </motion.footer>
    </div>
  );
}

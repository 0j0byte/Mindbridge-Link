"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f3f7ec] to-[#e7f2d9]">
      {/* HERO */}
      <section className="w-full py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-wide text-[#648837] uppercase mb-3">
              Resources
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              One place to start when you are not sure where to go.
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
              This page brings together ideas, starting points, and types of
              support for international students at Green River. It is not a
              complete list, but it is meant to help you see that there are
              options and people who want to help.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/study_room.jpeg"
                alt="Students studying together in a library"
                width={600}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESOURCE SECTIONS */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12">
          {/* Emotional Support */}
          <motion.div
            className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 md:p-8 flex flex-col lg:flex-row gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative w-full lg:w-64 h-40 lg:h-44 rounded-2xl overflow-hidden bg-[#f3f7ec] flex-shrink-0">
              <Image
                src="/group_discussion.jpeg"
                alt="Students sitting in a circle having a discussion"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Emotional support & someone to talk to
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Feeling lonely, overwhelmed, or out of place is common when you
                are studying in a new country. It does not mean anything is
                wrong with you. Having even one person to talk to can make a big
                difference.
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
                <li>
                  Reach out in the{" "}
                  <span className="font-medium text-[#648837]">
                    #vent
                  </span>{" "}
                  or{" "}
                  <span className="font-medium text-[#648837]">
                    #emotional-support
                  </span>{" "}
                  channels in the chat.
                </li>
                <li>
                  Talk with a trusted teacher, advisor, or staff member who
                  understands what international students go through.
                </li>
                <li>
                  Look for peer support programs, student clubs, or cultural
                  groups that feel welcoming.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Academics & Campus Life */}
          <motion.div
            className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 md:p-8 flex flex-col lg:flex-row gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative w-full lg:w-64 h-40 lg:h-44 rounded-2xl overflow-hidden bg-[#f3f7ec] flex-shrink-0">
              <Image
                src="/students_group_2.jpeg"
                alt="Students working together at a table"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Academic & campus support
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                School systems and classroom expectations may be very different
                from the ones you are used to. It is okay to ask questions and
                ask for help before things become too stressful.
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
                <li>
                  Use the{" "}
                  <span className="font-medium text-[#648837]">
                    #study-tips
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-[#648837]">
                    #esl-help
                  </span>{" "}
                  channels to ask about studying, essays, or presentations.
                </li>
                <li>
                  Visit campus learning centers, writing labs, or tutoring
                  spaces when they are available.
                </li>
                <li>
                  Ask instructors early if you are confused about assignments,
                  deadlines, or how grading works.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Life in Washington & Community */}
          <motion.div
            className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 md:p-8 flex flex-col lg:flex-row gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative w-full lg:w-64 h-40 lg:h-44 rounded-2xl overflow-hidden bg-[#f3f7ec] flex-shrink-0">
              <Image
                src="/handshake_icon.jpeg"
                alt="Simple handshake icon"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Life in Washington & building community
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Adjusting to new weather, transportation, food, and social
                rules takes time. You are allowed to miss home and still want to
                build a life here.
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
                <li>
                  Share questions or tips in{" "}
                  <span className="font-medium text-[#648837]">
                    #living-in-washington
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-[#648837]">
                    #cultural-exchange
                  </span>{" "}
                  channels.
                </li>
                <li>
                  Join clubs, events, or small gatherings where you can meet
                  other students who are also trying to find their people.
                </li>
                <li>
                  Explore places near campus together with friends instead of
                  trying to figure out everything on your own.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Closing note */}
          <motion.p
            className="text-xs md:text-sm text-gray-500 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            This resource page does not replace professional help or official
            college information. It is a starting point created by students, for
            students, and can be expanded over time with specific links, phone
            numbers, and campus contacts as the MindBridge project grows.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

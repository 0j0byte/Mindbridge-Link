"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function GetInvolvedPage() {
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
              Get Involved
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Small actions can build a bridge for someone else.
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
              MindBridge Link grows when students, staff, and community members
              show up for one another. Whether you want to support others or
              receive support yourself, there is a place for you here.
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
                src="/bridge_handshake.jpeg"
                alt="Hands forming a bridge over water"
                width={600}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN OPTIONS */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            className="grid md:grid-cols-3 gap-8 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Become a Mentor */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#f3f7ec] flex items-center justify-center">
                  <Image
                    src="/mentor_help.jpeg"
                    alt="One person helping another up steps"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Become a Mentor
                  </h2>
                  <p className="text-xs text-gray-500">
                    For students, staff, or community members
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                If you enjoy listening, encouraging others, and sharing what
                you’ve learned about studying or living in Washington, you can
                make a real difference. Mentors help international students feel
                less alone and more confident navigating daily life.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScItrJ8-Ax-ceeUrve0Kzl69hG-81qS0Zx-RQMGuzI7MhW5zg/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#7db249] text-white text-sm font-medium hover:bg-[#6aa03e] transition"
              >
                Fill out the mentor interest form
              </a>
            </motion.div>

            {/* Find a Mentor */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#f3f7ec] flex items-center justify-center">
                  <Image
                    src="/students_group_2.jpeg"
                    alt="Students studying together at a table"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Find a Mentor
                  </h2>
                  <p className="text-xs text-gray-500">
                    For international students who want support
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                You do not have to figure everything out alone. A mentor can
                be someone to check in with, practice English, ask questions
                about culture or classes, or just talk to when school and life
                feel overwhelming.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd0P7o4BpiqXHF61V5nyZvatrFyFduusxnvQCF7SEvoNLwjRA/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-[#7db249] text-[#7db249] text-sm font-medium hover:bg-[#f3f7ec] transition"
              >
                Request a mentor
              </a>
            </motion.div>

            {/* Other Ways to Help */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#f3f7ec] flex items-center justify-center">
                  <Image
                    src="/volunteer_badge.jpeg"
                    alt="Volunteer badge icon"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Join the MindBridge Community
                  </h2>
                  <p className="text-xs text-gray-500">
                    For anyone who wants to support this project
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                You can help simply by showing up. Share the website with a
                friend, invite classmates to the chat, or encourage students
                who might be lonely to reach out. In the future, this space may
                grow to include events, workshops, and more ways to get
                involved.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/chat"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
                >
                  Join the chat spaces
                </a>
                <a
                  href="/resources"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  Explore resources
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Small note */}
          <motion.p
            className="mt-10 text-xs md:text-sm text-gray-500 max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            MindBridge Link is a student-led project that is still growing. The
            forms above do not guarantee immediate matching or placement, but
            they allow interested students and volunteers to express interest so
            future organizers can continue building this program with real
            community needs in mind.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

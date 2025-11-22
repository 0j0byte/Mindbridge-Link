"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#7db249] to-[#95c76e] py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-20">

          {/* LEFT TEXT */}
          <motion.div
            className="flex-1 text-white"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-sm">
              Supporting International Students at Green River
            </h1>

            <p className="mt-6 text-lg sm:text-xl opacity-95 max-w-2xl leading-relaxed">
              Mind Bridge is a safe, welcoming space where students can connect, grow, and
              receive understanding support from peers who truly get it.
            </p>

            <div className="mt-10 flex gap-4 sm:gap-6 flex-wrap">
              <a
                href="/chat"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#7db249] rounded-xl text-lg font-semibold shadow-md hover:bg-green-50 transition"
              >
                Join the Chat
              </a>

              <a
                href="/mentors"
                className="px-6 py-3 sm:px-8 sm:py-4 border border-white text-white rounded-xl text-lg font-medium hover:bg-white hover:text-[#7db249] transition"
              >
                Find a Mentor
              </a>
            </div>
          </motion.div>

          {/* RIGHT HERO IMAGE */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/students_group_1.jpeg"
                alt="Students group"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT US */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-white shadow-lg rounded-3xl p-10 sm:p-14 border border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
            About Us
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
            <strong className="text-gray-900">Our Mission:</strong><br />
            At Mind Bridge, we believe in the power of empathy, prioritizing mental
            health, connection, and growth. We want to walk beside international students
            at Green River by guiding them to find strength, confidence, and belonging.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            This website is for international students, peers, teachers, and the public
            alike. Our goal is to help create resources and build connections.
          </p>
        </div>
      </motion.section>

      {/* GOALS SECTION */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-32 mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
          Our Goals
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">

          {/* Goal Card */}
          {[{
            title: "Connection",
            img: "/handshake_icon.jpeg",
            text: "Encourage international students to build strong, supportive connections.",
          },{
            title: "Awareness",
            img: "/open_book.jpeg",
            text: "Spread awareness about the mental health experiences of international students.",
          },{
            title: "Involvement",
            img: "/volunteer_badge.jpeg",
            text: "Motivate peers, staff, and community members to support international students.",
          }].map((goal, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-2xl p-10 border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Image src={goal.img} alt="icon" width={70} height={70} />
              </div>

              <h3 className="text-2xl font-semibold text-[#7db249] mb-4">{goal.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{goal.text}</p>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-10 text-center text-sm">
        <p>© {new Date().getFullYear()} Mind Bridge. All rights reserved.</p>
        <p className="mt-2 opacity-70">Created for Green River College</p>
      </footer>

    </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 pt-20 pb-10"
      >
        <h1 className="text-4xl font-bold text-gray-900">
          Support and Resources
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
          International students face unique challenges including language
          barriers, pressure to succeed, cultural adjustment, family separation,
          and isolation. A 2024 study found that international students attempt
          suicide more frequently than domestic students, confirming that
          traditional mental health systems do not meet all students equally
          (source: National Library of Medicine).
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
          This page brings together culturally responsive support created for
          international students at Green River College. These resources are
          easy to access, confidential, and designed to meet the emotional,
          academic, and cultural needs of our community.
        </p>
      </motion.section>

      {/* SECTION 1 */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mt-10"
      >
        <h2 className="text-2xl font-semibold text-gray-900">Immediate Help</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-sm rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Green River Counseling Center
            </h3>
            <p className="mt-3 text-gray-700">
              Free and confidential support for all GRC students. Counselors are
              trained to work with culturally diverse and multilingual
              backgrounds. Sessions are available online and in person.
            </p>

            <a
              className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              href="https://www.greenriver.edu/students/academic-and-career-resources/counseling-services/"
              target="_blank"
            >
              Visit Counseling Center
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-sm rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900">Emergency</h3>
            <p className="mt-3 text-gray-700">
              If you or someone you know is in danger or facing an urgent mental
              health crisis, call 911 immediately. International students living
              on or near campus should use this number for emergencies.
            </p>

            <a
              className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              href="https://www.greenriver.edu/campus/police/"
              target="_blank"
            >
              Campus Safety Information
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 2 */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mt-16"
      >
        <h2 className="text-2xl font-semibold text-gray-900">
          Support for International Students
        </h2>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "International Student Services (ISS)",
              text: "Assistance with immigration documents, visa questions, housing, cultural adjustment, and concerns specific to your international student experience.",
              link: "https://www.greenriver.edu/international/",
              label: "Visit ISS Page",
            },
            {
              title: "Multilingual Support",
              text: "Access information in your preferred language. Browse translated materials, interpreters, and communication assistance.",
              link:
                "https://www.dshs.wa.gov/office-of-the-secretary/office-of-diversity-languages-and-interpretation-services",
              label: "View Language Support Services",
            },
            {
              title: "Tutoring and Academic Help",
              text: "Free tutoring for writing, math, STEM, and English language learning. Welcoming and understanding toward ESL students.",
              link:
                "https://www.greenriver.edu/students/academic-and-career-resources/tutoring-and-resource-center-trc/",
              label: "Visit Tutoring Center",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-sm rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-700">{item.text}</p>

              <a
                href={item.link}
                target="_blank"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                {item.label}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 3 */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mt-16"
      >
        <h2 className="text-2xl font-semibold text-gray-900">
          Community and Belonging
        </h2>

        <p className="mt-4 text-gray-700 max-w-3xl">
          Many international students struggle to find community and belonging.
          These programs offer free emotional support and culturally grounded
          spaces to share experiences.
        </p>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "7 Cups",
              text:
                "Free and anonymous chats with trained listeners from various cultural backgrounds.",
              link: "https://www.7cups.com",
              label: "Visit 7 Cups",
            },
            {
              title: "The Steve Fund",
              text:
                "Support for students of color with a focus on identity-centered emotional wellness.",
              link: "https://www.stevefund.org",
              label: "Visit The Steve Fund",
            },
            {
              title: "DoSomething",
              text:
                "Student-led campaigns promoting mental wellness, belonging, and community advocacy.",
              link: "https://www.dosomething.org",
              label: "Visit DoSomething",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-sm rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-700">{item.text}</p>

              <a
                href={item.link}
                target="_blank"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                {item.label}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 4: PROJECT LINKS */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mt-20"
      >
        <h2 className="text-2xl font-semibold text-gray-900">
          More from this project
        </h2>
        <p className="mt-3 text-gray-700">
          These deliverables were created by students at Green River.
        </p>

        <ul className="mt-6 space-y-4 text-gray-800">
          <li>
            <a
              href="https://www.instagram.com/mindbridge.greenriver"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              Instagram campaign
            </a>
          </li>
          <li>
            <a
              href="https://www.canva.com/design/DAG5oxA__Xw/7CfbvAp7TZU3IrC49aUJtA/view"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              Resource guide PDF
            </a>
          </li>
          <li>
            <a
              href="/FILE_2036.pdf"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              Project brochure
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScDyXkvA6LkpaoUPEWkutZpzO4y7J-v2gMga_Ycs-6rj8Wvsw/viewform"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              Feedback form
            </a>
          </li>
        </ul>
      </motion.section>
    </div>
  );
}

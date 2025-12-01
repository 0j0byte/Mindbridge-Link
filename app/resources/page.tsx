"use client";

import Image from "next/image";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f7ec] to-[#e7f2d9] py-16 px-6">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Resources for International Students</h1>
        <p className="mt-4 text-lg text-gray-600">
          Support designed to meet the emotional, academic, and cultural needs of international students.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">

        {/* STUDY HIGHLIGHT */}
        <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
            <Image src="/mentor_help.jpeg" width={40} height={40} alt="" className="rounded-md" />
            Mental Health Context
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Research from the National Institutes of Health (2024) found that international students 
            experience higher rates of suicide attempts compared to domestic students. This is often 
            connected to cultural stigma, separation from family, academic pressure, and difficulty accessing familiar support systems.
          </p>

          <p className="mt-3 text-gray-700">
            Because of this, culturally responsive resources are essential—not optional. The following 
            list includes support options that international students can access confidentially and safely.
          </p>

          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10973160/"
            target="_blank"
            className="inline-block mt-4 text-[#7db249] underline hover:text-[#587a32]"
          >
            View full study
          </a>
        </section>

        {/* CRISIS SECTION */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Crisis Support</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow border">
              <h3 className="font-semibold text-lg text-gray-800">U.S. Crisis Lifeline</h3>
              <p className="text-gray-600 mt-2">Call 988 from any U.S. phone.</p>
              <p className="text-gray-600">Available 24/7.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow border">
              <h3 className="font-semibold text-lg text-gray-800">Crisis Text Line</h3>
              <p className="text-gray-600 mt-2">Text HOME to 741741 for support.</p>
              <p className="text-gray-600">Confidential and available 24/7.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow border">
              <h3 className="font-semibold text-lg text-gray-800">International Hotlines</h3>
              <a
                href="https://www.opencounseling.com/suicide-hotlines"
                target="_blank"
                className="text-[#7db249] underline text-sm mt-2 inline-block"
              >
                Search by country
              </a>
            </div>

          </div>
        </section>

        {/* TALK TO SOMEONE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Talk to Someone</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Chatroom */}
            <div className="bg-white rounded-2xl p-6 shadow border flex items-start gap-4">
              <Image src="/bridge_handshake.jpeg" width={60} height={60} alt="" className="rounded-md" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">MindBridge Chatroom</h3>
                <p className="text-gray-600 mt-1">
                  A supportive space where students can connect, share challenges, or ask questions.
                  Mentors monitor the chatroom daily.
                </p>
                <a href="/chat" className="text-[#7db249] underline mt-2 inline-block">
                  Join the chatroom
                </a>
              </div>
            </div>

            {/* Mentor */}
            <div className="bg-white rounded-2xl p-6 shadow border flex items-start gap-4">
              <Image src="/handshake_icon.jpeg" width={60} height={60} alt="" className="rounded-md" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Find a Mentor</h3>
                <p className="text-gray-600 mt-1">
                  Request guidance from someone who understands the international student experience.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd0P7o4BpiqXHF61V5nyZvatrFyFduusxnvQCF7SEvoNLwjRA/viewform"
                  target="_blank"
                  className="text-[#7db249] underline mt-2 inline-block"
                >
                  Request a mentor
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* HIGH-VALUE RESOURCES */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Support</h2>

          <div className="space-y-4">
            <ResourceLink title="7 Cups — Free Emotional Support" url="https://www.7cups.com" />
            <ResourceLink title="ULifeline — Mental Health for College Students" url="https://ulifeline.org" />
            <ResourceLink title="The Steve Fund — Support for Students of Color" url="https://www.stevefund.org" />
            <ResourceLink
              title="NAMI — Mental Health Resources for Immigrant Communities"
              url="https://www.nami.org/Your-Journey/Identity-and-Cultural-Dimensions/Immigrants-and-Refugees"
            />
            <ResourceLink
              title="DoSomething.org — Mental Health Campaigns for Students"
              url="https://www.dosomething.org/us/campaigns?causes=mental-health"
            />
          </div>
        </section>

        {/* PARTNER SECTION */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-700 max-w-2xl">
            MindBridge Link is open to collaborations with campus departments, student groups,
            and community organizations committed to supporting international student well-being.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdHfOQGBkt-hwj22ihbcVneW6ulwthvNTcd9Hg36tXNXPChQQ/viewform?usp=dialog"
            target="_blank"
            className="inline-block mt-4 text-[#7db249] underline hover:text-[#587a32]"
          >
            Partnership Inquiry Form
          </a>
        </section>

      </div>
    </div>
  );
}

function ResourceLink({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      className="block bg-white border rounded-xl p-4 shadow hover:shadow-md transition"
    >
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-[#7db249] text-sm underline mt-1">Visit site</p>
    </a>
  );
}

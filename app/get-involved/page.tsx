export default function GetInvolvedPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Get Involved</h1>

      <p className="text-gray-700 mb-10">
        MindBridge Link is built for students, by students. Here are the ways
        you can get involved — whether you want to receive support, become a
        mentor, or help us grow this community.
      </p>

      {/* Become a Mentor */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Become a Mentor
        </h2>
        <p className="text-gray-700 mb-3">
          If you're passionate about helping others and you’ve overcome your own
          challenges as an international student, you can make a real impact.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScItrJ8-Ax-ceeUrve0Kzl69hG-81qS0Zx-RQMGuzI7MhW5zg/viewform?usp=publish-editor"
          className="px-5 py-2 bg-[#7db249] text-white rounded-lg hover:opacity-90 transition"
        >
          Apply to Become a Mentor
        </a>
      </section>

      {/* Find a Mentor */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Find a Mentor
        </h2>
        <p className="text-gray-700 mb-3">
          Need guidance, support, or someone to talk to who understands your
          experience? You can get matched with a trained peer mentor.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd0P7o4BpiqXHF61V5nyZvatrFyFduusxnvQCF7SEvoNLwjRA/viewform?usp=publish-editor"
          className="px-5 py-2 border border-[#7db249] text-[#7db249] rounded-lg hover:bg-green-50 transition"
        >
          Request a Mentor
        </a>
      </section>

      {/* Volunteer */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Volunteer With Us
        </h2>
        <p className="text-gray-700">
          We’re looking for volunteers who want to help with events,
          translations, outreach, and new projects. This section will expand
          soon — but you can express interest now by messaging in the chat!
        </p>
      </section>

      <p className="text-gray-500">
        New ways to get involved will appear here as MindBridge Link continues
        to grow.
      </p>
    </div>
  );
}

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* HEADER */}
      <header className="text-center py-16 px-6 bg-white border-b">
        <h1 className="text-4xl font-bold text-gray-900">
          Get Involved with MindBridge Link
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Whether you want to receive support, volunteer your time, or
          collaborate with us, MindBridge Link welcomes you. This project was
          created by students at Green River College and continues to grow
          through shared effort and community support.
        </p>
      </header>

      {/* MAIN GRID */}
      <section className="max-w-6xl mx-auto mt-16 px-6 grid gap-12 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-8 border">
          <img
            src="/mentor_help.jpeg"
            alt="Find a Mentor"
            className="w-full h-40 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Find a Mentor
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Request to be matched with a trained peer mentor who understands the
            challenges international students face. Mentors are here to listen,
            support, answer questions, and help you navigate life at Green River.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0P7o4BpiqXHF61V5nyZvatrFyFduusxnvQCF7SEvoNLwjRA/viewform?usp=publish-editor"
            target="_blank"
            className="inline-block px-5 py-3 bg-[#7db249] text-white rounded-lg font-medium hover:bg-[#6da545] transition"
          >
            Request a Mentor
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-8 border">
          <img
            src="/volunteer_badge.jpeg"
            alt="Become a Mentor"
            className="w-full h-40 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Become a Mentor
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Interested in supporting other students? You can apply to become a
            MindBridge mentor. Training and guidelines will be provided to make
            sure you feel confident and prepared.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScItrJ8-Ax-ceeUrve0Kzl69hG-81qS0Zx-RQMGuzI7MhW5zg/viewform?usp=publish-editor"
            target="_blank"
            className="inline-block px-5 py-3 bg-[#7db249] text-white rounded-lg font-medium hover:bg-[#6da545] transition"
          >
            Apply to Mentor
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-8 border">
          <img
            src="/handshake_icon.jpeg"
            alt="Partner with Us"
            className="w-full h-40 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Partner with Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you are an organization, program, or community member who would
            like to collaborate, we welcome partnerships that expand access to
            culturally responsive support.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdHfOQGBkt-hwj22ihbcVneW6ulwthvNTcd9Hg36tXNXPChQQ/viewform?usp=dialog"
            target="_blank"
            className="inline-block px-5 py-3 bg-[#7db249] text-white rounded-lg font-medium hover:bg-[#6da545] transition"
          >
            Partnership Form
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 text-center text-gray-600 text-sm">
        <p>MindBridge Link · Created by Students at Green River College</p>

        <div className="mt-4 flex justify-center gap-6 text-gray-600">
          <a href="/" className="hover:text-gray-900">Home</a>
          <a href="/chat" className="hover:text-gray-900">Chatroom</a>
          <a href="/mentors" className="hover:text-gray-900">Mentors</a>
          <a href="/resources" className="hover:text-gray-900">Resources</a>
          <a
            href="https://www.instagram.com/mindbridge.greenriver"
            target="_blank"
            className="hover:text-gray-900"
          >
            Instagram
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScDyXkvA6LkpaoUPEWkutZpzO4y7J-v2gMga_Ycs-6rj8Wvsw/viewform?usp=dialog"
            target="_blank"
            className="hover:text-gray-900"
          >
            Feedback
          </a>
        </div>
      </footer>
    </div>
  );
}

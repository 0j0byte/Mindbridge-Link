export default function MentorsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f3f7ec] to-[#e7f2d9] p-6">
      <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-10 text-center max-w-xl w-full">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Mentors
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Connect with support, guidance, and community. Choose an option below.
        </p>

        <div className="flex flex-col gap-6">

          {/* Find a Mentor Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0P7o4BpiqXHF61V5nyZvatrFyFduusxnvQCF7SEvoNLwjRA/viewform?usp=publish-editor"
            target="_blank"
            className="w-full px-6 py-4 bg-[#7db249] text-white font-medium text-lg rounded-xl shadow-md hover:bg-[#6aa03e] transition"
          >
            Find a Mentor
          </a>

          {/* Become a Mentor Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScItrJ8-Ax-ceeUrve0Kzl69hG-81qS0Zx-RQMGuzI7MhW5zg/viewform?usp=publish-editor"
            target="_blank"
            className="w-full px-6 py-4 bg-white text-[#7db249] border border-[#7db249] font-medium text-lg rounded-xl shadow-md hover:bg-[#effae3] transition"
          >
            Become a Mentor
          </a>

        </div>

        <p className="mt-10 text-gray-400 text-sm">
          More mentor features coming soon...
        </p>
      </div>
    </div>
  );
}

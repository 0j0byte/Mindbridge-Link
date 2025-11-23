export default function ResourcesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Resources</h1>

      <p className="text-gray-700 mb-10">
        Here are helpful tools, guides, and support options for international
        students at Green River College. These resources are meant to make your
        transition easier, whether you’re adjusting to life in Washington,
        learning English, or navigating school.
      </p>

      {/* Academic Support */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Academic & Campus Support
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            <a
              href="https://www.greenriver.edu/students/academics/tutoring-resources/"
              className="text-[#7db249] hover:underline"
            >
              Green River Tutoring & Learning Center
            </a>{" "}
            – free tutoring for writing, math, science, and more.
          </li>
          <li>
            <a
              href="https://www.greenriver.edu/students/academics/library/"
              className="text-[#7db249] hover:underline"
            >
              Holman Library
            </a>{" "}
            – research help, study spaces, printing, and technology resources.
          </li>
        </ul>
      </section>

      {/* Emotional Support */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Emotional & Mental Health Support
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            <a
              href="https://www.greenriver.edu/students/support-and-services/personal-counseling/"
              className="text-[#7db249] hover:underline"
            >
              GRC Personal Counseling
            </a>{" "}
            – free, confidential support for stress, anxiety, or adjustment.
          </li>
          <li>
            <span className="font-medium">Crisis Text Line:</span> Text{" "}
            <span className="font-semibold">HOME</span> to 741741.
          </li>
          <li>
            <span className="font-medium">988 Suicide & Crisis Lifeline:</span>{" "}
            Available 24/7 in any language.
          </li>
        </ul>
      </section>

      {/* Life in Washington */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Life in Washington
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            Local transit info:{" "}
            <a
              href="https://www.soundtransit.org/"
              className="text-[#7db249] hover:underline"
            >
              Sound Transit
            </a>
          </li>
          <li>
            <a
              href="https://kingcounty.gov/en/dept/dph/health-safety/disease-illness/covid19-care"
              className="text-[#7db249] hover:underline"
            >
              King County Health Resources
            </a>
          </li>
        </ul>
      </section>

      <p className="text-gray-500 mt-8">
        More resources will be added soon as MindBridge Link continues to grow.
      </p>
    </div>
  );
}

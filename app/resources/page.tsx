export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* HEADER */}
      <header className="text-center py-16 px-6 bg-white border-b">
        <h1 className="text-4xl font-bold text-gray-900">Resources</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          These resources are designed specifically with international students
          in mind. Many students face challenges around mental health, academic
          pressure, cultural adjustment, and homesickness. You are not alone,
          and help is available.
        </p>
      </header>

      {/* SECTION 1: Key Study */}
      <section className="max-w-4xl mx-auto mt-16 px-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Understanding International Student Mental Health
        </h2>
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            A recent peer-reviewed study found that international students
            attempt suicide at significantly higher rates than domestic students
            in the United States. This highlights the importance of culturally
            responsive support services that meet students where they are.
          </p>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10973160/"
            target="_blank"
            className="mt-4 inline-block text-[#7db249] font-medium hover:underline"
          >
            Read the full study
          </a>
        </div>
      </section>

      {/* SECTION 2: Green River Resources */}
      <section className="max-w-4xl mx-auto mt-20 px-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Support at Green River College
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Counseling */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Counseling Services</h3>
            <p className="text-gray-600 leading-relaxed mt-2">
              Free, confidential counseling for students. Support is available
              for stress, anxiety, cultural adjustment, and more.
            </p>
            <a
              href="https://www.greenriver.edu/students/counseling-services/"
              target="_blank"
              className="mt-4 inline-block text-[#7db249] hover:underline"
            >
              Visit Counseling Services
            </a>
          </div>

          {/* International Advising */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">International Student Advising</h3>
            <p className="text-gray-600 leading-relaxed mt-2">
              Advisers can help with immigration questions, paperwork, academic
              planning, cultural adjustment, and emergency situations.
            </p>
            <a
              href="https://www.greenriver.edu/international/"
              target="_blank"
              className="mt-4 inline-block text-[#7db249] hover:underline"
            >
              Visit International Programs
            </a>
          </div>

          {/* Crisis Line */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">24/7 Crisis Line</h3>
            <p className="text-gray-600 leading-relaxed mt-2">
              If you or someone you know is in immediate crisis, you can call
              King County Crisis Line for urgent support at any time.
            </p>
            <p className="mt-2 text-gray-900 font-semibold">
              Phone: 866-427-4747
            </p>
          </div>

          {/* Campus Safety */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Campus Safety</h3>
            <p className="text-gray-600 leading-relaxed mt-2">
              For emergencies on campus, contact Campus Safety. They can assist
              with well-being checks, safety concerns, and urgent support.
            </p>
            <p className="mt-2 text-gray-900 font-semibold">
              Phone: 253-288-3350
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: External Culturally Responsive Supports */}
      <section className="max-w-4xl mx-auto mt-20 px-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Culturally Responsive Online Support
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">7 Cups</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Free, anonymous online emotional support. Students can talk with
              trained listeners who understand cultural and adjustment stress.
            </p>
            <a
              href="https://www.7cups.com"
              target="_blank"
              className="mt-4 inline-block text-[#7db249] hover:underline"
            >
              Visit 7 Cups
            </a>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">The Steve Fund</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              The nation’s leading nonprofit focused on the mental health of
              students of color. Offers culturally grounded support and education.
            </p>
            <a
              href="https://www.stevefund.org"
              target="_blank"
              className="mt-4 inline-block text-[#7db249] hover:underline"
            >
              Visit The Steve Fund
            </a>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">ULifeline</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              A mental-health resource created specifically for college students.
              Offers self-assessments, coping tools, and guidance.
            </p>
            <a
              href="https://www.ulifeline.org"
              target="_blank"
              className="mt-4 inline-block text-[#7db249] hover:underline"
            >
              Visit ULifeline
            </a>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">DoSomething.org</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Youth-led social impact campaigns, including mental health,
              community building, and support opportunities.
            </p>
            <a
              href="https://www.dosomething.org"
              target="_blank"
              className="mt-4 inline-block text-[#7db249] hover:underline"
            >
              Visit DoSomething
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 text-center text-gray-600 text-sm">
        <p>MindBridge Link · Created by Students at Green River College</p>

        <div className="mt-4 flex justify-center gap-6 text-gray-600">
          <a href="/" className="hover:text-gray-900">Home</a>
          <a href="/chat" className="hover:text-gray-900">Chatroom</a>
          <a href="/mentors" className="hover:text-gray-900">Mentors</a>
          <a href="/get-involved" className="hover:text-gray-900">Get Involved</a>
          <a
            href="https://www.instagram.com/mindbridge.greenriver"
            target="_blank"
            className="hover:text-gray-900"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

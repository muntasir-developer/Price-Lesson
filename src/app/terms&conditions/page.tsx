// pages/terms.js
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions – Price Lesson</title>
        <meta
          name="description"
          content="Terms & Conditions of Price Lesson website and courses"
        />
      </Head>

      <main className="min-h-screen bg-black-900 text-gray-100 py-40 px-5 sm:px-10 md:px-20 lg:px-40">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Terms & Conditions – Price Lesson
        </h1>
        <p className="text-gray-400 text-center mb-8">
          <strong>Effective Date:</strong> 24 September 2025
        </p>

        <p className="text-gray-200 mb-6">
          Welcome to Price Lesson! By using our website, courses, or services,
          you agree to these Terms & Conditions. Please read them carefully.
        </p>

        {/* Section */}
        {[
          {
            title: "1. Use of Our Website and Services",
            items: [
              "You agree to use our website and courses only for educational purposes.",
              "You must not misuse the website or try to hack, copy, or steal our content.",
              "All content on this website (videos, articles, PDFs) is for learning only.",
            ],
          },
          {
            title: "2. Course Enrollment & Payments",
            items: [
              "All courses are paid through secure payment systems.",
              "Prices and discounts can change anytime; we’ll show the latest price at checkout.",
              "Payments are non-refundable unless stated otherwise in a course offer.",
            ],
          },
          {
            title: "3. Intellectual Property",
            items: [
              "All content on Price Lesson (videos, notes, logos, designs) is our property.",
              "You may not copy, sell, or share our content without permission.",
            ],
          },
          {
            title: "4. User Responsibilities",
            items: [
              "Provide accurate information when creating accounts or enrolling.",
              "Do not share your login or course access with others.",
              "Respect other learners and mentors in any online discussions or communities.",
            ],
          },
          {
            title: "5. Disclaimers",
            items: [
              "Price Lesson provides educational content only.",
              "We are not SEBI-registered advisors. Trading and investing carry risk.",
              "You should consult a financial advisor before making real investments.",
            ],
          },
          {
            title: "6. Limitation of Liability",
            items: [
              "Price Lesson is not responsible for any financial loss you may face using the information provided.",
              "We do not guarantee profits or trading success.",
            ],
          },
          {
            title: "7. Changes to Terms",
            description:
              "We may update these Terms at any time. The latest version will always be posted on our website with the updated date.",
          },
          {
            title: "8. Governing Law",
            description:
              "These Terms are governed by the laws of India. Any disputes will be resolved in the courts of India.",
          },
          {
            title: "9. Contact Us",
            description:
              "If you have questions about these Terms:\n📧 contact@pricelesson.in\n📞 +91-8578064265",
            contact: true,
          },
        ].map((section, idx) => (
          <section
            key={idx}
            className="mb-6 bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              {section.title}
            </h2>

            {section.items && (
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {section.description && (
              <p className="text-gray-300 whitespace-pre-line">
                {section.description}
              </p>
            )}

            {section.contact && (
              <p className="text-gray-300 mt-2 whitespace-pre-line">
                📧{" "}
                <a
                  href="mailto:contact@pricelesson.in"
                  className="text-blue-400 underline"
                >
                  contact@pricelesson.in
                </a>
                <br />
                📞 +91-8578064265
              </p>
            )}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

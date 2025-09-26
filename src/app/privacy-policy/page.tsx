// pages/privacy-policy.js

import Footer from "@/components/Footer";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Price Lesson</title>
        <meta
          name="description"
          content="Privacy Policy for Price Lesson Hindi. Learn how we collect and use your data while ensuring your privacy."
        />
      </Head>

      <main className="min-h-screen bg-black-900 text-gray-100 py-40 px-5 sm:px-10 md:px-20 lg:px-40">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
          Privacy Policy
        </h1>
        <p className="mb-6 text-gray-400 text-center">
          Effective Date: 24 September 2025
        </p>
        <p className="mb-8 text-gray-200">
          At <strong>Price Lesson</strong>, your privacy is important to us.
          This policy explains what information we collect, why we collect it,
          and how we keep it safe.
        </p>

        {/* Sections */}
        {[
          {
            title: "1. What Information We Collect",
            content: [
              "Your name, email, phone number – so we can contact you.",
              "Course information – which courses you enrolled in and your progress.",
              "Payment information – securely through trusted payment systems (we don’t store card details).",
              "Website usage info – pages visited, device type, etc.",
            ],
          },
          {
            title: "2. How We Use Your Information",
            content: [
              "Provide access to courses and resources.",
              "Send confirmations, updates, or support messages.",
              "Improve our website and courses.",
              "Follow legal rules if required.",
            ],
          },
          {
            title: "3. Do We Share Your Information?",
            content: [
              "We don’t sell or share your info for profit. We may share it only with:",
              "Service providers like payment processors or hosting.",
              "Legal authorities if required by law.",
            ],
          },
          {
            title: "4. Cookies & Tracking",
            content: [
              "Our website uses cookies to improve functionality. You can disable cookies, but some features may not work properly.",
            ],
          },
          {
            title: "5. Keeping Your Data Safe",
            content: [
              "We protect your data using secure servers and encryption, though no system is 100% safe online.",
            ],
          },
          {
            title: "6. Your Rights",
            content: [
              "Access the information we hold about you.",
              "Correct any wrong info.",
              "Opt-out of promotional messages.",
              "Request deletion of your account and data (where legally possible).",
            ],
          },
          {
            title: "7. Third-Party Links",
            content: [
              "We may link to sites like YouTube, Instagram, or Facebook. We are not responsible for their privacy policies.",
            ],
          },
          {
            title: "8. Children’s Privacy",
            content: [
              "We do not knowingly collect information from children under 13 years old.",
            ],
          },
          {
            title: "9. Updates to This Policy",
            content: [
              "We may update this policy occasionally. The updated date will be shown at the top.",
            ],
          },
          {
            title: "10. Contact Us",
            content: [
              "If you have questions, contact us at:",
              "Email: contact@pricelesson.in",
              "Phone: +91-8578064265",
            ],
          },
        ].map((section, idx) => (
          <section
            key={idx}
            className="mb-6 bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-200">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

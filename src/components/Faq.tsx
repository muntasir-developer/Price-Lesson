import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  ExternalLink,
} from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const faqs = [
    {
      question: "Do I need prior knowledge to join?",
      answer:
        "No. We start from the basics, so even complete beginners can learn.",
      icon: "👉",
    },
    {
      question: "Will I get lifetime access?",
      answer:
        "Yes! All 34 recorded lectures + PDF notes are yours for lifetime.",
      icon: "👉",
    },
    {
      question: "How do I clear my doubts?",
      answer:
        "We conduct one live doubt-clearing session every week with our mentors.",
      icon: "👉",
    },
    {
      question: "Is this course online?",
      answer: "100% online – learn at your own pace, anytime, anywhere.",
      icon: "👉",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section
      className="relative py-20 bg-gray-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <div
        className="absolute pointer-events-none opacity-20 sm:opacity-30"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, rgba(34, 197, 94, 0.1) 30%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(15px)",
          transition: "all 0.3s ease-out",
        }}
      />

      {/* Large spotlight for desktop */}
      <div
        className="absolute pointer-events-none opacity-0 sm:opacity-20 hidden sm:block"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, rgba(34, 197, 94, 0.08) 30%, rgba(59, 130, 246, 0.06) 50%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(25px)",
          transition: "all 0.3s ease-out",
        }}
      />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full border border-orange-500/30 mb-4 sm:mb-6">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <span className="text-orange-300 font-medium text-sm sm:text-base">
              Quick FAQs
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-3 sm:mb-4 px-4 sm:px-0">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Get instant answers to the most common questions about our course
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 mb-10 lg:mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const parentRect = e.currentTarget
                  .closest("section")
                  .getBoundingClientRect();
                setMousePosition({
                  x: rect.left + rect.width / 2 - parentRect.left,
                  y: rect.top + rect.height / 2 - parentRect.top,
                });
              }}
            >
              {/* Individual spotlight for each FAQ item */}
              <div
                className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(251, 146, 60, 0.3) 0%, rgba(34, 197, 94, 0.2) 40%, transparent 70%)",
                  filter: "blur(10px)",
                }}
              />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-green-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <button
                onClick={() => toggleFAQ(index)}
                className="relative w-full p-4 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-xl sm:rounded-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                    <span className="text-lg sm:text-2xl mt-0.5 sm:mt-1 flex-shrink-0">
                      {faq.icon}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="ml-3 sm:ml-4 flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-orange-400 transition-all duration-300" />
                    )}
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === index ? "max-h-96 mt-3 sm:mt-4" : "max-h-0"
                  }`}
                >
                  <div className="pl-8 sm:pl-12 pr-8 sm:pr-10">
                    <div className="w-full h-px bg-gradient-to-r from-orange-500/50 to-green-500/50 mb-3 sm:mb-4" />
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center px-4 sm:px-0">
          <div className="inline-block p-6 sm:p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl sm:rounded-3xl w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">✨</span>
            </div>

            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
              Still have questions?
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:flex-row sm:items-center">
              <button className="group relative px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 text-sm sm:text-base">
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="truncate">Visit Full FAQ Section</span>
              </button>

              <button className="group relative px-4 sm:px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-12 sm:w-24 h-12 sm:h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-5 sm:right-10 w-8 sm:w-16 h-8 sm:h-16 bg-green-500/10 rounded-full blur-lg animate-pulse delay-500" />
    </section>
  );
};

export default FAQSection;

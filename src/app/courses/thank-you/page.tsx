"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderSuccessPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Analytics tracking placeholder
    if (typeof window !== "undefined") {
      // Google Analytics 4
      // window.gtag?.("event", "purchase", {
      //   transaction_id: "ORD-2025-001234",
      //   value: 2999,
      //   currency: "INR",
      //   items: [{
      //     item_id: "stock-trading-course",
      //     item_name: "Complete Stock Market Trading Course",
      //     price: 2999,
      //     quantity: 1
      //   }]
      // });
      // Meta Pixel
      // window.fbq?.("track", "Purchase", {
      //   value: 2999,
      //   currency: "INR",
      //   content_name: "Complete Stock Market Trading Course",
      //   content_ids: ["stock-trading-course"],
      //   content_type: "product"
      // });
    }
  }, []);

  const handleContinue = () => {
    router.push("/my-courses");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <article className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 border border-gray-100">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div
              className={`relative w-20 h-20 sm:w-24 sm:h-24 ${
                mounted ? "animate-scale-in" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-12 h-12 sm:w-14 sm:h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-ping opacity-20" />
            </div>
          </div>

          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Payment Successful!
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Congratulations! Your enrollment is confirmed. You now have
              lifetime access to your course.
            </p>
          </header>

          {/* Order Details */}
          <section
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-8 border border-gray-200"
            aria-labelledby="order-details-heading"
          >
            <h2
              id="order-details-heading"
              className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4"
            >
              Order Details
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    Complete Stock Market Trading Course
                  </h3>
                  <p className="text-sm text-gray-600">
                    Full lifetime access • All modules included
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl font-bold text-gray-900">₹3101</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-mono font-medium text-gray-900">
                    ORD-2025-001234
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Message */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-8">
            <p className="text-sm text-blue-900 leading-relaxed text-center">
              A confirmation email has been sent to your registered email
              address. You can start learning immediately!
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <button
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Start learning your new course"
            >
              Start Learning Now →
            </button>

            <button
              onClick={() => router.push("/my-courses")}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-xl transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
              aria-label="View all your courses"
            >
              Go to My Courses
            </button>
          </div>

          {/* Footer Message */}
          <footer className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact our support team anytime.
            </p>
          </footer>
        </article>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}

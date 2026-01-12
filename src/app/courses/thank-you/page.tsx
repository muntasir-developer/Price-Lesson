"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderSuccessPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-full flex items-center justify-center">
        <article className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 border border-gray-100 w-full">
          {/* Success Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div
              className={`relative w-16 h-16 sm:w-20 sm:h-20 ${
                mounted ? "animate-scale-in" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
          <header className="text-center mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Your enrollment is confirmed! You now have lifetime access.
            </p>
          </header>

          {/* Order Details */}
          <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-200">
            <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Order Details
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
                    Complete Stock Market Trading Course
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Full lifetime access • All modules included
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    ₹3101
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-mono font-medium text-gray-900">
                    ORD-2025-001234
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Message */}
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 sm:p-4 mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-blue-900 text-center leading-relaxed">
              A confirmation email has been sent. You can start learning now!
            </p>
          </div>

          {/* Footer */}
          <footer className="text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              Need help? Contact support anytime.
            </p>
          </footer>
        </article>
      </div>

      {/* Animations */}
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

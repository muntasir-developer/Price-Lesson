import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  TrendingUp,
  Users,
  FileText,
  Video,
  Calendar,
  Download,
  Phone,
  Target,
  Clock,
} from "lucide-react";
import { fbq } from "./fpixel";

const TradingCourseSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 3);
      targetDate.setHours(0, 0, 0, 0);
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-green-500/30">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            <span className="text-green-400 font-semibold text-sm sm:text-base">
              Stock Market Trading Mastery
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight px-4">
            From Basics to Advance
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4">
            Learn. Trade. Succeed.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            At{" "}
            <span className="text-orange-400 font-semibold">Price Lesson</span>,
            we've designed a complete trading roadmap that takes you from being
            a beginner to becoming a confident trader. This course is not just
            about theory – it's about building real skills, mindset, and
            strategies to trade like a professional.
          </p>
        </div>

        {/* What You'll Learn Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              What You'll Learn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:scale-105 hover:bg-gray-800/70">
              <div className="text-3xl sm:text-4xl mb-4">📚</div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">
                Beginners
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-semibold mb-4">
                (Foundation for Trading)
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Stock market basics, essential terms & step-by-step trading
                setup.
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="relative group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:bg-gray-800/70">
              <div className="text-3xl sm:text-4xl mb-4">📊</div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">
                Intermediate
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-semibold mb-4">
                (Technical Skills for Traders)
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Chart reading, indicators, candlestick patterns & price action.
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="relative group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-500 hover:scale-105 hover:bg-gray-800/70">
              <div className="text-3xl sm:text-4xl mb-4">🧠</div>
              <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-2">
                Advanced
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-semibold mb-4">
                (Strategies & Psychology)
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Proven trading strategies, risk management & trader mindset.
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Course Highlights */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Course Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group hover:scale-105">
              <Video className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  40 Recorded Lectures
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Learn anytime, anywhere
              </p>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group hover:scale-105">
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Weekly Live Doubt Session
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Clear your queries with mentors
              </p>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group hover:scale-105">
              <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  PDF Notes of All Lectures
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Easy to revise & practice
              </p>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group hover:scale-105">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Strategy-Oriented Training
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Practical knowledge, not just theory
              </p>
            </div>
          </div>
        </div>

        {/* Limited Time Offer with Timer */}
        <div className="bg-gradient-to-r from-orange-500/20 via-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 border border-orange-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-4 py-2 mb-4">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-semibold text-sm sm:text-base">
                💰 Limited-Time Offer
              </span>
            </div>

            {/* Countdown Timer */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 animate-pulse" />
                <span className="text-red-400 font-bold text-base sm:text-lg">
                  Offer Expires In:
                </span>
              </div>

              <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-4 mb-4 max-w-md mx-auto">
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] border border-green-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Days
                  </div>
                </div>
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] border border-blue-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Hours
                  </div>
                </div>
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] border border-orange-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Minutes
                  </div>
                </div>
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] border border-red-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-1">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Seconds
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Special Discounted Price
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 px-2">
              Enroll today at a{" "}
              <span className="text-orange-400 font-bold">
                special discounted price
              </span>{" "}
              and unlock lifetime access to our{" "}
              <span className="text-green-400 font-bold">
                Stock Market Trading Mastery Program
              </span>
              .
            </p>
            <p className="text-blue-400 italic text-sm sm:text-base lg:text-lg px-2">
              👉 Start your trading journey today and build financial freedom
              with the right knowledge.
            </p>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:gap-4 lg:gap-6 justify-center items-center px-4">
          <button
            onClick={() => {
              fbq("track", "EnrollNow");
              router.push("https://pelglp.courses.store/691872");
            }}
            className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
          >
            <Target className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm sm:text-base">🎯 Enroll Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          <a
            href="/brochure.pdf"
            download
            onClick={() => fbq("track", "DownloadBrochure")}
          >
            <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform duration-300" />
              <span className="text-sm sm:text-base">📖 Download Brochure</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </a>

          <a
            href="tel:+918578064265"
            onClick={() => fbq("track", "Contact")}
            className="w-full sm:w-auto"
          >
            <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center gap-2 sm:gap-3 justify-center w-full">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm sm:text-base">📞 Talk to Mentor</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
};

export default TradingCourseSection;

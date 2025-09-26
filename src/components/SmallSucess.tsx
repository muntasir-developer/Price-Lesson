import React from "react";
import {
  Star,
  TrendingUp,
  Users,
  BookOpen,
  Target,
  Lightbulb,
} from "lucide-react";

export default function SmallSuccessSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-32 right-32 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 lg:mb-8">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <span className="text-orange-300 font-medium text-sm sm:text-base">
              Our Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight px-4">
            Small Success,
            <br />
            Big Journey
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Every big dream begins with small wins. This is the story of how
            struggles became stepping stones to success.
          </p>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  The First Win
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                I still remember the day after a long losing streak when I
                finally made my{" "}
                <span className="text-orange-400 font-semibold">
                  first profitable trade
                </span>
                . The amount was small, but the confidence it gave me was
                life-changing.
              </p>
              <div className="bg-slate-800/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-green-500">
                <p className="text-green-300 italic text-sm sm:text-base">
                  "Bhai, your video helped me understand trading."
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-2">
                  That single line gave me a happiness no profit ever could.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  The Realization
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                It made me realize that my struggles, my journey, and my lessons
                could become someone else's{" "}
                <span className="text-blue-400 font-semibold">
                  stepping stone to success
                </span>
                .
              </p>
            </div>
          </div>

          {/* Right Column - Journey Challenges */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="bg-gradient-to-br from-red-900/20 to-slate-900/50 backdrop-blur-sm border border-red-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                </div>
                The Struggle
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-300">
                <p>
                  But my journey was not easy… I wandered a lot while trying to
                  learn finance and trading.
                </p>
                <p>
                  There was no proper{" "}
                  <span className="text-red-400 font-semibold">mentor</span> to
                  guide me. Whoever taught, taught only for their own profit.
                </p>
                <p>
                  I know the pain of being a small-town boy, struggling to learn
                  trading without money — when even buying a cycle was
                  difficult, how could I afford expensive courses?
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-slate-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                </div>
                The Promise
              </h3>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <p className="text-green-300 font-medium text-base sm:text-lg">
                  "No one else should go through the same struggle."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Price Lesson Solution */}
        <div className="bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-green-500/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Introducing{" "}
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Price Lesson
              </span>
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              Today, our country's youth lack even{" "}
              <span className="text-orange-400 font-semibold">
                basic financial education
              </span>{" "}
              — and because of that, many end up buried under loans and debt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4 sm:p-6 bg-slate-800/30 rounded-xl sm:rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Basic Finance
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Learn fundamentals step by step
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-slate-800/30 rounded-xl sm:rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Value Investing
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Smart investment strategies
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-slate-800/30 rounded-xl sm:rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Trading
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Confident trading techniques
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-slate-800/30 rounded-xl sm:rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Option Trading
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Advanced trading methods
              </p>
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-6 lg:mb-8">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                2,00,000+
              </div>
              <div className="text-green-300 text-xs sm:text-sm">
                Growing Family
              </div>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 sm:mb-4 px-4">
            <span className="text-orange-400">Price Lesson Hindi</span> - A
            Growing Community
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Inspiring each other not just in trading and investing, but in
            building{" "}
            <span className="text-green-400 font-semibold">
              true financial freedom
            </span>
            .
          </p>
        </div>

        {/* Final Message */}
        <div className="text-center bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-green-500/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 px-4">
            This Platform is for <span className="text-orange-400">You</span>
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            So your journey becomes easier than mine, and your small successes
            grow into your{" "}
            <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent font-semibold">
              big story
            </span>
            .
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
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
}

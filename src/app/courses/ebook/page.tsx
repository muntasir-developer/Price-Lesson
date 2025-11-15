"use client";
import React, { useState } from "react";
import {
  Brain,
  Clock,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  Mail,
  User,
  ArrowRight,
  Star,
  Youtube,
  Award,
  Target,
  Zap,
} from "lucide-react";

const TradingLandingPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "" });
    }, 1500);
  };

  const scrollToForm = () => {
    document
      .getElementById("opt-in-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const daysPlan = [
    { day: 1, topic: "Awareness", focus: "See the real problem", icon: "👁️" },
    { day: 2, topic: "Patience", focus: "Wait for A+ setups", icon: "⏰" },
    { day: 3, topic: "Detachment", focus: "Trade without ego", icon: "🎯" },
    { day: 4, topic: "Focus", focus: "Eliminate noise", icon: "🔍" },
    {
      day: 5,
      topic: "Discipline",
      focus: "Build habits that last",
      icon: "💪",
    },
  ];

  const benefits = [
    {
      icon: Brain,
      text: "Control Fear & Greed",
      color: "from-blue-500 to-blue-600",
    },
    { icon: Clock, text: "Build Patience", color: "from-cyan-500 to-cyan-600" },
    {
      icon: MessageCircle,
      text: "Trade Without Emotion",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: TrendingUp,
      text: "Create Discipline for Life",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "This mindset shift changed everything. I finally trade with confidence!",
      rating: 5,
    },
    {
      name: "Mike R.",
      text: "Best trading resource I've found. The 5-day challenge is pure gold.",
      rating: 5,
    },
    {
      name: "Alex K.",
      text: "Stopped revenge trading after Day 3. Can't thank you enough!",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Award, value: "200K+", label: "YouTube Subscribers" },
    { icon: Target, value: "10K+", label: "Active Traders" },
    { icon: Zap, value: "5 Days", label: "To Transform" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base">
                PL
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                Price Lesson
              </span>
            </div>
            <button
              onClick={scrollToForm}
              className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition-all font-medium text-sm sm:text-base"
            >
              Get Free eBook
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-blue-100">
                <Youtube className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                <span className="text-blue-700 font-medium">
                  From Price Lesson — 200K+ Subscribers
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Learn How Top 1% Traders Think
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                The 5-Day Trading Mindset Challenge
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Master emotional control, patience, and discipline — the real
                skills that separate professionals from amateurs.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 sm:py-6 border-y border-gray-100">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="text-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-1 sm:mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/25"
              >
                <span>📘 Get My Free eBook Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs sm:text-sm text-gray-500 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Free instant download. No credit card required.</span>
              </p>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xl">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-center p-4 sm:p-6 lg:p-8">
                  <div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">
                      🧠
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-white">
                      The 5-Day Trading Mindset Challenge
                    </h3>
                    <p className="text-sm sm:text-base text-blue-100">
                      Free eBook
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This eBook Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 sm:space-y-8 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              You don't need more indicators.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                {" "}
                You need more control.
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              After years of losing due to emotion, I realized mindset — not
              setups — was the missing piece. This 5-day challenge is the exact
              system that helped me trade calmly and confidently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all group"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <p className="font-semibold text-sm sm:text-base text-gray-900">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Start the 5-Day Challenge
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            What's Inside the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              eBook
            </span>
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {daysPlan.map((day, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="text-3xl sm:text-4xl lg:text-5xl flex-shrink-0">
                    {day.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-1 sm:mb-2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                        Day {day.day}
                      </span>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                        {day.topic}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                      {day.focus}
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden sm:block" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg inline-flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/25"
            >
              <span>📘 Get the Free eBook Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl shadow-xl">
              👨‍💼
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">
              Your Name
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Founder of Price Lesson
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
              Professional trader and educator helping thousands master the
              psychological side of trading through practical mindset training
              and proven strategies.
            </p>
            <div className="mt-4 sm:mt-6 text-blue-600 font-semibold text-base sm:text-lg">
              Join 10,000+ traders learning with Price Lesson
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-sm sm:text-base text-blue-600">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opt-in Form Section */}
      <section
        id="opt-in-form"
        className="py-12 sm:py-16 lg:py-20 scroll-mt-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
              Enter your details below to download instantly 👇
            </h2>

            {submitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                  Success! Check Your Email 📧
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Your free eBook is on its way to your inbox.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 underline font-semibold text-sm sm:text-base"
                >
                  Submit another email
                </button>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2 text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white border-2 border-gray-300 rounded-lg sm:rounded-xl px-10 sm:px-12 py-3 sm:py-4 text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2 text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white border-2 border-gray-300 rounded-lg sm:rounded-xl px-10 sm:px-12 py-3 sm:py-4 text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>🎁 Send Me the Free eBook</span>
                    </>
                  )}
                </button>

                <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed px-2">
                  You'll also get access to daily mindset lessons and free
                  trading tips from Price Lesson. No spam. Unsubscribe anytime.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base">
                PL
              </div>
              <span className="text-base sm:text-lg font-bold">
                Price Lesson
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button className="hover:text-blue-400 transition-colors">
                About
              </button>
              <button className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
                YouTube
              </button>
              <button className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-blue-400 transition-colors">
                Terms
              </button>
            </div>
          </div>
          <div className="text-center text-xs sm:text-sm text-gray-400 border-t border-gray-800 pt-6 sm:pt-8">
            © 2024 Price Lesson. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TradingLandingPage;

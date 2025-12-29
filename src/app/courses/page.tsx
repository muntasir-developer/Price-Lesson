"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronDown,
  PlayCircle,
  TrendingUp,
  ShieldCheck,
  Lock,
  Award,
  Users,
  Clock,
  VideoIcon,
  CalendarIcon,
  CheckCircle,
  AlertTriangle,
  Star,
  Play,
  Target,
  Shield,
  Timer,
  AlertCircle,
  ArrowRight,
  BookOpen,
  DollarSign,
} from "lucide-react";
import WhatsAppFloating from "@/components/WhatsApp";

export default function TradingCourseLanding() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const year = new Date().getFullYear();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const router = useRouter();

  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqData = [
    {
      id: 1,
      icon: <Users className="w-5 h-5" />,
      question: "Who is this course for?",
      answer:
        "This course is perfect for **complete beginners** who want to learn trading properly, **students and professionals** looking to create additional income streams, and **intermediate traders** who want structured, proven strategies to stop losing money.",
    },
    {
      id: 2,
      icon: <PlayCircle className="w-5 h-5" />,
      question: "How is this course different from free YouTube tutorials?",
      answer:
        "Unlike free content that is **scattered, incomplete, and often outdated**, this course provides a **step-by-step 18-module system**, 20+ hours of HD lessons, weekly live sessions, real-world examples, personalized trade insights, and access to a **VIP community** of profitable traders.",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-5 h-5" />,
      question: "What kind of results can I expect?",
      answer:
        "Trading is a skill, not a shortcut to wealth. Students who **follow the system and practice consistently** report **steady account growth**, disciplined execution, and the ability to apply **5 proven strategies with 80%+ success rate**.",
    },
    {
      id: 4,
      icon: <Award className="w-5 h-5" />,
      question: "Will I get a certificate after completing the course?",
      answer:
        "Yes! You'll receive a **Professional Trading Certificate** upon completion, which can help showcase your skills to employers, clients, or trading firms and validate your expertise in the stock market.",
    },
    {
      id: 5,
      icon: <DollarSign className="w-5 h-5" />,
      question: "Do I need a large investment to start trading?",
      answer:
        "No. Many students start with as little as **₹10,000–₹20,000 (~$100–$200)**. The strategies are designed to work with small accounts and scale as your capital grows, emphasizing **risk management and discipline**.",
    },
    {
      id: 6,
      icon: <Star className="w-5 h-5" />,
      question: "What makes this course truly special?",
      answer:
        "You'll get **exclusive personalized trade insights**, access to a **VIP community of profitable traders**, weekly **live strategy sessions**, and **lifetime updates** to all lessons and strategies — resources you won’t find anywhere else.",
    },
    {
      id: 7,
      icon: <Users className="w-5 h-5" />,
      question: "Who is the mentor?",
      answer:
        "The course is taught by **Md Monazir**, a trader, investor, and YouTuber with 200K+ subscribers. He focuses on **real-world strategies that work in 2025**, sharing actionable lessons from equities, options, and intraday trading.",
    },
    {
      id: 8,
      icon: <PlayCircle className="w-5 h-5" />,
      question: "Do I need prior experience to join?",
      answer:
        "No prior experience is needed. The course is designed to take you from **complete beginner to advanced trader**, covering everything from market basics, technical analysis, price action, to options and derivatives trading.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatText = (text: string): string => {
    return text.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-green-600 font-semibold">$1</strong>'
    );
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const nextMidnight = new Date();
      nextMidnight.setHours(24, 0, 0, 0); // reset to next midnight
      let diff = nextMidnight.getTime() - now.getTime();

      if (diff <= 0) diff += 24 * 60 * 60 * 1000;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-16 px-4 sm:px-6 lg:px-8">
          {/* Futuristic Background */}
          <div className="absolute inset-0 -z-10">
            {/* Glowing Orbs */}
            <div className="absolute top-10 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute -top-20 right-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          {/* Navbar */}
          <div className="max-w-7xl flex justify-between items-center mx-auto px-2 pt-8 sm:px-0">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/image/logo.png"
                alt="Company Logo"
                width={128}
                height={48}
                className="h-8 sm:h-12 w-auto"
              />
            </Link>

            {/* CTA Button (Mobile) */}
            <Link
              href="https://pelglp.courses.store/691872"
              onClick={() => {
                window.dataLayer?.push({
                  event: "cta_click",
                  cta_name: "get_started_mobile",
                  page: window.location.pathname,
                });
              }}
              className="absolute z-50 inline-flex sm:hidden
      overflow-hidden
      bg-orange-500
      text-white right-4 px-4 py-2 rounded-full text-sm font-semibold
      transition-all duration-300
      hover:scale-105
      shadow-lg
      hover:shadow-[0_0_20px_rgba(16,185,129,0.5),0_0_30px_rgba(37,99,235,0.6)]
      border border-white/20"
            >
              <span className="absolute top-8 left-0 h-[40%] w-[130%] bg-white opacity-50 blur-[10px] pointer-events-none animate-diagonal-shine rotate-[22deg]"></span>
              <span className="relative z-10">Get Started</span>
            </Link>

            {/* CTA Button (Desktop) */}
            <Link
              href="https://pelglp.courses.store/691872"
              onClick={() => {
                window.dataLayer?.push({
                  event: "cta_click",
                  cta_name: "get_started_desktop",
                  page: window.location.pathname,
                });
              }}
              className="hidden sm:inline-flex
      relative overflow-hidden
      items-center justify-center
      bg-orange-500
      text-white px-6 py-3 rounded-full text-base font-semibold
      transition-all duration-300
      hover:scale-105
      shadow-lg 
      hover:shadow-[0_0_20px_rgba(255,165,0,0.5),0_0_30px_rgba(255,140,0,0.6)]
      border border-orange-300/40"
            >
              <span className="absolute top-10 left-0 h-[35%] w-[120%] bg-white opacity-50 blur-[12px] pointer-events-none animate-diagonal-shine rotate-[22deg]"></span>
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12  lg:gap-x-52 relative pt-10 lg:pb-0 pb-[60vh] sm:pt-14 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left font-poppins">
                {/* Headline */}
                <div className="space-y-0">
                  <h1 className="lg:text-[39px] relative right-14 lg:right-0 text-2xl lg:leading-none leading-6 uppercase font-bold text-blue-700">
                    The Complete
                  </h1>
                  <h1
                    className="text-5xl sm:text-5xl lg:text-[5.4rem] uppercase leading-tighter
                   lg:leading-18  drop-shadow-sm font-anton tracking-normal relative lg:right-0 right-3 text-green-700 "
                  >
                    {" "}
                    Stock Market{" "}
                  </h1>
                  <h1 className="lg:text-[3rem] text-2xl relative right-17 lg:right-0 font-anton leading-tight tracking-wide  font-extrabold text-orange-600">
                    Trading Course
                  </h1>

                  {/* Bullet Points */}
                  <div className="space-y-4 font-poppins top-2 relative">
                    <div className="flex items-center gap-4 group pr-4 lg:pr-0 justify-center lg:justify-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="text-lg sm:text-xl text-gray-800 font-medium">
                        From Basic to Advanced
                      </span>
                    </div>

                    <div className="flex items-center gap-4 group justify-center lg:justify-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="text-lg sm:text-xl text-gray-800 font-medium">
                        20 Hour Recorded Classes
                      </span>
                    </div>

                    <div className="flex items-center gap-4 group relative left-12  lg:left-0 lg:justify-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="text-lg sm:text-xl text-gray-800 font-medium">
                        Weekly Live Sessions
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 text-sm font-poppins">
                  <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-gray-200 px-3 sm:px-4 py-2 rounded-full shadow-md">
                    <Users className="h-4 w-4 text-emerald-600" />
                    <span className="text-gray-800 flex items-center justify-center gap-2">
                      200000 Learners{" "}
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a2.97 ..." />
                      </svg>
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-gray-200 px-3 sm:px-4 py-2 rounded-full shadow-md">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-800">4.9/5 Rating</span>
                  </div>

                  <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-gray-200 px-3 sm:px-4 py-2 rounded-full shadow-md">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-800">4 years+ Experience</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start font-poppins">
                  <button
                    onClick={() => {
                      window.dataLayer?.push({
                        event: "cta_click",
                        cta_name: "enroll_course_now",
                        page: window.location.pathname,
                      });
                      router.push("https://pelglp.courses.store/691872");
                    }}
                    className="
      relative overflow-hidden
      text-white font-semibold
      px-10 sm:px-12 py-4 sm:py-5
      rounded-full text-lg sm:text-xl
      shadow-lg hover:shadow-xl
      transition-all duration-300
      hover:scale-[1.04]
      flex items-center justify-center
      bg-orange-500
      z-10
    "
                  >
                    {/* Diagonal Shine Effect */}
                    <span
                      className="
        absolute top-10 left-0 h-[30%] w-[90%]
        bg-white
        blur-[20px]
        opacity-100
        pointer-events-none
        animate-diagonal-shine
        rotate-[20deg]
        z-0
      "
                    ></span>

                    <span className="relative z-20">Enroll Course Now!</span>
                  </button>

                  <button
                    onClick={() => {
                      window.dataLayer?.push({
                        event: "cta_click",
                        cta_name: "watch_demo",
                        page: window.location.pathname,
                      });
                    }}
                    className="border border-gray-300 hover:border-emerald-400 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:bg-white/70 backdrop-blur-md shadow-sm"
                  >
                    Watch Demo
                  </button>
                </div>
              </div>
              {/* Right Side Image Placeholder */}
              {/* Mobile View (a) */}
              <div className="block lg:hidden">
                <div className="mt-[-30vh] overflow-hidden absolute w-[140vw] flex items-center justify-end rounded-[10rem] rotate-[55deg] bottom-0 top-[67vh] right-[-50vw] h-[94vh] border-r-2 border-blue-400">
                  <div className="flex mt-[5vh] w-[80vw] bg-gradient-to-r via-green-400 to-orange-400 rounded-[10rem] relative h-[95vh] top-[-1.5vw] border-r-2 ">
                    <Image
                      src="/image/smonazir.png"
                      alt="Stock Trading Illustration"
                      width={1000}
                      height={1000}
                      priority
                      className="object-contain rotate-[-58deg] relative right-8 top-[14vh] w-[1000px] h-[1000px] scale-[1.4]"
                    />
                  </div>
                </div>
              </div>
              {/* Desktop View (b) */}
              <div className="hidden lg:flex w-[600px] aspect-square justify-center items-center relative">
                {/* Outer dual-tone halo */}
                <div
                  className="absolute inset-0 rounded-full animate-spin-slower"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #b3e5fc, #80deea, #26c6da, #00acc1, #26c6da, #80deea, #b3e5fc)",
                    padding: "6px",
                    filter: "blur(2px) opacity(0.65)",
                  }}
                ></div>

                {/* Soft frosted glass frame */}
                <div
                  className="relative w-full h-full rounded-full overflow-hidden backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                  style={{
                    border: "10px solid rgba(255,255,255,0.45)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(240,240,240,0.25))",
                  }}
                >
                  {/* Shimmer ring */}
                  <div
                    className="absolute inset-0 rounded-full animate-shimmer"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.8) 15%, transparent 30%)",
                      mixBlendMode: "overlay",
                    }}
                  ></div>

                  {/* Image */}
                  <Image
                    src="/image/monazirbh.jpg"
                    alt="Stock Trading Illustration"
                    width={960}
                    height={960}
                    priority
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
              . .
              <div className="hidden lg:block">
                {/* Add image/illustration here */}
              </div>
            </div>
          </div>
        </section>
        {/* Problem section */}
        <section
          id="problem"
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-red-50"
        >
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 text-red-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Are You Making These Costly Trading Mistakes?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-2">
                95% of traders lose money because they lack proper education and
                strategy. Don’t be part of this statistic.
              </p>
            </div>

            {/* Visual Statistics */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
                The Harsh Reality of Trading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 relative">
                    <div className="w-full h-full rounded-full bg-red-100 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl font-bold text-red-600">
                        95%
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">📉</span>
                    </div>
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-red-600">
                    Lose Money
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    Within first year
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 relative">
                    <div className="w-full h-full rounded-full bg-yellow-100 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl font-bold text-yellow-600">
                        80%
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">⚠️</span>
                    </div>
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-yellow-600">
                    Quit Trading
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    After major losses
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 relative">
                    <div className="w-full h-full rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl font-bold text-emerald-600">
                        5%
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">📈</span>
                    </div>
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-emerald-600">
                    Consistently Profitable
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    With proper education
                  </div>
                </div>
              </div>
            </div>

            {/* Problems Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: "💸",
                  title: "Trading Without a Plan",
                  description:
                    "Jumping into trades based on emotions, tips, or gut feelings instead of proven strategies",
                  impact: "Average Loss: $5,000+",
                  visual: "bg-gradient-to-br from-red-100 to-red-200",
                },
                {
                  icon: "⚡",
                  title: "Poor Risk Management",
                  description:
                    "Risking too much on single trades, no stop losses, and not diversifying properly",
                  impact: "Account Wipeout: 67%",
                  visual: "bg-gradient-to-br from-orange-100 to-orange-200",
                },
                {
                  icon: "📚",
                  title: "Lack of Education",
                  description:
                    "Trying to learn from free YouTube videos and forums instead of structured learning",
                  impact: "Time Wasted: 2+ Years",
                  visual: "bg-gradient-to-br from-yellow-100 to-yellow-200",
                },
              ].map((problem, index) => (
                <div
                  key={index}
                  className={`${problem.visual} p-6 sm:p-8 rounded-2xl border border-red-200 shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl mb-4">
                      {problem.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="bg-red-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg">
                      {problem.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Solution Section */}
        <section id="solution" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                The Complete Trading Mastery System
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                From beginner to confident trader — master the art of profitable
                trading and build the lifestyle you deserve.
              </p>
            </div>

            {/* Before vs After */}
            <div className="bg-gradient-to-r from-red-50 via-gray-50 to-emerald-50 rounded-3xl p-6 sm:p-8 mb-16 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
                90-Day Transformation
              </h3>
              <div className="grid gap-8 items-center md:grid-cols-3">
                {/* BEFORE */}
                <div className="text-center">
                  <div className="bg-red-100 rounded-2xl p-6 h-full">
                    <div className="text-5xl sm:text-6xl mb-4">😰</div>
                    <h4 className="text-lg sm:text-xl font-bold text-red-600 mb-4">
                      BEFORE
                    </h4>
                    <div className="space-y-2 pl-16 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <span>❌</span>
                        <span>Losing money consistently</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>❌</span>
                        <span>Trading on emotions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>❌</span>
                        <span>No clear strategy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>❌</span>
                        <span>Stressed and confused</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-base sm:text-lg shadow-md">
                    90 Days Later ➡️
                  </div>
                </div>

                {/* AFTER */}
                <div className="text-center">
                  <div className="bg-emerald-100 rounded-2xl p-6 h-full">
                    <div className="text-5xl sm:text-6xl mb-4">🤑</div>
                    <h4 className="text-lg sm:text-xl font-bold text-emerald-600 mb-4">
                      AFTER
                    </h4>
                    <div className="space-y-2 lg:pl-20 pl-16 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>Consistent profits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>Disciplined execution</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>Proven strategies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>Confident & calm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features & Package */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Features List */}
              <div className="space-y-8 lg:pt-36">
                <div className="space-y-6">
                  {[
                    "5 Winning Strategies with 80%+ success rate",
                    "Risk Management Mastery to protect your capital",
                    "Psychology Hacks for consistent profits",
                    "Weekly Live Sessions with real-time guidance",
                    "Elite Community of profitable traders",
                    "Lifetime Access to updates & new strategies",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-3xl border border-emerald-200 shadow-md">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    What You Get
                  </h3>
                </div>

                {/* Package Items */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between space-x-3">
                    <div className="flex items-center space-x-3">
                      <VideoIcon className="h-5 w-5 text-blue-600" />
                      <span>40+ HD Trading Lessons</span>
                    </div>
                    <span className="font-semibold text-gray-700">₹3,999</span>
                  </div>

                  <div className="flex items-center justify-between space-x-3">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-red-600" />
                      <span>VIP Private Community Access</span>
                    </div>
                    <span className="font-semibold text-gray-700">₹2,499</span>
                  </div>

                  <div className="flex items-center justify-between space-x-3">
                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="h-5 w-5 text-yellow-600" />
                      <span>Weekly Live Doubt Sessions</span>
                    </div>
                    <span className="font-semibold text-gray-700">₹2,199</span>
                  </div>

                  <div className="flex items-center justify-between space-x-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-indigo-600" />
                      <span>Exclusive Personalized Trade Insights</span>
                    </div>
                    <span className="font-semibold text-gray-700">₹3,299</span>
                  </div>

                  <div className="flex items-center justify-between space-x-3">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-pink-600" />
                      <span>E-Book</span>
                    </div>
                    <span className="font-semibold text-gray-700">₹999</span>
                  </div>

                  {/* Total Row */}
                  <div className="flex items-center justify-between space-x-3 border-t pt-2">
                    <span className="font-bold text-lg">
                      Total Premium Value
                    </span>
                    <span className="font-bold text-lg text-green-600">
                      ₹12,999
                    </span>
                  </div>
                </div>

                {/* Pricing + CTA */}
                <div className="mt-8 p-6 bg-white rounded-2xl border border-emerald-300 text-center">
                  <div className="text-sm text-gray-600">Total Value</div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-400 line-through">
                    ₹12,999
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mt-1">
                    Offer Price: ₹2999
                  </div>
                  <p className="text-red-700 font-semibold text-sm sm:text-base">
                    You Save ₹9,999!
                  </p>

                  <button
                    onClick={() => {
                      window.dataLayer?.push({
                        event: "cta_click",
                        cta_name: "enroll_now_button",
                        page: window.location.pathname,
                      });
                      router.push("https://pelglp.courses.store/691872");
                    }}
                    className="
    mt-6 w-full sm:w-auto px-8 py-3 
    bg-orange-500 
    text-white text-lg font-semibold 
    rounded-full shadow-lg 
    transition-all duration-300
    hover:scale-[1.05]
    hover:shadow-[0_0_20px_rgba(255,165,0,0.5),0_0_30px_rgba(255,140,0,0.6)]
    relative overflow-hidden
  "
                  >
                    {/* Shine Effect */}
                    <span
                      className="
      absolute top-10 left-0 h-[35%] w-[120%]
      bg-white opacity-40
      blur-[12px]
      pointer-events-none
      animate-diagonal-shine
      rotate-[22deg]
    "
                    ></span>

                    <span className="relative z-10">
                      🚀 Enroll Now
                      <span className="hidden lg:inline">
                        {" "}
                        – Transform Your Trading
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What You'll Learn Section */}
        <section
          id="curriculum"
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block mb-4">
                <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                  COMPREHENSIVE CURRICULUM
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-tight">
                18-Module Trading
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Mastery Program
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                From beginner to advanced trader – a structured roadmap to
                financial mastery
              </p>
            </div>
            {/* Scrollable Grid Container */}
            <div className="max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {[
                  {
                    module: "Module 1",
                    title: "Introduction to Financial Markets",
                    description:
                      "Understand how financial markets work and their role in the economy.",
                    highlights: [
                      "Market types",
                      "Participants",
                      "Exchanges",
                      "Regulations",
                    ],
                    outcome:
                      "Gain complete clarity on how markets function globally.",
                  },
                  {
                    module: "Module 2",
                    title: "Basics of Stock Trading",
                    description:
                      "Learn stock trading fundamentals and how to place your first trade.",
                    highlights: [
                      "Stock basics",
                      "Order types",
                      "Bid/ask spread",
                      "Settlement",
                    ],
                    outcome:
                      "Be confident in executing your very first stock trade.",
                  },
                  {
                    module: "Module 3",
                    title: "Understanding Stocks & Indices",
                    description:
                      "Grasp how stocks and indices are valued and tracked.",
                    highlights: [
                      "Equity types",
                      "Indices role",
                      "Blue chips",
                      "Sector indices",
                    ],
                    outcome:
                      "Understand the backbone of stock market movement.",
                  },
                  {
                    module: "Module 4",
                    title: "Technical Analysis Basics",
                    description:
                      "Foundation of chart reading and price action understanding.",
                    highlights: [
                      "Charts",
                      "Timeframes",
                      "Support/resistance",
                      "Trends",
                    ],
                    outcome:
                      "Start identifying market directions with technical tools.",
                  },
                  {
                    module: "Module 5",
                    title: "Candlestick Patterns",
                    description:
                      "Learn how candlesticks reveal market psychology.",
                    highlights: [
                      "Doji",
                      "Hammer",
                      "Engulfing",
                      "Shooting star",
                    ],
                    outcome:
                      "Decode trader emotions directly from candlestick charts.",
                  },
                  {
                    module: "Module 6",
                    title: "Chart Patterns",
                    description:
                      "Recognize reversal and continuation patterns.",
                    highlights: [
                      "Head & Shoulders",
                      "Triangles",
                      "Flags",
                      "Double tops/bottoms",
                    ],
                    outcome:
                      "Spot major trend changes before they fully unfold.",
                  },
                  {
                    module: "Module 7",
                    title: "Indicators & Tools",
                    description:
                      "Use indicators to support your trading decisions.",
                    highlights: [
                      "Moving averages",
                      "RSI",
                      "MACD",
                      "Bollinger Bands",
                    ],
                    outcome:
                      "Enhance your decision-making with reliable trading tools.",
                  },
                  {
                    module: "Module 8",
                    title: "Price Action Trading",
                    description:
                      "Master trading without relying heavily on indicators.",
                    highlights: [
                      "Support/resistance zones",
                      "Breakouts",
                      "Pullbacks",
                      "Market structure",
                    ],
                    outcome:
                      "Trade confidently with pure market price behavior.",
                  },
                  {
                    module: "Module 9",
                    title: "Intraday & Swing Trading Strategies",
                    description:
                      "Practical trading methods for short and medium-term gains.",
                    highlights: [
                      "Scalping",
                      "Momentum",
                      "Trend following",
                      "Reversals",
                    ],
                    outcome:
                      "Have ready-to-use strategies for daily and swing trades.",
                  },
                  {
                    module: "Module 10",
                    title: "Risk Management & Trading Psychology",
                    description: "Develop discipline and manage trading risks.",
                    highlights: [
                      "Position sizing",
                      "Stop losses",
                      "Risk/reward",
                      "Mindset",
                    ],
                    outcome:
                      "Build the discipline and mindset of a professional trader.",
                  },
                  {
                    module: "Module 11",
                    title: "Introduction to Derivatives",
                    description: "Basics of futures and options trading.",
                    highlights: [
                      "What are derivatives",
                      "Contracts",
                      "Margins",
                      "Leverage",
                    ],
                    outcome:
                      "Understand the gateway to advanced trading instruments.",
                  },
                  {
                    module: "Module 12",
                    title: "Futures Trading",
                    description:
                      "Trading in futures markets with strategies and hedging.",
                    highlights: [
                      "Contract specs",
                      "Hedging",
                      "Speculation",
                      "Rollovers",
                    ],
                    outcome:
                      "Confidently trade and hedge with futures contracts.",
                  },
                  {
                    module: "Module 13",
                    title: "Options Trading Basics",
                    description:
                      "Understand calls, puts, and basic options usage.",
                    highlights: [
                      "Call/put options",
                      "Premiums",
                      "Moneyness",
                      "Expiration",
                    ],
                    outcome: "Grasp the building blocks of the options market.",
                  },
                  {
                    module: "Module 14",
                    title: "Options Strategies - Directional",
                    description:
                      "Directional strategies to profit from bullish or bearish trends.",
                    highlights: [
                      "Long call",
                      "Long put",
                      "Spreads",
                      "Protective strategies",
                    ],
                    outcome:
                      "Profit from clear market directions using options.",
                  },
                  {
                    module: "Module 15",
                    title: "Options Strategies - Non-Directional (Selling)",
                    description:
                      "Generate income from neutral or range-bound markets.",
                    highlights: [
                      "Iron condor",
                      "Straddles",
                      "Strangles",
                      "Credit spreads",
                    ],
                    outcome: "Earn consistent income in sideways markets.",
                  },
                  {
                    module: "Module 16",
                    title: "Advanced Greeks & Strategy Optimization",
                    description:
                      "Master options greeks for advanced risk management.",
                    highlights: ["Delta", "Gamma", "Theta", "Vega"],
                    outcome:
                      "Control risk like a pro using advanced option Greeks.",
                  },
                  {
                    module: "Module 17",
                    title: "Building Your Own Trading System",
                    description:
                      "Create a personal trading plan and test strategies.",
                    highlights: [
                      "Backtesting",
                      "Rules creation",
                      "Automation basics",
                      "System optimization",
                    ],
                    outcome:
                      "Have your very own trading system ready for execution.",
                  },
                  {
                    module: "Module 18",
                    title: "Live Market Analysis & Practice",
                    description: "Apply everything with live trading examples.",
                    highlights: [
                      "Real trades",
                      "Case studies",
                      "Market review",
                      "Hands-on practice",
                    ],
                    outcome:
                      "Step into the real market with guided live experience.",
                  },
                ].map((module, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Module Title */}
                    <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-4">
                      <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {module.module}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {module.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                      {module.description}
                    </p>

                    {/* Outcome */}
                    <p className="text-emerald-600 font-semibold text-sm sm:text-base mb-3">
                      🎯 {module.outcome}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {module.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Who Is This For */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
                Is This Course Right For You?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                This course is perfect if you identify with any of these
                situations
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
              {/* Perfect For */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-600 mb-6 sm:mb-8 flex items-center">
                  <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 mr-3 flex-shrink-0" />
                  Perfect For
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "Complete beginners who want to learn trading properly",
                    "People looking to create additional income streams",
                    "Professionals wanting to trade part-time",
                    "Anyone tired of losing money in the markets",
                    "Students ready to invest time in learning",
                    "Those wanting proven, tested strategies",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not For */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-6 sm:mb-8 flex items-center">
                  <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 mr-3 flex-shrink-0" />
                  Not For
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "People looking for get-rich-quick schemes",
                    "Those unwilling to practice and learn",
                    "Anyone expecting guaranteed profits",
                    "People not willing to manage risk",
                    "Those wanting to gamble, not trade",
                    "Anyone not committed to the learning process",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Meet Your Mentor */}
        <section className="relative py-24 px-6 sm:px-12 lg:px-20 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-gray-900 tracking-tight mb-4">
                Meet Your Trading Mentor
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans">
                Learn from one of today’s most practical and fast-growing
                trading educators. Gain access to strategies, concepts, and
                insights that are working right now in 2025—not outdated
                theories.
              </p>
            </div>

            {/* Mentor Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Mentor Image */}
              <div className="relative text-center lg:text-left">
                <div className="relative w-80 h-[460px] mx-auto lg:mx-0 mb-8 overflow-hidden rounded-[50%_45%_55%_50%] shadow-[0_0px_5px_6px_green] ring-4 ring-emerald-200 bg-white transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/image/mmonazir.jpg"
                    alt="Md Monazir"
                    width={500} // original width
                    height={500} // original height
                    className="w-full h-full object-cover filter brightness-95 contrast-105"
                  />

                  {/* Classical painted effect */}
                  <div className="absolute inset-0 rounded-[50%_45%_55%_50%] bg-gradient-to-t from-black/25 to-transparent pointer-events-none mix-blend-multiply"></div>
                  <div className="absolute inset-0 rounded-[50%_45%_55%_50%] bg-[url('https://www.transparenttextures.com/patterns/canvas.png')] opacity-20 pointer-events-none"></div>

                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-[50%_45%_55%_50%] ring-2 ring-emerald-50 pointer-events-none"></div>
                </div>
              </div>

              {/* Mentor Info */}
              <div className="space-y-10">
                {/* Name & Role */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-2">
                    Md Monazir
                  </h3>
                  <p className="text-xl text-emerald-600 font-medium font-sans">
                    Trader, Investor & YouTuber 🎥
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-5">
                  {[
                    {
                      icon: "🏆",
                      text: "Creator of Price Lesson हिंदी (200K+ subscribers) – one of India’s fastest-growing trading education channels",
                      color: "text-yellow-500",
                    },
                    {
                      icon: "💰",
                      text: "Applies and shares real-world, profitable trading strategies in equities, options, and intraday markets",
                      color: "text-green-500",
                    },
                    {
                      icon: "👥",
                      text: "Trained thousands of traders through YouTube videos, mentorship programs, and digital courses",
                      color: "text-blue-500",
                    },
                    {
                      icon: "📖",
                      text: "Founder of Price Lesson हिंदी, Wealth Lesson, and Market Lesson – simplifying trading, investing, and market news for everyday learners",
                      color: "text-purple-500",
                    },

                    {
                      icon: "🏅",
                      text: "Recognized as an emerging voice in financial education, inspiring thousands to take control of their financial journey",
                      color: "text-red-500",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <span
                        className={`text-2xl flex-shrink-0 mt-1 ${item.color}`}
                      >
                        {item.icon}
                      </span>
                      <p className="text-gray-700 text-lg font-sans">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mentor Quote */}
                <blockquote className="relative bg-white p-8 rounded-3xl border-l-4 border-emerald-600 shadow-md before:absolute before:-top-4 before:-left-4 before:w-10 before:h-10 before:bg-emerald-600 before:rounded-full">
                  <p className="text-gray-700 italic text-lg sm:text-xl mb-4 font-serif">
                    "My mission is simple: to teach only what’s working in this
                    year’s market. No fluff, no outdated methods—just clear,
                    actionable strategies you can use in 2025 and beyond."
                  </p>
                  <footer className="text-gray-900 font-semibold text-right font-sans">
                    – Md Monazir
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Futuristic Background Shapes */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-r from-purple-300 to-pink-400 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        </section>
        {/* Price section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-40">
          <div className="max-w-7xl mx-auto relative">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-200/40 via-purple-200/40 to-cyan-200/40 rounded-3xl blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-purple-50/50 rounded-3xl"></div>

            {/* Content Card */}
            <div className="relative bg-white/95 backdrop-blur-2xl border-2 border-red-300 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-md">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
                {/* Left Info */}
                <div className="lg:w-5/12 space-y-4 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-600 font-bold text-xs sm:text-sm uppercase tracking-wider">
                      Special Offer
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                    <span className="text-red-600">
                      The Complete Trading Course:
                    </span>{" "}
                    Master Stock Market{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                      76% OFF Today
                    </span>
                  </h3>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Transform from beginner to confident trader with 40+ HD
                    lessons, weekly live doubt sessions, personalized insights,
                    and lifetime access.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:space-x-6 justify-center lg:justify-start items-center text-xs sm:text-sm text-gray-600 mt-2 sm:mt-4 space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>40+ HD Lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>Weekly Live Mentorship</span>
                    </div>
                  </div>
                </div>

                {/* Timer */}
                <div className="lg:w-3/12 flex justify-center my-4 lg:my-0">
                  <div className="text-center">
                    <div className="text-red-600 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
                      Offer Expires In
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { value: timeLeft.hours, label: "Hours" },
                        { value: timeLeft.minutes, label: "Minutes" },
                        { value: timeLeft.seconds, label: "Seconds" },
                      ].map((time, index) => (
                        <div key={index} className="relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-red-200/50 to-purple-200/50 rounded-2xl blur-sm"></div>
                          <div className="relative bg-white border-2 border-red-300 rounded-2xl p-2 sm:p-3 shadow-sm">
                            <div className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">
                              {time.value.toString().padStart(2, "0")}
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-600 uppercase font-semibold">
                              {time.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 sm:mt-4 flex justify-center lg:justify-center text-xs sm:text-sm text-red-600 items-center space-x-1">
                      <Timer className="h-3 w-3" />
                      <span>Price increases at midnight</span>
                    </div>
                  </div>
                </div>

                {/* Right CTA */}
                <div className="lg:w-4/12 flex flex-col items-center lg:items-end space-y-4 sm:space-y-6">
                  <div className="text-center lg:text-right">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                      <span className="line-through text-gray-500 text-lg sm:text-xl">
                        ₹12,999
                      </span>
                      <span className="text-emerald-600 ml-2">₹2,999</span>
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      Save ₹9,999 Today!
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      window.dataLayer?.push({
                        event: "cta_click",
                        cta_name: "enroll_now_unlock_access",
                        page: window.location.pathname,
                      });
                      router.push("https://pelglp.courses.store/691872");
                    }}
                    className="
    group w-full sm:w-auto 
    bg-orange-500
    hover:bg-orange-600
    text-white px-6 sm:px-10 py-3 sm:py-4 
    rounded-2xl font-bold text-lg sm:text-xl 
    transition-all duration-300 transform 
    hover:scale-105 
    shadow-md 
    hover:shadow-[0_0_20px_rgba(255,165,0,0.5),0_0_35px_rgba(255,140,0,0.6)]
    flex items-center justify-center space-x-3
    relative overflow-hidden
  "
                  >
                    {/* Shine Effect */}
                    <span
                      className="
      absolute top-10 left-0 h-[40%] w-[130%]
      bg-white opacity-35 blur-[12px]
      pointer-events-none
      rotate-[22deg]
      animate-diagonal-shine
    "
                    ></span>

                    <AlertCircle className="h-5 w-5 animate-pulse relative z-10" />
                    <span className="relative z-10">
                      Enroll Now & Unlock Access
                    </span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>

                  <div className="text-center lg:text-right text-xs sm:text-sm text-gray-600">
                    ⚡ Instant access • 40+ Lessons • Lifetime updates • VIP
                    Community
                  </div>
                </div>
              </div>

              {/* Decorative bottom accent */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-red-600 via-purple-600 to-cyan-600 rounded-full"></div>
            </div>
          </div>
        </section>
        {/* FAQ section */}v
        <section className="relative min-h-[80vh] sm:min-h-screen py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-8 sm:top-20 left-4 sm:left-10 w-36 sm:w-72 h-36 sm:h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-8 sm:bottom-20 right-4 sm:right-10 w-52 sm:w-96 h-52 sm:h-96 bg-green-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 sm:w-80 h-44 sm:h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/30"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-md">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-2 sm:mb-4">
                Frequently Asked
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 bg-clip-text text-transparent mb-4 sm:mb-6">
                Questions
              </h3>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto leading-relaxed sm:leading-relaxed md:leading-loose break-words">
                Get instant answers to the most common questions about our
                trading course
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={faq.id}
                  className="group relative bg-white backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-orange-400/60 shadow-sm hover:shadow-md transition-all duration-500"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-green-500/0 to-blue-500/0 group-hover:from-orange-500/5 group-hover:via-green-500/3 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500"></div>

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="relative w-full p-4 sm:p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-2xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-green-500 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all duration-300">
                          {faq.icon}
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-300 break-words">
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`transform transition-all duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 group-hover:text-orange-500" />
                      </div>
                    </div>
                  </button>

                  {/* Answer Panel */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                      <div className="ml-12 sm:ml-14 pt-4 border-t border-slate-200">
                        <p
                          className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed break-words"
                          dangerouslySetInnerHTML={{
                            __html: formatText(faq.answer),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 sm:mt-14 text-center px-2">
              <div className="inline-flex flex-col sm:flex-row items-center justify-center p-6 sm:p-8 bg-white backdrop-blur-xl rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm sm:shadow-md max-w-lg mx-auto w-full gap-4 sm:gap-6">
                <div className="text-center sm:text-left flex-1">
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1 sm:mb-2">
                    Still have questions?
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Our support team is here to help you succeed
                  </p>
                </div>
                <button
                  onClick={() => router.push("/contact")}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 hover:from-orange-600 hover:via-green-600 hover:to-blue-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-orange-500/20 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  Contact Support
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Footer section */}
        <footer className="bg-white border-t border-gray-100 pb-36  lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Section */}
            <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              {/* Brand & tagline */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-gray-900 font-extrabold text-2xl md:text-3xl tracking-tight">
                  Price Lesson – Wealth Academy
                </h2>
                <p className="mt-3 text-gray-500 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                  Master timeless strategies to grow wealth smartly, combining
                  modern insights with classical principles.
                </p>
              </div>

              {/* Legal & Trust */}
              <div className="flex-1 flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap sm:items-center sm:justify-center md:justify-end gap-6 md:gap-10">
                {/* Trust Signals */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-emerald-600" />
                    <span className="text-gray-600">15,000+ Students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Secure Payments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span className="text-gray-600">
                      100% Satisfaction Guarantee
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Bar */}
            <div className="border-t border-gray-100">
              <div className="py-4 text-center text-xs text-gray-500">
                © {year} Price Lesson. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
        <>
          {showBar && (
            <div className="fixed bottom-0 left-0 w-full z-50 border-t border-gray-200">
              <div className="w-full backdrop-blur-lg bg-white/20 border-t border-white/30 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Offer Text */}
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-lg text-green-600 drop-shadow-md">
                      🚀 Special Offer:{" "}
                      <span className="text-orange-400">₹2,999 Only!</span>
                    </p>
                    <p className="text-sm sm:text-base text-blue-600 drop-shadow-md">
                      Save ₹9,999 – Complete Stock Trading Course
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="https://pelglp.courses.store/691872"
                    onClick={() => {
                      window.dataLayer?.push({
                        event: "cta_click",
                        cta_name: "enroll_now_start_trading",
                        page: window.location.pathname,
                      });
                    }}
                    className="
    relative inline-block px-6 py-3 
    font-bold text-sm text-white rounded-xl
    bg-orange-500
    border border-orange-300/40
    shadow-lg
    transition-all duration-300
    hover:bg-orange-600
    hover:scale-105
    hover:shadow-[0_0_20px_rgba(255,165,0,0.5),0_0_35px_rgba(255,140,0,0.6)]
    overflow-hidden
  "
                  >
                    {/* Shine Effect */}
                    <span
                      className="
      absolute top-10 left-0 h-[35%] w-[120%]
      bg-white opacity-35 blur-[10px]
      pointer-events-none
      animate-diagonal-shine
      rotate-[22deg]
    "
                    ></span>

                    <span className="relative z-10">
                      Enroll Now – Start Your Trading Journey
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
      <WhatsAppFloating />
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import {
  Star,
  Heart,
  TrendingUp,
  Users,
  BookOpen,
  Target,
  Globe,
  CheckCircle,
  ArrowDown,
  Lightbulb,
  Map,
  Shield,
} from "lucide-react";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setVisible = (section) => {
    setIsVisible((prev) => ({ ...prev, [section]: true }));
  };

  useEffect(() => {
    const observers = [];
    const sections = [
      "hero",
      "struggle",
      "breakthrough",
      "mission",
      "vision",
      "why",
    ];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(section);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        {/* Grid Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.2) 1px, transparent 1px)
            `,
              backgroundSize: "120px 120px",
              transform: `translate(${-scrollY * 0.05}px, ${scrollY * 0.08}px)`,
            }}
          />
        </div>

        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div
            className="absolute top-32 sm:top-1/2 right-5 sm:right-20 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 sm:left-1/3 w-36 sm:w-56 md:w-72 h-36 sm:h-56 md:h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          ></div>
        </div>

        {/* Hero - The Beginning */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative"
        >
          <div className="max-w-5xl mx-auto text-center">
            <div
              className={`transform transition-all duration-2000 ${
                isVisible.hero
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="mb-6 sm:mb-8">
                <Star className="text-orange-400 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto mb-4 sm:mb-6 animate-spin" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                  Our Story
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-light px-2">
                  Every big dream begins with{" "}
                  <span className="text-orange-400 font-bold">small wins</span>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl mx-2 sm:mx-0">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-100 mb-6 sm:mb-8">
                  My journey in the stock market was full of struggles. I
                  wandered a lot while trying to learn finance and trading,
                  searching for guidance in a world that seemed designed to
                  profit from my confusion.
                </p>

                <ArrowDown className="w-6 sm:w-8 h-6 sm:h-8 mx-auto text-blue-400 animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* The Struggle - Chapter 1 */}
        <section id="struggle" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transform transition-all duration-2000 ${
                isVisible.struggle
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <Map className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 mx-auto mb-4 sm:mb-6 text-red-400" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
                  The Struggle Was <span className="text-red-400">Real</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                  <div className="bg-red-500/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-red-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-3 sm:mb-4">
                      No Proper Mentor
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      There was no proper <strong>mentor</strong> to guide me.
                      Whoever taught, taught only for their own profit. The
                      market felt like a maze with no map.
                    </p>
                  </div>

                  <div className="bg-orange-500/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-orange-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-3 sm:mb-4">
                      Small Town, Big Dreams
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      I know the pain of being a small-town boy, struggling to
                      learn trading without money. When even buying a cycle was
                      difficult, how could I afford expensive courses?
                    </p>
                  </div>

                  <div className="bg-blue-500/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">
                      The Financial Burden
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      Many times I had to ask my family for money, and paying
                      huge fees for learning felt impossible. Every rupee
                      counted, every decision mattered.
                    </p>
                  </div>
                </div>

                <div className="relative order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-gray-600 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500 mx-4 sm:mx-0">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
                        😔
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-300 mb-3 sm:mb-4">
                        The Dark Phase
                      </h4>
                      <p className="text-gray-400 italic text-sm sm:text-base">
                        "Every loss felt like a step backward. Every expensive
                        course felt like a luxury I couldn't afford. But
                        something inside me refused to give up."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Breakthrough - Chapter 2 */}
        <section id="breakthrough" className="py-32 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transform transition-all duration-2000 ${
                isVisible.breakthrough
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="text-center mb-20">
                <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
                <h2 className="text-5xl font-bold mb-6">
                  The{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                    Breakthrough
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl p-12 border border-green-500/30 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🚀</div>
                      <h4 className="text-3xl font-bold text-green-400 mb-6">
                        First Profitable Trade
                      </h4>
                      <p className="text-gray-200 text-lg leading-relaxed">
                        "After a long losing streak, I made my first profitable
                        trade. The profit was small, but the confidence it gave
                        me was priceless."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
                    <Heart className="w-12 h-12 text-red-400 mb-4" />
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">
                      The Moment That Changed Everything
                    </h3>
                    <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-green-400 mb-4">
                      <p className="text-green-400 italic text-lg mb-2">
                        "Bhai, your video helped me understand trading."
                      </p>
                      <p className="text-gray-400 text-sm">
                        — A comment on my YouTube video
                      </p>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      That single line gave me more happiness than any profit.
                      It made me realize that my struggles could become someone
                      else's{" "}
                      <strong className="text-green-400">
                        path to success
                      </strong>
                      .
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30">
                    <Target className="w-12 h-12 text-orange-400 mb-4" />
                    <h3 className="text-2xl font-bold text-orange-400 mb-4">
                      The Decision
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      That's when I decided to build{" "}
                      <strong className="text-orange-400">Price Lesson</strong>{" "}
                      — so no one else has to face the same challenges I did.
                      Every struggle had a purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission - Our Purpose */}
        <section id="mission" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transform transition-all duration-2000 ${
                isVisible.mission
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <Target className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 mx-auto mb-6 sm:mb-8 text-orange-400" />
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-green-500/20 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-white/20 backdrop-blur-lg mx-2 sm:mx-0">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center leading-relaxed text-white">
                      To make{" "}
                      <span className="text-orange-400">
                        financial education
                      </span>
                      <br className="hidden sm:block" />
                      <span className="text-blue-400">accessible</span>,
                      <span className="text-green-400"> affordable</span>, and
                      <span className="text-orange-400"> practical</span>
                      <br className="hidden sm:block" />
                      for everyone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
                <div className="group bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-500 hover:transform hover:scale-105">
                  <BookOpen className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-orange-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                    Beyond Trading
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    We don't just teach trading. We teach how to{" "}
                    <strong>manage money wisely</strong> and build financial
                    discipline that lasts a lifetime.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:transform hover:scale-105">
                  <TrendingUp className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-blue-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                    Smart Investing
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Learn how to <strong>invest smartly</strong> with proven
                    strategies that professionals use for sustainable long-term
                    growth.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-500/30 hover:border-green-500/60 transition-all duration-500 hover:transform hover:scale-105 sm:col-span-2 lg:col-span-1">
                  <Shield className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-green-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                    Right Mindset
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Build the <strong>right mindset</strong> and mental
                    frameworks needed for long-term financial freedom and
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision - The Future We're Building */}
        <section
          id="vision"
          className="py-32 px-6 bg-gradient-to-br from-black/30 to-blue-900/20"
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`transform transition-all duration-2000 ${
                isVisible.vision
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="text-center mb-20">
                <Globe className="w-20 h-20 mx-auto mb-8 text-blue-400 animate-pulse" />
                <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Our Vision
                </h2>
              </div>

              <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl p-12 border border-blue-500/30 backdrop-blur-lg">
                  <h3 className="text-4xl font-bold mb-8 text-white">
                    India's youth deserve{" "}
                    <span className="text-green-400">financial freedom</span>
                  </h3>
                  <p className="text-2xl leading-relaxed text-gray-200 mb-8">
                    Yet, most of us never learn{" "}
                    <span className="text-orange-400 font-bold">
                      basic finance
                    </span>{" "}
                    in school or college. This gap leaves millions under the
                    burden of loans and bad money decisions.
                  </p>
                  <p className="text-xl text-gray-300">
                    We're not just building a platform. We're building a
                    movement.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30">
                    <div className="text-4xl mb-4">👨‍🎓</div>
                    <h4 className="text-xl font-bold text-orange-400 mb-3">
                      One Learner
                    </h4>
                    <p className="text-gray-300">
                      Empowering individuals with knowledge and confidence
                    </p>
                  </div>

                  <div className="bg-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
                    <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                    <h4 className="text-xl font-bold text-blue-400 mb-3">
                      One Family
                    </h4>
                    <p className="text-gray-300">
                      Transforming household financial health
                    </p>
                  </div>

                  <div className="bg-green-500/10 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30">
                    <div className="text-4xl mb-4">🌍</div>
                    <h4 className="text-xl font-bold text-green-400 mb-3">
                      One Community
                    </h4>
                    <p className="text-gray-300">
                      Building a financially literate nation
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl p-12 border border-green-500/30">
                  <p className="text-3xl font-bold text-green-400 mb-4">
                    At a time.
                  </p>
                  <p className="text-xl text-gray-200">
                    This is how we change India's financial future — one success
                    story at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Price Lesson - The Difference */}
        <section id="why" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transform transition-all duration-2000 ${
                isVisible.why
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="text-center mb-20">
                <Heart className="w-16 h-16 mx-auto mb-6 text-red-400 animate-pulse" />
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Why We're Different
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Built from real struggles, for real people. This isn't just
                  business — it's personal.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-lg rounded-xl p-6 border border-green-500/20">
                    <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-green-400 mb-2">
                        Affordable for Everyone
                      </h4>
                      <p className="text-gray-200">
                        Because I remember when even ₹500 felt like too much for
                        learning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20">
                    <CheckCircle className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-blue-400 mb-2">
                        Real-World Strategies
                      </h4>
                      <p className="text-gray-200">
                        Not just theory. Strategies that actually work in the
                        Indian market.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <CheckCircle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-orange-400 mb-2">
                        Continuous Support
                      </h4>
                      <p className="text-gray-200">
                        Weekly live doubt sessions because questions never stop
                        coming.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-lg rounded-xl p-6 border border-red-500/20">
                    <CheckCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-red-400 mb-2">
                        Mission-Driven
                      </h4>
                      <p className="text-gray-200">
                        Every feature, every course, every decision is made with
                        your success in mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-green-500/20 rounded-3xl p-12 border border-white/20 backdrop-blur-lg">
                  <Users className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    2,00,000+ Strong Community
                  </h3>
                  <p className="text-xl text-gray-200 mb-8">
                    More than subscribers — we're a family that grows together
                    toward financial independence.
                  </p>

                  <div className="flex items-center justify-center space-x-6 text-lg">
                    <Star className="text-orange-400 w-8 h-8 animate-pulse" />
                    <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent font-bold text-2xl">
                      Because big dreams always begin with small steps
                    </span>
                    <Star className="text-green-400 w-8 h-8 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-green-500/20 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 text-white">
              Your Financial Journey Starts Here
            </h3>
            <p className="text-xl text-gray-200 mb-10">
              Join thousands who've already transformed their financial future
              with Price Lesson
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                Start Learning Today
              </button>
              <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105">
                Watch Free Videos
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;

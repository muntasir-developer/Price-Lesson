"use client";

import React, { useState, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { Eye, TrendingUp, BarChart3, LineChart, Rocket } from "lucide-react";

interface HoverCardProps {
  children: ReactNode;
  color: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ children, color }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative group rounded-3xl overflow-hidden h-full"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

const colorMap = {
  blue: {
    bg: "bg-blue-500/20",
    border: "border-blue-500/20",
    borderHover: "group-hover:border-blue-400/50",
    text: "text-blue-400",
    textLight: "text-blue-300",
  },
  green: {
    bg: "bg-green-500/20",
    border: "border-green-500/20",
    borderHover: "group-hover:border-green-400/50",
    text: "text-green-400",
    textLight: "text-green-300",
  },
  orange: {
    bg: "bg-orange-500/20",
    border: "border-orange-500/20",
    borderHover: "group-hover:border-orange-400/50",
    text: "text-orange-400",
    textLight: "text-orange-300",
  },
  purple: {
    bg: "bg-purple-500/20",
    border: "border-purple-500/20",
    borderHover: "group-hover:border-purple-400/50",
    text: "text-purple-400",
    textLight: "text-purple-300",
  },
} as const;

const TargetIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const TrendingUpIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22 7-8.97 8.959a1.51 1.51 0 0 1-2.122 0l-3.83-3.83a1.51 1.51 0 0 0-2.122 0L2 15.09m20-8.09V12m0-5h-5"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 12h20m-10-10a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    />
  </svg>
);

const LightbulbIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-5 sm:w-6 h-5 sm:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

// easing as cubic-bezier array — acceptable to framer-motion typing
const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: easing,
    },
  }),
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.6, ease: easing },
  },
};

const VisionMissionSection: React.FC = () => {
  const icons: React.ComponentType<React.SVGProps<SVGSVGElement>>[] = [
    TrendingUp,
    BarChart3,
    LineChart,
    Rocket,
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
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
        />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-gradient-to-br from-green-400/30 via-green-500/10 to-transparent rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-orange-400/30 via-orange-500/10 to-transparent rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-conic from-blue-400/40 via-purple-500/20 to-transparent rounded-full blur-[120px] opacity-70 animate-spin-slow"
          style={{ animationDuration: "18s" }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-green-500/20 to-transparent blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-xl animate-pulse delay-2000" />

      <motion.div
        className="relative z-10 container mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeUp} custom={0}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 via-orange-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
            <div className="text-orange-400">
              <StarIcon />
            </div>
            <span className="text-sm font-medium text-white/80 tracking-wide">
              OUR PURPOSE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
            Vision & Mission
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Transforming financial literacy from privilege to birthright
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch">
          {/* Vision */}
          <motion.div variants={fadeUp} custom={1}>
            <HoverCard color="rgba(34,197,94,0.25)">
              <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-500 h-full flex flex-col hover:border-green-400/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl text-green-400 group-hover:scale-110 transition-transform duration-300">
                    <Eye />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Vision</h2>
                </div>

                <div className="space-y-6 text-white/80 leading-relaxed flex-grow">
                  <p className="text-lg">
                    Our vision is simple yet transformative:{" "}
                    <span className="text-green-400 font-semibold">
                      bringing financial education to every household across
                      India.
                    </span>
                  </p>

                  <p>
                    Today, millions still see the stock market and investing as
                    gambling. We want a future where every student,
                    professional, and family understands how to manage money
                    wisely and secure their destiny.
                  </p>

                  <div className="bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500/50 p-6 rounded-r-xl mt-auto">
                    <p className="font-medium text-green-300">
                      "We dream of a generation that won’t face the struggles we
                      once did — where wealth, knowledge, and freedom are for
                      all."
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-center justify-center mt-10">
                  {icons.map((Icon, i) => (
                    <div
                      key={i}
                      className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon size={28} />
                    </div>
                  ))}
                </div>
              </div>
            </HoverCard>
          </motion.div>

          {/* Mission */}
          <motion.div variants={fadeUp} custom={2}>
            <HoverCard color="rgba(251,146,60,0.25)">
              <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-500 h-full flex flex-col hover:border-orange-400/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    <TargetIcon />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Mission</h2>
                </div>

                <div className="space-y-6 flex-grow">
                  <p className="text-lg text-white/80 leading-relaxed">
                    With{" "}
                    <span className="text-orange-400 font-semibold">
                      200,000+ subscribers
                    </span>{" "}
                    learning finance in simple Hindi, we aim to scale our impact
                    exponentially.
                  </p>

                  <div className="grid gap-4">
                    {[
                      {
                        icon: <BookOpenIcon />,
                        title: "Trusted Learning Platform",
                        desc: "Comprehensive resources for beginners to pros",
                        color: "blue",
                      },
                      {
                        icon: <TrendingUpIcon />,
                        title: "Premium Education",
                        desc: "High-quality courses & mentorships",
                        color: "green",
                      },
                      {
                        icon: <GlobeIcon />,
                        title: "Pan-India Community",
                        desc: "Nationwide learning & growth network",
                        color: "orange",
                      },
                      {
                        icon: <LightbulbIcon />,
                        title: "Life Skill Integration",
                        desc: "Financial literacy as fundamental as reading",
                        color: "purple",
                      },
                    ].map((item, i) => {
                      const styles =
                        colorMap[item.color as keyof typeof colorMap];
                      return (
                        <div
                          key={i}
                          className={`flex items-start gap-4 p-4 bg-gradient-to-r from-white/5 to-transparent rounded-xl border ${styles.border} ${styles.borderHover} transition-all duration-300`}
                        >
                          <div
                            className={`p-2 ${styles.bg} rounded-lg mt-1 ${styles.text} group-hover:scale-110 transition-transform duration-300`}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <h4
                              className={`font-semibold ${styles.textLight} mb-1`}
                            >
                              {item.title}
                            </h4>
                            <p className="text-sm text-white/70">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </HoverCard>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          variants={fadeUp}
          custom={3}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500/10 via-orange-500/10 to-blue-500/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 hover:border-white/40 hover:bg-gradient-to-r hover:from-green-500/20 hover:via-orange-500/20 hover:to-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group/cta">
            <div className="text-blue-400 group-hover/cta:text-blue-300 group-hover/cta:scale-110 transition-all duration-300">
              <UsersIcon />
            </div>
            <span className="text-white font-medium text-sm sm:text-base text-center group-hover/cta:text-white/95 transition-colors duration-300">
              Join 200,000+ learners on this transformative journey
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default VisionMissionSection;

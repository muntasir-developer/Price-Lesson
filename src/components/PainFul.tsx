"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, TrendingDown, Brain, Rocket } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const PainfulJourney = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // radar duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-black text-white py-20 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Radar Preloader Fullscreen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-[550px] h-[550px] rounded-full border border-green-400/30 flex items-center justify-center">
              {/* Radar Sweep Beam */}
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(rgba(34,197,94,0.6)_0deg,transparent_90deg)] animate-spin-slow"></div>

              {/* Pulsing Circles */}
              <div className="absolute inset-0 rounded-full border border-green-400/20 animate-ping-slow"></div>
              <div className="absolute inset-10 rounded-full border border-green-400/30 animate-ping-slower"></div>
              <div className="absolute inset-20 rounded-full border border-green-400/40 animate-ping-slowest"></div>

              {/* Center Brand Name */}
              <h1 className="relative z-10 text-4xl opacity-20 md:text-5xl font-extrabold text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]">
                Price Lesson
              </h1>

              {/* Scattered Small Text */}
              {[
                { top: "20%", left: "30%", size: "text-xs" },
                { top: "40%", left: "70%", size: "text-sm" },
                { top: "65%", left: "25%", size: "text-[10px]" },
                { top: "75%", left: "60%", size: "text-xs" },
              ].map((pos, i) => (
                <span
                  key={i}
                  className={`absolute ${pos.size} text-green-500/40 animate-pulse`}
                  style={{ top: pos.top, left: pos.left }}
                >
                  Price Lesson
                </span>
              ))}
            </div>

            <p className="absolute bottom-20 text-gray-400 text-lg animate-pulse">
              Searching...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Gradient Spotlights */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-80 h-80 bg-green-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content (fades in after radar) */}
      {!loading && (
        <motion.div
          className="relative max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
            My Painful Journey
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
            Every success has a story, and mine began with struggle. At 17,
            while most of my friends were enjoying college life, I was busy
            trying to understand charts, markets, and money. I made mistakes,
            lost trades, and faced moments where I questioned myself. With no
            mentor and no clear path, learning about trading and investing felt
            overwhelming.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-blue-400 to-orange-400 rounded-full"></div>
            {journeyPoints.map((item, i) => (
              <TiltCard key={i} index={i} item={item} />
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-20 max-w-3xl mx-auto">
            This journey wasn’t easy, but it built the foundation of who I am
            today — and why I created this platform. Now, my mission is to help
            others avoid the same mistakes and achieve financial freedom with
            clarity and confidence.
          </p>
        </motion.div>
      )}
    </section>
  );
};

/* ---------------- Stylish Tilt Card ---------------- */
const TiltCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `rotateX(${(-y / 20).toFixed(
      2
    )}deg) rotateY(${(x / 20).toFixed(2)}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      className={`mb-20 flex items-center ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative max-w-md p-8 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/10 shadow-[0_0_20px_rgba(0,255,170,0.15)] transition-transform duration-200 ease-out will-change-transform hover:shadow-[0_0_40px_rgba(0,255,170,0.25)]"
      >
        <div className="flex items-center gap-4 mb-5">
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-400/20 via-blue-400/20 to-orange-400/20 shadow-inner">
            <item.icon className="w-8 h-8 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
          </div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
            {item.title}
          </h3>
        </div>
        <p className="text-gray-300 leading-relaxed text-base">{item.text}</p>
      </div>
    </motion.div>
  );
};

const journeyPoints = [
  {
    title: "The Beginning (Age 17)",
    text: "While my friends enjoyed college life, I was deep into charts, trades, and self-doubt — with no mentor to guide me.",
    icon: BookOpen,
  },
  {
    title: "The Struggles",
    text: "Lost trades, sleepless nights, and financial pressure tested me. I often felt lost with nothing to show for my efforts.",
    icon: TrendingDown,
  },
  {
    title: "The Lessons",
    text: "Every failure became a teacher. I learned resilience, discipline, and the true meaning of financial literacy.",
    icon: Brain,
  },
  {
    title: "The Transformation",
    text: "After 4+ years, I stand not just as a trader and investor, but as someone committed to helping others succeed.",
    icon: Rocket,
  },
];

export default PainfulJourney;

/* ---------------- Custom Animations ---------------- */
const styles = `
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 4s linear infinite;
}
@keyframes ping-slow {
  0% { transform: scale(0.8); opacity: 0.7; }
  70% { transform: scale(1.2); opacity: 0; }
  100% { opacity: 0; }
}
.animate-ping-slow {
  animation: ping-slow 3s ease-out infinite;
}
.animate-ping-slower {
  animation: ping-slow 4.5s ease-out infinite;
}
.animate-ping-slowest {
  animation: ping-slow 6s ease-out infinite;
}
`;
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

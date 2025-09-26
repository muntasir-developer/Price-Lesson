"use client";
import StockMarketCourseSection from "@/components/Course";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import PainfulJourney from "@/components/PainFul";
import SmallSuccessSection from "@/components/SmallSucess";
import SnakeRoadFuturistic from "@/components/Tesimonial";
import VisionMissionSection from "@/components/Vision";
import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import WhatsAppFloating from "@/components/WhatsApp";

const Hero = () => {
  const images = [
    "/image/banner1.jpg",
    "/image/banner2.jpg",
    "/image/banner3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  /* ---------------- Background Slider ---------------- */
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  /* ---------------- Timer Logic ---------------- */
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 3);

    const updateTimer = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- Lenis Smooth Scrolling ---------------- */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* ---------- Background Slider ---------- */}
        <div className="absolute inset-0">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-400/30 animate-[gradientShift_18s_linear_infinite] mix-blend-overlay" />

          {/* Futuristic Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(14)].map((_, i) => {
              const size = Math.random() > 0.6 ? 4 : 2;
              return (
                <div
                  key={i}
                  className="absolute rounded-full animate-float-glow twinkle"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    background:
                      "radial-gradient(circle, rgba(0,255,255,0.8) 0%, rgba(0,255,255,0) 70%)",
                    boxShadow: "0 0 6px #0ff, 0 0 12px #0ff",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* ---------- Timer Section ---------- */}
        <div className="absolute bottom-6 w-full flex flex-col items-center z-30 px-2">
          {/* Text Above Timer */}
          <p className="mb-1 text-sm sm:text-base md:text-lg font-medium text-cyan-200 drop-shadow-lg">
            Exclusive 50% Discount
          </p>

          {/* Timer Cards */}
          <div className="flex gap-1.5 sm:gap-2 md:gap-3">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-10 sm:w-14 md:w-16 px-1 py-1 sm:px-1.5 sm:py-1.5 md:px-2 md:py-2 rounded-md sm:rounded-lg text-center backdrop-blur-xl bg-white/10 overflow-hidden"
              >
                {/* Animated Border */}
                <span className="absolute inset-0 rounded-md sm:rounded-lg p-[1px] animate-border-snake bg-[length:200%_200%] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
                <div className="relative z-10">
                  <p className="text-xs sm:text-base md:text-lg font-bold text-cyan-200 leading-tight">
                    {item.value.toString().padStart(2, "0")}
                  </p>
                  <p className="text-[7px] sm:text-[9px] md:text-xs text-cyan-100 opacity-80">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Animations ---------- */}
        <style jsx>{`
          @keyframes float-glow {
            0% {
              transform: translateY(0px) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-15px) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translateY(0px) scale(1);
              opacity: 0.6;
            }
          }
          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          @keyframes border-snake {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .twinkle {
            animation: twinkle 4s infinite ease-in-out alternate;
          }
          .animate-float-glow {
            animation: float-glow 12s ease-in-out infinite;
          }
          .animate-border-snake {
            animation: border-snake 4s linear infinite;
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
        `}</style>
      </section>

      {/* Other Sections */}
      <PainfulJourney />
      <SmallSuccessSection />
      <VisionMissionSection />
      <StockMarketCourseSection />
      <FAQSection />
      <SnakeRoadFuturistic />
      <Footer />
      <WhatsAppFloating />
    </>
  );
};

export default Hero;

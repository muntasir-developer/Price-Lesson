"use client";
import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import "@fontsource/oswald";

const FloatingGlassyCards3D = () => {
  const PADDING = 20; // smaller padding for mobile
  const CARD_WIDTH = 280;
  const CARD_HEIGHT = 240;

  const cards = [
    {
      title: "First Profitable Trade",
      text: "Har struggle ke baad, chhoti si success bhi ek badi jeet lagti hai...",
      color: "#22c55e",
    },
    {
      title: "Subscriber Milestone",
      text: "Phir ek din mere YouTube video par ek comment aaya...",
      color: "#3b82f6",
    },
    {
      title: "Community Growth",
      text: "Step by step, ye chhoti jeete ek badi kahani ban gayi...",
      color: "#f97316",
    },
  ];

  // Motion data for cards
  const cardMotionData = cards.map((_, index) => {
    const x = useMotionValue(
      Math.random() * (window.innerWidth - PADDING * 2 - CARD_WIDTH) + PADDING
    );
    const y = useMotionValue(
      Math.random() * (window.innerHeight - PADDING * 2 - CARD_HEIGHT) + PADDING
    );
    const zIndex = index + 1;
    const scale = 1 - index * 0.05;

    const animationRef = useRef<{ xAnim: any; yAnim: any } | null>(null);

    const animateCard = () => {
      animationRef.current = {
        xAnim: animate(
          x,
          Math.random() * (window.innerWidth - PADDING * 2 - CARD_WIDTH) +
            PADDING,
          {
            type: "spring",
            damping: 25,
            stiffness: 15,
            duration: 15 + Math.random() * 5,
            onComplete: animateCard,
          }
        ),
        yAnim: animate(
          y,
          Math.random() * (window.innerHeight - PADDING * 2 - CARD_HEIGHT) +
            PADDING,
          {
            type: "spring",
            damping: 25,
            stiffness: 15,
            duration: 15 + Math.random() * 5,
          }
        ),
      };
    };

    useEffect(() => {
      animateCard();
      return () => {
        animationRef.current?.xAnim.stop();
        animationRef.current?.yAnim.stop();
      };
    }, []);

    return { x, y, zIndex, scale, animationRef, animateCard };
  });

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Sunlight Effect Top-Left */}
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-yellow-400/20 filter blur-3xl" />

      {/* Background Grid & Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute inset-0 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] 
          bg-[size:30px_30px] md:bg-[size:40px_40px] z-0"
        />
        <h1
          className="absolute text-4xl sm:text-6xl md:text-[12vw] font-extrabold text-white/5 z-10 select-none pointer-events-none drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          PRICE LESSON
        </h1>
      </div>

      {/* Floating Cards */}
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute w-64 sm:w-72 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/20 backdrop-blur-[12px] shadow-[0_0_40px_rgba(0,255,255,0.3)] cursor-grab"
          style={{
            x: cardMotionData[i].x,
            y: cardMotionData[i].y,
            zIndex: cardMotionData[i].zIndex,
            scale: cardMotionData[i].scale,
            backgroundColor: `${card.color}20`,
            borderColor: `${card.color}60`,
          }}
          drag
          dragMomentum={false}
          dragConstraints={{
            top: PADDING,
            left: PADDING,
            right: window.innerWidth - CARD_WIDTH - PADDING,
            bottom: window.innerHeight - CARD_HEIGHT - PADDING,
          }}
          onDragStart={() => {
            cardMotionData[i].animationRef.current?.xAnim.stop();
            cardMotionData[i].animationRef.current?.yAnim.stop();
          }}
          onDragEnd={() => {
            cardMotionData[i].animateCard();
          }}
          whileHover={{ scale: cardMotionData[i].scale + 0.05 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <h3
            className="text-xl sm:text-2xl font-bold mb-2"
            style={{ color: card.color }}
          >
            {card.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-300">{card.text}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default FloatingGlassyCards3D;

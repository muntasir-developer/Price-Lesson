"use client";
import {
  motion,
  animate,
  useMotionValue,
  AnimationPlaybackControls,
} from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import "@fontsource/oswald";

const PADDING = 20;
const CARD_WIDTH = 280;
const CARD_HEIGHT = 240;

interface Card {
  title: string;
  text: string;
  color: string;
}

const cards: Card[] = [
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

interface CardMotion {
  x: ReturnType<typeof useMotionValue>;
  y: ReturnType<typeof useMotionValue>;
  animationRef: React.MutableRefObject<{
    xAnim: AnimationPlaybackControls;
    yAnim: AnimationPlaybackControls;
  } | null>;
  animateCard: () => void;
}

const useCardMotion = (): CardMotion => {
  const x = useMotionValue(
    Math.random() * (window.innerWidth - PADDING * 2 - CARD_WIDTH) + PADDING
  );
  const y = useMotionValue(
    Math.random() * (window.innerHeight - PADDING * 2 - CARD_HEIGHT) + PADDING
  );
  const animationRef = useRef<{
    xAnim: AnimationPlaybackControls;
    yAnim: AnimationPlaybackControls;
  } | null>(null);

  const animateCard = useCallback(() => {
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
  }, [x, y]);

  useEffect(() => {
    animateCard();
    return () => {
      animationRef.current?.xAnim.stop();
      animationRef.current?.yAnim.stop();
    };
  }, [animateCard]);

  return { x, y, animationRef, animateCard };
};

// Child component for a single floating card
const FloatingCard = ({ card, index }: { card: Card; index: number }) => {
  const { x, y, animationRef, animateCard } = useCardMotion();

  return (
    <motion.div
      className="absolute w-64 sm:w-72 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/20 backdrop-blur-[12px] shadow-[0_0_40px_rgba(0,255,255,0.3)] cursor-grab"
      style={{
        x,
        y,
        zIndex: index + 1,
        scale: 1 - index * 0.05,
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
        animationRef.current?.xAnim.stop();
        animationRef.current?.yAnim.stop();
      }}
      onDragEnd={() => animateCard()}
      whileHover={{ scale: 1 - index * 0.05 + 0.05 }}
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
  );
};

// Main component
const FloatingGlassyCards3D = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-yellow-400/20 filter blur-3xl" />

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

      {cards.map((card, i) => (
        <FloatingCard key={card.title} card={card} index={i} />
      ))}
    </section>
  );
};

export default FloatingGlassyCards3D;

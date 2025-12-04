"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // control smoothness (higher = smoother)
      smoothWheel: true,
      wheelMultiplier: 1,
      easing: (t) => 1 - Math.pow(1 - t, 4), // custom easing curve
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}

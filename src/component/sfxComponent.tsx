"use client";

import { useEffect } from "react";

export default function SfxComponent() {
  useEffect(() => {
    const audio = new Audio("/assets/sfx.mp3");
    audio.volume = 0.5; // set volume 50%
    audio.play().catch((err) => {
      console.log("Autoplay diblokir, tunggu interaksi user", err);
      // Jika autoplay diblokir, bisa play saat user klik
      const handleInteraction = () => {
        audio.play();
        document.removeEventListener("click", handleInteraction);
      };
      document.addEventListener("click", handleInteraction);
    });
  }, []);

  return null; // Komponen ini tidak render UI
}

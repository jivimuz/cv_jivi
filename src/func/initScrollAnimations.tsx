"use client";

export function initScrollAnimations() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          entry.target.classList.add("show-animate");
        } else {
          entry.target.classList.remove("show-animate"); // hilang lagi
        }
      });
    },
    { threshold: 0.2 } // 20% elemen terlihat
  );

  elements.forEach((el) => observer.observe(el));
}

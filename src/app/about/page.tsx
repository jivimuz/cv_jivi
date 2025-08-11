"use client";
import ExperienceTimeline from "@/component/experienceTimeLineComponent";
import SpotifySongList from "@/component/spotifySongList";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textToType = ` I am a passionate web developer with a focus on creating dynamic and
            responsive web applications. My expertise lies in JavaScript, PHP,
            React, Node.js, Laravel, CodeIgniter Etc. and I enjoy building
            user-friendly interfaces that enhance the user experience.
            
            
            In my free time, I love exploring new technologies, contributing to
            open-source projects, and learning about the latest trends in web
            development. I believe in continuous learning and strive to improve
            my skills every day.`;
  const typingSpeed = 20;
  const deletingDelay = 2000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < textToType.length) {
        setTypedText((prev) => prev + textToType.charAt(currentIndex));
        setCurrentIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setTypedText("");
          setCurrentIndex(0);
        }, deletingDelay);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div>
      <div className="page-nav">
        {/* <a className="page-btn prev" >
          ← Prev
        </a> */}
        <a className="btn page-btn next" href="/project">
          Next
          <svg
            width="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M8.20248 13.1904L4.50325 13.5176C3.67308 13.5176 3 12.8379 3 11.9997C3 11.1614 3.67308 10.4818 4.50325 10.4818L8.20248 10.8089C8.85375 10.8089 9.38174 11.3421 9.38174 11.9997C9.38174 12.6584 8.85375 13.1904 8.20248 13.1904Z"
              fill="currentColor"
            ></path>
            <path
              d="M20.6247 13.1302C20.5668 13.1885 20.3508 13.4353 20.1479 13.6402C18.9643 14.9234 15.8738 17.0218 14.2571 17.664C14.0116 17.7665 13.3909 17.9846 13.0582 18C12.7408 18 12.4375 17.9262 12.1484 17.7808C11.7873 17.577 11.4993 17.2554 11.34 16.8764C11.2386 16.6143 11.0793 15.8267 11.0793 15.8124C10.9211 14.9521 10.835 13.5531 10.835 12.0066C10.835 10.535 10.9211 9.19332 11.051 8.31871C11.0651 8.30329 11.2244 7.32623 11.3979 6.99137C11.7153 6.37892 12.336 6 13.0004 6H13.0582C13.4913 6.01432 14.4011 6.39435 14.4011 6.40756C15.9316 7.04975 18.949 9.04681 20.1621 10.3742C20.1621 10.3742 20.5047 10.7156 20.653 10.9282C20.8843 11.2344 20.9999 11.6134 20.9999 11.9923C20.9999 12.4153 20.8701 12.8085 20.6247 13.1302Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img
            src="/assets/img/jivi.jpg"
            alt="Jivi"
            className="w-[250px] rounded-[20px]"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <div className="text-lg font-bold mb-2 text-center">
            <h2 className="main-title">Jivi Muzaqi Guntur</h2>
            <div className="text-lg font-semibold mb-2 typing-text">
              {typedText}
              <span className="typing-cursor"></span>
            </div>
          </div>
        </div>
      </div>
      <h1
        className="text-2xl font-bold mb-4 m-4"
        style={{ textAlign: "center", color: "#0f172a" }}
      >
        Career Experience
      </h1>
      <div className="flex justify-center mt-4">
        <ExperienceTimeline />
      </div>
    </div>
  );
}

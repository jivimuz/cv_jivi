"use client";

import { ExperienceCount } from "@/component/experienceCount";
import ExperienceTimeline from "@/component/experienceTimeLineComponent";
import Load3dComponent from "@/component/load3dComponent";
import SfxComponent from "@/component/sfxComponent";
import SpotifySongList from "@/component/spotifySongList";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const textToType = "Jivi Muzaqi Guntur";
  const typingSpeed = 150;
  const deletingDelay = 2000;
  const experience = ExperienceCount("2020-02-20");

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
    <>
      <div className="page-nav">
        <a className="btn page-btn next" href="/about">
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
      <div style={{ minHeight: "80vh" }}>
        <div className="flex flex-col md:flex-row  main-title">
          <SfxComponent />
          <div className="main-board w-full md:w-1/2">
            <HoverSocialIcon
              network="github"
              url="https://github.com/jivimuz"
              color="#333" // GitHub
            />
            <HoverSocialIcon
              network="linkedin"
              url="https://www.linkedin.com/in/jivimuz"
              color="#0A66C2"
            />
            <HoverSocialIcon
              network="instagram"
              url="https://www.instagram.com/jivimz_"
              color=" #962fbf"
            />
            <HoverSocialIcon
              network="email"
              url="mailto:jivirasgal@gmail.com"
              color=" #be2323ff"
            />

            <h1>Welcome to my page</h1>
            <p className="typing-text object-tittle">
              I'm {typedText}
              <span className="typing-cursor"></span>
            </p>
            <h5 style={{ fontSize: "22px" }}>
              Web Engineer || {experience.years} Years of Experience
            </h5>
          </div>
          <div className="w-full md:w-1/2 flex align-item-center justify-center">
            <div>
              <Load3dComponent />
            </div>
          </div>
        </div>
        <hr
          className="shadow"
          style={{ marginTop: "50px", marginBottom: "10px" }}
        />
        <hr className="shadow" />
        <hr className="shadow" />
        <hr className="shadow" />
        <SpotifySongList />
      </div>
    </>
  );
}

// Komponen terpisah untuk efek hover
function HoverSocialIcon({ network, url, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <SocialIcon
      network={network}
      url={url}
      target="_blank"
      style={{
        marginRight: "5px",
        width: 40,
        height: 40,
        borderRadius: "50%",
      }}
      bgColor={hovered ? color : "transparent"}
      fgColor={hovered ? "#fff" : color}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}

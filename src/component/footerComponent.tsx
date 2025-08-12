"use client";

import { SocialIcon } from "react-social-icons";
import { ExperienceCount } from "./experienceCount";

export default function Footer() {
  const experience = ExperienceCount("2020-02-20");
  return (
    <>
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Info */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-lg font-bold">Jivi Muzaqi Guntur</h2>
            <p className="text-sm text-gray-400">
              Software Engineer • {experience.years} Years of Experience
            </p>
          </div>

          {/* Sosial Media */}
          <div className="flex space-x-3">
            <SocialIcon
              url="https://github.com/jivimuz"
              target="_blank"
              bgColor="#ffffff"
              fgColor="#000000"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/jivimuz"
              target="_blank"
              bgColor="#ffffff"
              fgColor="#0A66C2"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.instagram.com/jivimz_"
              target="_blank"
              bgColor="#ffffff"
              fgColor="#E1306C"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="mailto:jivirasgal@gmail.com"
              target="_blank"
              bgColor="#ffffff"
              fgColor="#e13030ff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
        <div
          style={{ fontSize: "10px" }}
          className="text-center mt-4 text-gray-500 "
        >
          This tech stack using NextJS + ThreeJS + TailwindCSS by Jivi Muzaqi
          Guntur
        </div>
        {/* Copyright */}

        <div className="text-center mt-1 text-gray-500 text-xs">
          © {new Date().getFullYear()} Jivi Muzaqi Guntur. All rights reserved.
        </div>
      </footer>
    </>
  );
}

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TechList() {
  const techIcons = [
    {
      name: "Arduino",
      icon: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
      type: "hardware",
    },
    {
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      type: "cloud",
    },
    {
      name: "Bootstrap",
      icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg",
      type: "framework",
    },
    {
      name: "Chart.js",
      icon: "https://www.chartjs.org/media/logo-title.svg",
      type: "library",
    },
    {
      name: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      type: "lang",
    },
    {
      name: "Electron",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
      type: "framework",
    },
    {
      name: "Express.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      type: "framework",
    },
    {
      name: "Figma",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      type: "design",
    },
    {
      name: "Firebase",
      icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      type: "cloud",
    },
    {
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      type: "tools",
    },
    {
      name: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      type: "lang",
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      type: "lang",
    },
    {
      name: "Laravel",
      icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
      type: "framework",
    },
    {
      name: "Linux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      type: "os",
    },
    {
      name: "MariaDB",
      icon: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
      type: "database",
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      type: "database",
    },
    {
      name: "MSSQL",
      icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
      type: "database",
    },
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      type: "database",
    },
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      type: "runtime",
    },
    {
      name: "Oracle",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
      type: "database",
    },
    {
      name: "Pandas",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
      type: "library",
    },

    {
      name: "PHP",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      type: "lang",
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      type: "database",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      type: "tools",
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      type: "lang",
    },
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      type: "framework",
    },
    {
      name: "React Native",
      icon: "https://reactnative.dev/img/header_logo.svg",
      type: "framework",
    },
    {
      name: "SQLite",
      icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
      type: "database",
    },
    {
      name: "TailwindCSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      type: "framework",
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      type: "lang",
    },
  ];
  return (
    <div className=" py-5">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={15}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        loop={true}
        className="flex items-center"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {techIcons.concat(techIcons).map((sponsor, index) => (
          <SwiperSlide key={index} className="flex justify-center ">
            <img
              src={sponsor.icon}
              alt={sponsor.name}
              className="grayscale-90 hover:grayscale-0 transition duration-300 sliderIcon"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

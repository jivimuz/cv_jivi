"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Urutan kategori yang diinginkan
const typeOrder = [
  "cloud",
  "database",
  "design",
  "framework",
  "hardware",
  "lang",
  "library",
  "os",
  "runtime",
  "tools",
];

// Data asli
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
  // ... sisanya
];

// Fungsi untuk group berdasarkan type
const groupByType = (items: any[]) => {
  const grouped: Record<string, any[]> = {};
  items.forEach((item) => {
    if (!grouped[item.type]) grouped[item.type] = [];
    grouped[item.type].push(item);
  });
  return grouped;
};

export default function MotionComponent() {
  const groupedData = groupByType(techIcons);

  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Tech Stack</h2>
      {typeOrder.map((type) =>
        groupedData[type] ? (
          <div key={type} className="mb-10">
            <h3 className="text-2xl font-semibold capitalize mb-4">{type}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
              {groupedData[type].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col items-center"
                >
                  <div className="relative w-16 h-16">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

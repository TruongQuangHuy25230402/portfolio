"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "We specialize in crafting intuitive user interfaces with technologies such as JavaScript, TypeScript, Tailwind CSS, React, ShadcnUI, and Zustand. Our front-end solutions ensure seamless user experiences and high performance on the Node.js platform.",
    href: "/work",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Our back-end development expertise includes Next.js 14 for server-side rendering, MySQL (Neon) for efficient data management, Prisma for database access and ORM, Clerk Auth for authentication, and Stripe for secure payment processing.",
    href: "/work",
  },
  {
    num: "03",
    title: "Web Development",
    description:
      "We collaborate closely with you to craft responsive and optimized websites using the latest technologies, tailored to your business needs.",
    href: "/work",
  },
  {
    num: "04",
    title: "PHP Development",
    description:
      "Leverage the power of PHP and MySQL with XAMPP for robust web development solutions. Our expertise in PHP development ensures efficient and scalable web applications tailored to your specific requirements.",
    href: "/work",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center ">
                <div
                  className="text-5xl font-extrabold text-outline text-transparent
                  group-hover:text-outline-hover transition-all duration-500"
                >
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

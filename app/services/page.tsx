"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We create responsive and optimized websites tailored to your business needs using the latest technologies and best practices.",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Our UI/UX design services focus on creating user-friendly interfaces and experiences that engage and retain your customers.",
    href: "/services/ui-ux-design",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Our creative team designs unique and memorable logos that reflect your brand's identity and values.",
    href: "/services/logo-design",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Improve your website's visibility and ranking on search engines with our comprehensive SEO strategies.",
    href: "/services/seo",
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

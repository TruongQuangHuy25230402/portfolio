"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SelectValue } from "@radix-ui/react-select";
import { motion } from "framer-motion";
import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 789 698 980",
  },

  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "quanghuy200223@gmail.com",
  },

  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Go Vap, Ho Chi Minh City",
  },
];
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Phần cảm ơn ở bên trái */}
          <div className="flex-1 flex items-center xl:justify-start order-2 xl:order-none mb-8 xl:mb-0">
            <div>
              <p className="text-white text-[24px] mt-10">
                Thank you for viewing my portfolio.
              </p>
              <p className="text-white text-[24px] mt-10">
                It would be an honor to collaborate with you.
              </p>
              <p className="text-white text-[24px] mt-10">Thank you.</p>
            </div>
          </div>

          {/* Phần thông tin liên hệ ở bên phải */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

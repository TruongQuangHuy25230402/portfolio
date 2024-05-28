import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/TruongQuangHuy25230402" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/truong-quang-huy-511734264/",
  },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@wangyuh7339" },
  { icon: <FaTwitter />, path: "https://x.com/quanghuy_t97207" },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path}>
          <span className={iconStyles}>{social.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Social;

import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

export const socialLinks: { icon: IconType; href: string; label: string }[] = [
  { icon: FaGithub, href: "https://github.com/niklashoelzl", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/niklashoelzl/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/niklas_hoelzl/", label: "LeetCode" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: MdEmail, href: "mailto:niklashoelzl00@gmail.com", label: "Email" },
];

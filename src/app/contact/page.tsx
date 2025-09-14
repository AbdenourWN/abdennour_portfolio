// app/contact/page.tsx
"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Data for contact details to keep the code clean
const contactDetails = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    detail: "(+216) 53 849 660",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    detail: "abden1342@gmail.com",
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    detail: "Sousse, Tunisia",
  },
];

// Data for social links
const socialLinks = [
  {
    href: "https://github.com/AbdenourWN",
    icon: <FaGithub size={20} />,
    label: "GitHub Profile",
  },
  {
    href: "https://www.linkedin.com/in/abdenourboukhris",
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn Profile",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animate children one after another
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut",
    },
  },
}as const;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.log("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-48 px-4 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-3">
        {/* Left Column: Information with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-[#5b0097] md:text-start text-center"
          >
            Get in Touch
          </motion.h1>
          <motion.p variants={itemVariants} className="text-zinc-400">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out to
            me.
          </motion.p>
          <motion.div variants={itemVariants} className="space-y-6">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-zinc-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mt-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Contact Form with Fade-in Animation */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="bg-[#1A0B2E] p-8 rounded-xl border border-zinc-800"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text" id="name" name="name"
                value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Your Name" required disabled={isSubmitting}
                className="w-full p-3 rounded-lg bg-[#2c1b47] text-zinc-200 placeholder:text-zinc-500 border border-transparent focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200 outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email" id="email" name="user_email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com" required disabled={isSubmitting}
                className="w-full p-3 rounded-lg bg-[#2c1b47] text-zinc-200 placeholder:text-zinc-500 border border-transparent focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200 outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                id="message" name="message"
                value={message} onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message" required rows={5} disabled={isSubmitting}
                className="w-full p-3 rounded-lg bg-[#2c1b47] text-zinc-200 placeholder:text-zinc-500 border border-transparent focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200 resize-none outline-none"
              />
            </div>
            <div>
              <button
                type="submit" disabled={isSubmitting}
                className="w-full px-6 py-3 font-semibold text-white bg-[#a950e4] rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-[#9333ea] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {status === "success" && (
              <p className="text-green-400 text-center">Message sent successfully! I'll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center">Failed to send message. Please try again or email me directly.</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
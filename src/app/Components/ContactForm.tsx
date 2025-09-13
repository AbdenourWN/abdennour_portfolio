// components/ContactForm.tsx
"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder";
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder";
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_placeholder";

function ContactForm() {
  const [name, setName] = useState(""); // NEW: State for the name input
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
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
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
    <div className="container mx-auto py-20 px-4 h-full flex flex-col items-center">
      <div
        className="w-full max-w-4xl p-8 rounded-2xl"
        style={{
          backgroundImage:
            "radial-gradient(rgba(120, 119, 198, 0.1) 1px, transparent 1px)",
          backgroundSize: "15px 15px",
        }}
      >
        <h1 className="text-4xl font-bold text-[#5b0097] mb-12 md:text-start text-center">
          Contact
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full space-y-6"
        >
          {/* NEW: Name Input Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              disabled={isSubmitting}
              className="w-full p-3 rounded-lg bg-[#2c1b47] text-zinc-200 placeholder:text-zinc-500 border border-transparent focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200 outline-none"
            />
          </div>

          {/* Email Input Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              disabled={isSubmitting}
              className="w-full p-3 rounded-lg bg-[#2c1b47] text-zinc-200 placeholder:text-zinc-500 border border-transparent focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200 outline-none"
            />
          </div>

          {/* Message Text Area */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
              rows={6}
              disabled={isSubmitting}
              className="w-full p-3 rounded-lg bg-[#2c1b47] text-zinc-200 placeholder:text-zinc-500 border border-transparent focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200 resize-none outline-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 font-semibold text-white bg-[#a950e4] rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-[#9333ea] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Status Feedback */}
          {status === "success" && (
            <p className="text-green-400 text-center">
              Message sent successfully! I'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">
              Failed to send message. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

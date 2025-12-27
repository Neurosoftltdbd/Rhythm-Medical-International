"use client";
import { containerVariants, itemVariants } from "@/utility/motionData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [messages, setMessages] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!messages.name) {
      toast.error("Name is required");
    } else if (!messages.phone) {
      toast.error("Phone is required");
    } else if (!messages.email) {
      toast.error("Email is required");
    } else if (!messages.message) {
      toast.error("Message is required");
    } else {
      toast.success("Message sent successfully!");
      console.log("Submitted Message:", messages);

      setMessages({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <motion.div initial="hidden" animate="visible">
      <motion.div
        variants={containerVariants}
        className="flex flex-col gap-4 w-full"
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>Please fill out the form below to send us a message.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            value={messages.name}
            onChange={(e) => setMessages({ ...messages, name: e.target.value })}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label htmlFor="phone">Phone</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Your Phone Number"
            value={messages.phone}
            onChange={(e) =>
              setMessages({ ...messages, phone: e.target.value })
            }
          />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your Email"
            value={messages.email}
            onChange={(e) =>
              setMessages({ ...messages, email: e.target.value })
            }
          />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="border border-gray-300 rounded-md p-2"
            id="message"
            name="message"
            required
            placeholder="Your Message"
            value={messages.message}
            onChange={(e) =>
              setMessages({ ...messages, message: e.target.value })
            }
          />
        </motion.div>
        <motion.button
          variants={itemVariants}
          type="submit"
          name="submit"
          onClick={handleSubmit}
          className="flex gap-4 items-center justify-center text-blue-700 p-2 px-6 rounded cursor-pointer border border-blue-700 hover:bg-green-200 transition-all ease-in-out duration-500 w-fit mx-auto"
        >
          <Image
            src="/send.png"
            alt="Send"
            width={20}
            height={20}
            className=""
          />
          Send
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

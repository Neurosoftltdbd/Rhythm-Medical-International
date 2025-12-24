"use client";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <div className="w-full bg-green-50">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="About Us"
          description="We are committed to excellence in health care, driven by a passion
            for cardiac care and innovation."
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="p-4 md:p-0"
        >
          <p className="text-justify mb-4">
            <strong>Rhythm Medical International</strong> is a leading provider
            of innovative cardiac solutions, specializing in high-quality
            coronary stents, wires, and a wide range of heart-related medical
            devices. Based in Chattogram, we are proud to be the region’s
            leading provider of advanced cardiac products, including coronary
            stents, wires, and a comprehensive range of heart-related medical
            devices. Rhythm Medical works with Elixir Medical Corporation USA,
            offering the DesyneX2 coronary stents, and Asahi Intecc Products,
            including PTCA Guide Wires and Guiding Catheters and Cath lab
            accessories.
          </p>
          <p className="text-justify mb-4">
            At Rhythm Medical International, our mission is simple: to enhance
            the quality of life for individuals suffering from cardiovascular
            conditions by delivering cutting-edge products that doctors and
            healthcare institutions can rely on. With a commitment to
            innovation, precision, and quality, we ensure that every product we
            offer meets the highest standards, making us the trusted partner for
            healthcare professionals across the region.
          </p>
          <p className="text-justify mb-4">
            As the number one cardiac solutions provider in Chattogram, our
            focus remains on improving patient outcomes and advancing the field
            of cardiology. With a dedicated team and strong customer support, we
            are poised to make a lasting impact on the healthcare industry both
            locally and beyond.
          </p>
          <p className="text-justify mb-4">
            Thank you for choosing us as your trusted partner.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

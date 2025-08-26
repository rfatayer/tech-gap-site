"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Cpu, Users, Hammer, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <img src="/logo.png" alt="Paltex Logo" className="h-20" />
        <div className="space-x-6">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 text-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Bridging Your Business Tech Gaps
        </motion.h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We partner with businesses to build tailored technology solutions,
          using skilled teams and innovative approaches to deliver results.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 rounded-2xl bg-white text-blue-600 font-semibold shadow-lg hover:bg-gray-100"
        >
          Let’s Talk
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: "Custom Tech Solutions", desc: "End-to-end software and systems tailored to your business." },
            { icon: Users, title: "Dedicated Teams", desc: "Access to top-tier technical talent from Palestine." },
            { icon: Hammer, title: "Product Development", desc: "From concept to launch, we build products that deliver impact." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <service.icon className="text-blue-600 w-12 h-12 mb-4" />
              <h4 className="font-bold text-lg mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">About Us</h3>
          <p className="text-gray-700 leading-relaxed">
            At Paltex, we help businesses identify and overcome technical challenges. 
            By leveraging expert teams and innovative methods, we create scalable solutions that 
            empower growth and efficiency.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h3>
        <p className="text-gray-600 mb-8">
          Let’s discuss how we can help bridge your business technology gaps.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="mailto:r_fatayer@hotmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md">
            <Mail className="w-5 h-5" /> r_fatayer@hotmail.com
          </a>
          <a href="tel:+61402185181" className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 shadow-md">
            <Phone className="w-5 h-5" /> +61 402 185 181
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p className="mb-2">© {new Date().getFullYear()} Paltex</p>
        <p className="text-sm">ABN: 635 735 698</p>
      </footer>
    </div>
  );
}

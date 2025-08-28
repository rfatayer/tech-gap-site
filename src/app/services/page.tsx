"use client";

import React from "react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-8 py-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Services</h2>

      {/* Custom Tech Solutions */}
      <section id="custom-tech" className="mb-16">
        <h3 className="text-2xl font-bold mb-4 text-[#214B71]">Custom Tech Solutions</h3>
        <p className="text-gray-700 leading-relaxed">
          We design and deliver end-to-end software and system solutions tailored 
          specifically to your business needs. Whether you need automation, cloud 
          integration, or enterprise platforms, we align technology with your goals 
          to create scalable and sustainable solutions.
        </p>
      </section>

      {/* Dedicated Teams */}
      <section id="dedicated-teams" className="mb-16">
        <h3 className="text-2xl font-bold mb-4 text-[#214B71]">Dedicated Teams</h3>
        <p className="text-gray-700 leading-relaxed">
          Gain access to highly skilled developers, engineers, and project managers 
          from Palestine who act as an extension of your in-house team. Our dedicated 
          teams provide flexibility, scalability, and cost efficiency while maintaining 
          the highest quality standards.
        </p>
      </section>

      {/* Product Development */}
      <section id="product-development" className="mb-16">
        <h3 className="text-2xl font-bold mb-4 text-[#214B71]">Product Development</h3>
        <p className="text-gray-700 leading-relaxed">
          From concept to launch, we take ownership of your product journey. Our approach 
          covers research, prototyping, design, development, and deployment—ensuring your 
          product not only works but succeeds in the market.
        </p>
      </section>
    </div>
  );
}

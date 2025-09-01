

"use client";

import React from "react";
import { Cpu, Users, Hammer } from "lucide-react";
import Layout from "@/components/Layout";

export default function Services() {
  return (
    <Layout>
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[#214B71]">Our Services</h2>

        {/* Example service block */}
        <div id="custom-tech" className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Cpu className="text-[#214B71] w-16 h-16 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-[#214B71] mb-4">
                Custom Tech Solutions
              </h3>
              <p className="text-gray-600">
                We design and deliver end-to-end software and system solutions tailored 
          specifically to your business needs. Whether you need automation, cloud 
          integration, or enterprise platforms, we align technology with your goals 
          to create scalable and sustainable solutions.
              </p>
            </div>
          </div>
        </div>
<div id="dedicated-teams" className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Users className="text-[#214B71] w-16 h-16 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-[#214B71] mb-4">
                Dedicated Teams
              </h3>
              <p className="text-gray-600">
                Gain access to highly skilled developers, engineers, and project managers 
          from Palestine who act as an extension of your in-house team. Our dedicated 
          teams provide flexibility, scalability, and cost efficiency while maintaining 
          the highest quality standards.
              </p>
            </div>
          </div>
        </div>

<div id="product-development" className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Hammer className="text-[#214B71] w-16 h-16 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-[#214B71] mb-4">
                Product Development
              </h3>
              <p className="text-gray-600">
                From concept to launch, we take ownership of your product journey. Our approach 
          covers research, prototyping, design, development, and deployment—ensuring your 
          product not only works but succeeds in the market.
              </p>
            </div>
          </div>
        </div>


        {/* Repeat for Dedicated Teams + Product Development */}
      </section>
    </Layout>
  );
}

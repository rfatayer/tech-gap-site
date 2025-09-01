"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // icons for mobile menu

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          {/* Logo flush left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={40}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1 pt-24">{/* padding for fixed header */ children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Paltex. All rights reserved.
      </footer>
    </div>
  );
}

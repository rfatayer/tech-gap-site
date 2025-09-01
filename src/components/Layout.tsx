"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Paltex Logo"
            className="h-20 cursor-pointer"
          />
        </Link>
        <div className="space-x-6">
          <a href="/#services" className="hover:text-blue-600">Services</a>
          <a href="/#about" className="hover:text-blue-600">About</a>
          <a href="/#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p className="mb-2">© {new Date().getFullYear()} Paltex</p>
        <p className="text-sm">ABN: 635 735 698</p>
      </footer>
    </div>
  );
}

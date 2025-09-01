"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo on far left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={40}
              className="h-20 w-auto"
            />
          </Link>

          {/* Navigation on far right */}
          <nav className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Paltex. All rights reserved.
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/materials", label: "Materials" },
    { href: "/journey", label: "Journey" },
    { href: "/essay", label: "Essay" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link href="/" className="font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
            Kritigya
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "px-3 py-2 rounded-lg text-sm font-medium transition",
                    isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {isOpen && (
            <div id="mobile-nav" className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur shadow-md md:hidden border-b border-gray-200/70">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex flex-col gap-1">
                  {links.map((link) => {
                    const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={[
                          "px-3 py-2 rounded-lg text-sm font-medium transition",
                          isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

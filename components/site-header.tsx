"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Ensure this is defined

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById("hero")?.offsetHeight || 0;

      if (window.scrollY > heroSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition duration-300 shadow-sm h-16 ${
        isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-black"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full flex items-center"
            >
              <Image
                src="/logo.png?height=60&width=200"
                alt="Prachar Logo"
                width={200}
                height={60}
                className="h-25 w-25"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`hover:text-primary font-medium transition duration-150 ease-in-out ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="ghost"
                className={`font-medium hover:text-primary ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={`hover:text-gray-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div initial="hidden" animate="visible" variants={menuVariants} className="md:hidden">
          <div className="pt-2 pb-4 px-4 space-y-1 sm:px-6 bg-black shadow-lg">
            {["Home", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
              <motion.div key={item} variants={itemVariants} className="py-2">
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`block hover:text-primary font-medium ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="pt-4 flex space-x-4">
              <Link href="/login" className="w-1/2">
                <Button
                  variant="outline"
                  className={`w-full border-white hover:border-primary hover:text-primary ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" className="w-1/2">
                <Button className="w-full">
                  Sign Up
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
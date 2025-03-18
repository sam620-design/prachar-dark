'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import FloatingContactButton from '../components/floating-contact'; // Import Floating Contact Button

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the route changes

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>

        {/* Floating Contact Button (Now visible on all pages) */}
        <FloatingContactButton />
      </body>
    </html>
  );
}

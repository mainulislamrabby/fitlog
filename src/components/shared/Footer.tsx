import Image from "next/image";
import React from "react";
import FooterImage from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0c0d10]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={FooterImage}
            alt="FitLog logo"
            width={30}
            height={30}
            className="h-9 w-9 object-contain"
          />

          <span className="text-lg font-black uppercase tracking-wide text-white">
            FIT<span className="text-[#CCFF00]">LOG</span>
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-400 sm:text-right sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
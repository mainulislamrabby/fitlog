"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Logo from "@/assets/logo.png";
import { FitLogContext } from "@/context/FitLogContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { plan, saved } = useContext(FitLogContext);
  const pathname = usePathname();
  return (
    <header className="border-b border-white/10 bg-[#0B0D0F] text-white">
      <div className="navbar container mx-auto min-h-20 px-4">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-10 mt-3 w-52 rounded-box border border-white/10 bg-[#15181C] p-2 text-white shadow-lg"
            >
              <li>
                <Link href="/">Workout</Link>
              </li>

              <li>
                <Link href="/my-plan">My Plan</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image className="h-8 w-8" src={Logo} alt="FitLog logo" />

            <span>FITLOG</span>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            <li>
              <Link
                href="/"
                className={`rounded-full px-5 text-sm font-bold uppercase tracking-wide transition ${
                  pathname === "/"
                    ? "bg-[#CCFF00] text-black"
                    : "text-white hover:bg-[#CCFF00] hover:text-black"
                }`}
              >
                Workout
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={`rounded-full px-5 text-sm font-bold uppercase tracking-wide transition ${
                  pathname === "/my-plan"
                    ? "bg-[#CCFF00] text-black"
                    : "text-white hover:bg-[#CCFF00] hover:text-black"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-2">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-3 py-2 text-xs font-bold uppercase text-black"
          >
            <span>Plan</span>
            <span>{plan.length}</span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-white/30 px-3 py-2 text-xs font-bold uppercase text-white"
          >
            <span>Saved</span>
            <span>{saved.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

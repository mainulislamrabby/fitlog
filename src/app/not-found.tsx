import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#0c0d10] px-4 text-white">
      <div className="w-full max-w-md text-center">
        <p className="text-7xl font-black text-[#ccff00] sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 text-2xl font-black uppercase sm:text-3xl">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-[#ddff55]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-3 md:px-8 pt-4">

      <div
        className="
          max-w-7xl
          mx-auto
          bg-white/90
          backdrop-blur-md
          rounded-full
          shadow-lg
          px-4
          md:px-8
          py-3
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <Link href="/contact">

          <h1
            className="
              font-serif
              text-[#4c3228]
              text-2xl
              sm:text-3xl
              md:text-4xl
              whitespace-nowrap
            "
          >
            Bloomcase
          </h1>

        </Link>

        {/* MENU */}
        <nav
          className="
            flex
            items-center
            gap-3
            sm:gap-5
            md:gap-10
          "
        >

          <Link
            href="/store"
            className="
              text-[#6d5247]
              hover:text-[#4c3228]
              text-sm
              sm:text-base
              transition-all
            "
          >
            Shop
          </Link>

          <Link
            href="/customize"
            className="
              text-[#6d5247]
              hover:text-[#4c3228]
              text-sm
              sm:text-base
              transition-all
            "
          >
            Customize
          </Link>

          <Link
            href="#contact"
            className="
              hidden sm:block
              text-[#6d5247]
              hover:text-[#4c3228]
              text-sm
              sm:text-base
              transition-all
            "
          >
            Contact
          </Link>

          <Link href="/store">

            <button
              className="
                bg-[#7b5647]
                hover:bg-[#5f4135]
                text-white
                px-4
                sm:px-6
                py-2
                sm:py-3
                rounded-full
                text-sm
                sm:text-base
                transition-all
                whitespace-nowrap
              "
            >
              Shop Now
            </button>

          </Link>

        </nav>

      </div>

    </header>
  );
}
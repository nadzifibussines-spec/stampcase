"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const featuredCases = [
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    title: "Vintage Europe",
    price: "Rp 129.000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    title: "Soft Girl Stamp",
    price: "Rp 149.000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    title: "Aesthetic Travel",
    price: "Rp 139.000",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[#f6f0ea] overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[6px] text-sm text-[#9d7c6e] mb-5">
            The Bloom Stamp Case
          </p>

          <h1 className="text-2xl md:text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-serif text-[#4c3228]">
            Design Your
            <br />
            Dream Case ✨
          </h1>

          <p className="mt-8 text-base md:text-lg leading-9 text-[#7a655d] max-w-xl">
            Customize your own aesthetic phone case
            or shop our curated ready-made collection.
            Inspired by vintage travel, luxury fashion,
            pinterest aesthetics and cute stickers.
          </p>

          {/* BUTTONS */}
          <div className="
  flex
  gap-6
  flex-wrap
  mt-12
">

            <Link href="/customize">
              <button
                className="
                  bg-[#6b4b3f]
                  hover:bg-[#55392d]
                  transition-all
                  duration-300
                  text-white
                  px-8
                  py-5
                  rounded-full
                  shadow-xl
                  hover:scale-105
                "
              >
                Start Customizing
              </button>
            </Link>

            <Link href="store">
              <button
                className="
                  bg-white
                  hover:bg-[#f1e6df]
                  transition-all
                  duration-300
                  text-[#4c3228]
                  px-8
                  py-5
                  rounded-full
                  shadow-lg
                  hover:scale-105
                "
              >
                Shop Collection
              </button>
            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-3 md:gap-5 mt-10 lg:mt-0"
        >

          <img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[40px] h-[180px] md:h-[320px] object-cover shadow-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[40px] h-[180px] md:h-[320px] object-cover mt-12 shadow-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[40px] h-[180px] md:h-[320px] object-cover shadow-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[40px] h-[180px] md:h-[320px] object-cover mt-12 shadow-2xl"
          />

        </motion.div>

      </section>

      {/* MARKETPLACE SECTION */}
      <section
        id="collection"
        className="max-w-7xl mx-auto px-6 py-16 md:py-24"
      >

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-sm text-[#9d7c6e]">
            Best Seller Collection
          </p>

          <h2 className="text-5xl font-serif text-[#4c3228] mt-4">
            Ready Made Cases ✨
          </h2>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {featuredCases.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="
                bg-white
                rounded-[40px]
                overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              <img
                src={item.image}
                className="w-full h-[280px] md:h-[430px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-serif text-[#4c3228]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#7a655d]">
                  Premium aesthetic stamp case
                  with luxury vintage vibes.
                </p>

                <div className="flex items-center justify-between mt-8">

                  <p className="text-2xl font-semibold text-[#4c3228]">
                    {item.price}
                  </p>

                  <button
  onClick={() => {

    localStorage.setItem(
      "selected-product",
      JSON.stringify({
        name: "Vintage Europe",
        price: 129000,
        image:
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
      })
    );

    router.push("/store-form");

  }}
  className="
    bg-[#7b5647]
    hover:bg-[#5f4135]
    text-white
    px-8
    py-4
    rounded-full
    transition-all
    duration-300
  "
>
  Buy Now
</button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CUSTOMIZE BANNER */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div
          className="
            bg-[#4c3228]
            rounded-[50px]
            px-10
            py-16
            lg:px-20
            grid
            lg:grid-cols-2
            gap-10
            items-center
            overflow-hidden
          "
        >

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[5px] text-sm text-[#d8c0b3]">
              Customize Your Own
            </p>

            <h2 className="text-5xl leading-tight font-serif text-white mt-5">
              Create Your
              <br />
              Own Dream Case ✨
            </h2>

            <p className="mt-6 text-[#ead8cf] text-lg leading-9 max-w-lg">
              Add your favorite stickers, aesthetic
              elements, travel themes and create a
              completely unique phone case just like Canva.
            </p>

            <Link href="/customize">
              <button
                className="
                  mt-10
                  bg-white
                  text-[#4c3228]
                  hover:bg-[#f2e7df]
                  px-8
                  py-5
                  rounded-full
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Customize Now →
              </button>
            </Link>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            <div
              className="
                bg-[#f6f0ea]
                rounded-[50px]
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.2)]
              "
            >

              <img
                src="/cases/iphone15promax.png"
                className="w-[320px] object-contain"
              />

            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-sm text-[#9d7c6e]">
            How It Works
          </p>

          <h2 className="text-5xl font-serif text-[#4c3228] mt-4">
            Easy & Fun Process ✨
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[
            "Choose Your iPhone",
            "Add Cute Stickers",
            "Checkout via WhatsApp",
          ].map((step, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-[40px]
                p-10
                shadow-[0_20px_50px_rgba(0,0,0,0.06)]
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#f4ebe5]
                  flex
                  items-center
                  justify-center
                  text-[#4c3228]
                  font-bold
                  text-xl
                "
              >
                {index + 1}
              </div>

              <h3 className="text-3xl font-serif text-[#4c3228] mt-8">
                {step}
              </h3>

              <p className="mt-4 text-[#7a655d] leading-8">
                Create your own aesthetic luxury
                phone case with our premium
                customization experience.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer
  id="contact"
  className="
    mt-32
    bg-[#4c3228]
    text-white
    rounded-t-[60px]
  "
>

  <div
    className="
      max-w-7xl
      mx-auto
      px-6
      py-20
      text-center
    "
  >

    <p
      className="
        uppercase
        tracking-[6px]
        text-[#dbc8be]
        text-sm
      "
    >
      Contact Us
    </p>

    <h2
      className="
        text-4xl
        md:text-6xl
        font-serif
        mt-5
      "
    >
      Let’s Connect ✨
    </h2>

    <p
      className="
        mt-6
        text-[#dbc8be]
        max-w-xl
        mx-auto
        leading-8
      "
    >
      Follow Bloomcase for newest aesthetic drops,
      custom inspirations, and dreamy phone case collections.
    </p>

    {/* SOCIALS */}
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-5
        mt-12
      "
    >

      {/* INSTAGRAM */}
      <a
        href="https://instagram.com/"
        target="_blank"
        className="
          bg-white/10
          hover:bg-white/20
          transition-all
          px-8
          py-4
          rounded-full
        "
      >
        Instagram
      </a>

      {/* TIKTOK */}
      <a
        href="https://tiktok.com/"
        target="_blank"
        className="
          bg-white/10
          hover:bg-white/20
          transition-all
          px-8
          py-4
          rounded-full
        "
      >
        TikTok
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        className="
          bg-[#7b5647]
          hover:bg-[#8d6656]
          transition-all
          px-8
          py-4
          rounded-full
        "
      >
        WhatsApp
      </a>

    </div>

    <div
      className="
        border-t
        border-white/10
        mt-16
        pt-8
        text-[#dbc8be]
        text-sm
      "
    >
      © 2025 Bloomcase — Luxury Aesthetic Phone Cases
    </div>

  </div>

</footer>

    </main>
  );
} 
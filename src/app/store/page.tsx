"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";


const products = [
  {
    name: "Vintage Europe",
    price: 129000,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Soft Girl Stamp",
    price: 149000,
    image: "/store/softgirl.jpg",
  },
  {
    name: "Aesthetic Travel",
    price: 139000,
    image: "/store/travel.jpg",
  },
  {
    name: "Coquette Bloom",
    price: 159000,
    image: "/store/coquette.jpg",
  },
  {
    name: "Summer Ocean",
    price: 139000,
    image: "/store/ocean.jpg",
  },
  {
    name: "Bloom Beige",
    price: 129000,
    image: "/store/beige.jpg",
  },
  {
    name: "Retro Diary",
    price: 149000,
    image: "/store/retro.jpg",
  },
  {
    name: "Cherry Pop",
    price: 139000,
    image: "/store/cherry.jpg",
  },
  {
    name: "Paris Dream",
    price: 169000,
    image: "/store/paris.jpg",
  },
  {
    name: "Pink Aesthetic",
    price: 129000,
    image: "/store/pink.jpg",
  },
  {
    name: "Korean Mood",
    price: 149000,
    image: "/store/korean.jpg",
  },
  {
    name: "Vintage Cafe",
    price: 159000,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function StorePage() {
  const router = useRouter();

  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    const updated = [...cart];

    updated.splice(index, 1);

    setCart(updated);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const goToForm = () => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    router.push("form-store");
  };

  return (
    <main className="min-h-screen bg-[#f6f0ea] pb-20">

      <Navbar />

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 pt-16">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-sm text-[#9d7c6e]">
            Bloomcase Collection
          </p>

          <h1 className="text-7xl font-serif text-[#4c3228] mt-6 leading-tight">
            Shop Ready Cases ✨
          </h1>

          <p className="mt-6 text-lg text-[#7a655d]">
            Choose from our curated aesthetic collection.
            Ready to order instantly.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mt-20">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product, index) => (

              <div
                key={index}
                className="
                  bg-white
                  rounded-[40px]
                  overflow-hidden
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-[360px]
                    object-cover
                  "
                />

                <div className="p-6">

                  <h2 className="text-4xl font-serif text-[#4c3228] leading-tight">
                    {product.name}
                  </h2>

                  <p className="mt-4 text-[#9d7c6e]">
                    Aesthetic premium case collection.
                  </p>

                  <div className="flex items-center justify-between mt-8">

                    <h3 className="text-3xl font-bold text-[#4c3228]">
                      Rp {product.price.toLocaleString("id-ID")}
                    </h3>

                    <button
                      onClick={() => addToCart(product)}
                      className="
                        bg-[#7b5647]
                        hover:bg-[#69473a]
                        text-white
                        px-6
                        py-3
                        rounded-full
                        transition-all
                      "
                    >
                      Add Cart
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* CART */}
          <div
            className="
              bg-white
              rounded-[45px]
              p-8
              h-fit
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              w-full
              max-w-[420px]
              border
              border-[#f1e6de]
            "
          >

            {/* HEADER */}
            <div className="flex items-center justify-between">

              <div>

                <p className="uppercase tracking-[4px] text-xs text-[#9d7c6e]">
                  Shopping Cart
                </p>

                <h2 className="text-4xl font-serif text-[#4c3228] mt-2">
                  Your Picks ✨
                </h2>

              </div>

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#f8f1ec]
                  flex
                  items-center
                  justify-center
                  text-2xl
                "
              >
                🛍️
              </div>

            </div>

            {/* ITEMS */}
            <div className="mt-8 space-y-5">

              {cart.length === 0 ? (

                <div
                  className="
                    bg-[#faf5f1]
                    rounded-[28px]
                    p-8
                    text-center
                  "
                >

                  <div className="text-5xl mb-4">
                    🤍
                  </div>

                  <p className="text-[#7a655d] text-lg">
                    Your cart is empty
                  </p>

                </div>

              ) : (

                cart.map((item: any, index: number) => (

                  <div
                    key={index}
                    className="
                      bg-[#faf5f1]
                      rounded-[28px]
                      p-4
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          w-20
                          h-20
                          object-cover
                          rounded-2xl
                        "
                      />

                      <div>

                        <h3 className="text-[#4c3228] text-lg font-medium leading-tight">
                          {item.name}
                        </h3>

                        <p className="text-[#9d7c6e] text-sm mt-2">
                          Ready Case Collection
                        </p>

                        <p className="text-[#7b5647] font-semibold mt-2">
                          Rp {item.price.toLocaleString("id-ID")}
                        </p>

                      </div>

                    </div>

                    {/* DELETE */}
                    <button
                      onClick={() => removeFromCart(index)}
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#ecdcd2]
                        hover:bg-[#e4cfc2]
                        transition-all
                        text-[#7b5647]
                        text-lg
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      ✕
                    </button>

                  </div>

                ))

              )}

            </div>

            {/* TOTAL */}
            <div
              className="
                mt-8
                pt-8
                border-t
                border-[#eadfd7]
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="uppercase tracking-[3px] text-xs text-[#9d7c6e]">
                    Total Payment
                  </p>

                  <h2 className="text-5xl font-bold text-[#4c3228] mt-2">
                    Rp {total.toLocaleString("id-ID")}
                  </h2>

                </div>

                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-[#7b5647]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                    shadow-lg
                  "
                >
                  💳
                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={goToForm}
                className="
                  mt-8
                  w-full
                  bg-[#7b5647]
                  hover:bg-[#69473a]
                  text-white
                  py-5
                  rounded-full
                  text-lg
                  font-medium
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Continue Checkout →
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
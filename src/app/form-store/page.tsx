"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StoreFormPage() {

  const router = useRouter();

  const [name, setName] = useState("");

  const [whatsapp, setWhatsapp] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [delivery, setDelivery] =
    useState("Delivery");

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    localStorage.setItem(
      "store-customer",
      JSON.stringify({
        name,
        whatsapp,
        address,
        delivery,
      })
    );

    router.push("/invoice-store");
  };

  return (
    <main className="min-h-screen bg-[#f6f0ea] py-20 px-6">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[6px] text-sm text-[#9d7c6e]">
            Bloomcase Checkout
          </p>

          <h1 className="text-7xl leading-tight font-serif text-[#4c3228] mt-6">
            Delivery
            <br />
            Details ✨
          </h1>

          <p className="mt-8 text-lg leading-9 text-[#7a655d] max-w-xl">
            Complete your order information to continue
            your Bloomcase purchase. Your aesthetic case
            will be prepared beautifully just for you.
          </p>

          {/* BENEFITS */}
          <div className="mt-14 space-y-5">

            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  text-2xl
                "
              >
                🚚
              </div>

              <div>

                <h3 className="text-[#4c3228] text-xl font-semibold">
                  Fast Delivery
                </h3>

                <p className="text-[#8b7367] mt-1">
                  Secure shipping across Indonesia.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  text-2xl
                "
              >
                🤍
              </div>

              <div>

                <h3 className="text-[#4c3228] text-xl font-semibold">
                  Premium Packaging
                </h3>

                <p className="text-[#8b7367] mt-1">
                  Wrapped beautifully for every order.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  text-2xl
                "
              >
                ✨
              </div>

              <div>

                <h3 className="text-[#4c3228] text-xl font-semibold">
                  Aesthetic Collection
                </h3>

                <p className="text-[#8b7367] mt-1">
                  Curated ready-case designs made with love.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div
          className="
            bg-white/90
            backdrop-blur-xl
            rounded-[45px]
            p-10
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            border
            border-[#f1e6de]
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="uppercase tracking-[5px] text-sm text-[#9d7c6e]">
                Delivery Form
              </p>

              <h2 className="text-5xl font-serif text-[#4c3228] mt-3">
                Checkout ✨
              </h2>

            </div>

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-[#f8f1ec]
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              🛍️
            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* NAME */}
            <div>

              <label className="block text-[#4c3228] mb-3 text-lg">
                Full Name
              </label>

              <input
                type="text"
                required
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Your full name"
                className="
                  w-full
                  h-16
                  px-6
                  rounded-2xl
                  bg-[#faf5f1]
                  border
                  border-[#eadfd7]
                  outline-none
                  text-lg
                  focus:border-[#7b5647]
                  transition-all
                "
              />

            </div>

            {/* WA */}
            <div>

              <label className="block text-[#4c3228] mb-3 text-lg">
                WhatsApp Number
              </label>

              <input
                type="text"
                required
                value={whatsapp}
                onChange={(e) =>
                  setWhatsapp(e.target.value)
                }
                placeholder="08xxxxxxxxxx"
                className="
                  w-full
                  h-16
                  px-6
                  rounded-2xl
                  bg-[#faf5f1]
                  border
                  border-[#eadfd7]
                  outline-none
                  text-lg
                  focus:border-[#7b5647]
                  transition-all
                "
              />

            </div>

            {/* ADDRESS */}
            <div>

              <label className="block text-[#4c3228] mb-3 text-lg">
                Address
              </label>

              <textarea
                required
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                placeholder="Your complete address"
                className="
                  w-full
                  h-36
                  p-6
                  rounded-2xl
                  bg-[#faf5f1]
                  border
                  border-[#eadfd7]
                  outline-none
                  text-lg
                  resize-none
                  focus:border-[#7b5647]
                  transition-all
                "
              />

            </div>

            {/* DELIVERY */}
            <div>

              <label className="block text-[#4c3228] mb-3 text-lg">
                Delivery Method
              </label>

              <select
                value={delivery}
                onChange={(e) =>
                  setDelivery(e.target.value)
                }
                className="
                  w-full
                  h-16
                  px-6
                  rounded-2xl
                  bg-[#faf5f1]
                  border
                  border-[#eadfd7]
                  outline-none
                  text-lg
                  focus:border-[#7b5647]
                  transition-all
                "
              >

                <option>
                  Delivery
                </option>

                <option>
                  Pick Up
                </option>

              </select>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                mt-6
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
              Continue to Invoice →
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}
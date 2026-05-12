"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StoreFormPage() {

  const router = useRouter();

  const product =
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem("selected-product") || "{}"
        )
      : {};

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    address: "",
    delivery: "Delivery",
  });

  const handleSubmit = () => {

    localStorage.setItem(
      "store-customer",
      JSON.stringify(form)
    );

    router.push("/store-invoice");
  };

  return (
    <main className="min-h-screen bg-[#f6f0ea] px-6 py-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-[45px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

          <p className="uppercase tracking-[6px] text-sm text-[#9d7c6e]">
            Delivery Details
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-serif text-[#4c3228] mt-4">
            Checkout ✨
          </h1>

          <p className="text-[#8b746a] mt-5 leading-8">
            Fill in your shipping information and
            continue your Bloomcase order experience.
          </p>

          {/* FORM */}
          <div className="mt-12 space-y-6">

            {/* NAME */}
            <div>
              <label className="text-sm text-[#7a655d] ml-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your full name"
                className="
                  w-full
                  mt-2
                  bg-[#faf7f4]
                  border
                  border-[#e6ddd7]
                  rounded-full
                  px-6
                  py-5
                  outline-none
                  focus:border-[#7b5647]
                  transition-all
                "
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
            </div>

            {/* WHATSAPP */}
            <div>
              <label className="text-sm text-[#7a655d] ml-2">
                WhatsApp
              </label>

              <input
                type="text"
                placeholder="08xxxxxxxxxx"
                className="
                  w-full
                  mt-2
                  bg-[#faf7f4]
                  border
                  border-[#e6ddd7]
                  rounded-full
                  px-6
                  py-5
                  outline-none
                  focus:border-[#7b5647]
                  transition-all
                "
                onChange={(e) =>
                  setForm({
                    ...form,
                    whatsapp: e.target.value,
                  })
                }
              />
            </div>

            {/* ADDRESS */}
            <div>
              <label className="text-sm text-[#7a655d] ml-2">
                Address
              </label>

              <textarea
                rows={5}
                placeholder="Your complete address"
                className="
                  w-full
                  mt-2
                  bg-[#faf7f4]
                  border
                  border-[#e6ddd7]
                  rounded-[30px]
                  px-6
                  py-5
                  outline-none
                  resize-none
                  focus:border-[#7b5647]
                  transition-all
                "
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: e.target.value,
                  })
                }
              />
            </div>

            {/* DELIVERY */}
            <div>
              <label className="text-sm text-[#7a655d] ml-2">
                Delivery Method
              </label>

              <select
                className="
                  w-full
                  mt-2
                  bg-[#faf7f4]
                  border
                  border-[#e6ddd7]
                  rounded-full
                  px-6
                  py-5
                  outline-none
                  focus:border-[#7b5647]
                  transition-all
                "
                onChange={(e) =>
                  setForm({
                    ...form,
                    delivery: e.target.value,
                  })
                }
              >
                <option>Delivery</option>
                <option>Pick Up</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="
                w-full
                mt-4
                bg-[#7b5647]
                hover:bg-[#5f4135]
                text-white
                py-5
                rounded-full
                text-lg
                shadow-xl
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              Continue to Invoice →
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="sticky top-10">

          <div className="bg-white rounded-[45px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <img
              src={product.image}
              className="
                w-full
                h-[320px] md:h-[520px]
                object-cover
              "
            />

            <div className="p-10">

              <p className="uppercase tracking-[5px] text-sm text-[#9d7c6e]">
                Selected Product
              </p>

              <h2 className="text-3xl md:text-5xl leading-tight font-serif text-[#4c3228] mt-4">
                {product.name}
              </h2>

              <p className="text-[#8b746a] mt-5 leading-8">
                Premium aesthetic stamp case with
                elegant luxury vibes and curated
                visual style.
              </p>

              <div className="border-t mt-8 pt-8 flex items-center justify-between">

                <div>
                  <p className="uppercase text-sm tracking-[3px] text-[#9d7c6e]">
                    Total
                  </p>

                  <h3 className="text-5xl font-bold text-[#4c3228] mt-2">
                    Rp{" "}
                    {product.price?.toLocaleString(
                      "id-ID"
                    )}
                  </h3>
                </div>

                <div className="
                  w-16
                  h-16
                  rounded-full
                  bg-[#f3ebe5]
                  flex
                  items-center
                  justify-center
                  text-2xl
                ">
                  ✨
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
// app/form/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [delivery, setDelivery] = useState("Delivery");

  const handleSubmit = () => {

    localStorage.setItem(
      "stampcase-form",
      JSON.stringify({
        name,
        address,
        whatsapp,
        delivery,
      })
    );

    router.push("/customize");
  };

  return (
    <main className="min-h-screen bg-[#f6f0ea] px-6 py-20">

      <div className="max-w-3xl mx-auto">

        <p className="uppercase tracking-[6px] text-sm text-[#9d7c6e]">
          Customer Details
        </p>

        <h1 className="text-6xl font-serif text-[#4c3228] mt-6 leading-tight">
          Before We
          <br />
          Customize ✨
        </h1>

        <div className="bg-white rounded-[40px] p-10 mt-12 shadow-xl space-y-7">

          <div>
            <p className="text-[#7b5647] mb-3">
              Full Name
            </p>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Your full name"
              className="
                w-full
                rounded-2xl
                border
                border-[#eadfd7]
                px-5
                py-4
                outline-none
              "
            />
          </div>

          <div>
            <p className="text-[#7b5647] mb-3">
              WhatsApp Number
            </p>

            <input
              type="text"
              value={whatsapp}
              onChange={(e) =>
                setWhatsapp(e.target.value)
              }
              placeholder="08xxxxxxxxxx"
              className="
                w-full
                rounded-2xl
                border
                border-[#eadfd7]
                px-5
                py-4
                outline-none
              "
            />
          </div>

          <div>
            <p className="text-[#7b5647] mb-3">
              Address
            </p>

            <textarea
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              placeholder="Your address"
              rows={4}
              className="
                w-full
                rounded-2xl
                border
                border-[#eadfd7]
                px-5
                py-4
                outline-none
              "
            />
          </div>

          <div>
            <p className="text-[#7b5647] mb-3">
              Delivery Method
            </p>

            <select
              value={delivery}
              onChange={(e) =>
                setDelivery(e.target.value)
              }
              className="
                w-full
                rounded-2xl
                border
                border-[#eadfd7]
                px-5
                py-4
                outline-none
              "
            >
              <option>Delivery</option>
              <option>Pick Up</option>
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="
              w-full
              bg-[#7b5647]
              hover:bg-[#69473a]
              text-white
              py-5
              rounded-full
              text-lg
              shadow-xl
              transition-all
              duration-300
            "
          >
            Continue to Customize →
          </button>

        </div>

      </div>

    </main>
  );
}
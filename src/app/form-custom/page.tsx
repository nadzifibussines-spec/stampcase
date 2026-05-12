"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormCustomPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [delivery, setDelivery] =
    useState("Delivery");

  const handleContinue = () => {
    const preview =
      localStorage.getItem("custom-preview");

    localStorage.setItem(
      "custom-order",
      JSON.stringify({
        name,
        whatsapp,
        address,
        delivery,
      })
    );

    if (preview) {
      localStorage.setItem(
        "custom-preview",
        preview
      );
    }

    router.push("/invoice");
  };

  return (
    <main className="
      min-h-screen
      bg-[#f5efe9]
      overflow-hidden
      relative
    ">

      {/* blur background */}
      <div className="
        absolute
        top-[-200px]
        left-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#d7b6a2]/20
        blur-3xl
      " />

      <div className="
        absolute
        bottom-[-200px]
        right-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#b7856b]/20
        blur-3xl
      " />

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-14
        grid
        lg:grid-cols-2
        gap-12
        items-center
      ">

        {/* LEFT */}
        <div>

          {/* premium badge */}
          <div className="
            inline-flex
            items-center
            gap-3
            bg-white/70
            backdrop-blur-xl
            px-6
            py-3
            rounded-full
            border
            border-white/60
            shadow-lg
            mb-10
          ">

            <div className="
              w-3
              h-3
              rounded-full
              bg-[#8b5e4a]
            " />

            <span className="
              uppercase
              tracking-[6px]
              text-xs
              text-[#8b5e4a]
            ">
              Bloomcase Luxury
            </span>

          </div>

          {/* title */}
          <h1 className="
            text-[70px]
            md:text-[110px]
            leading-[0.88]
            font-serif
            text-[#4b2e25]
          ">
            Finalize
            <br />
            Your
            <br />
            Aesthetic
            <br />
            Case ✨
          </h1>

          {/* desc */}
          <p className="
            mt-10
            text-[#6f5a52]
            text-xl
            leading-[2]
            max-w-xl
          ">
            Your luxury Bloomcase is almost complete.
            Add your delivery information to continue
            into the premium invoice experience.
          </p>

          {/* premium cards */}
          <div className="
            mt-14
            space-y-6
          ">

            {/* card */}
            <div className="
              group
              bg-white/70
              backdrop-blur-2xl
              rounded-[36px]
              p-7
              border
              border-white/60
              shadow-[0_15px_50px_rgba(0,0,0,0.06)]
              hover:translate-y-[-4px]
              transition-all
            ">

              <div className="
                flex
                items-center
                gap-5
              ">

                <div className="
                  w-20
                  h-20
                  rounded-full
                  bg-gradient-to-br
                  from-[#fff5ef]
                  to-[#f4ddd1]
                  flex
                  items-center
                  justify-center
                  text-3xl
                  shadow-inner
                ">
                  🎨
                </div>

                <div>
                  <h3 className="
                    text-3xl
                    font-semibold
                    text-[#4b2e25]
                  ">
                    Personalized Design
                  </h3>

                  <p className="
                    mt-2
                    text-[#7c675f]
                    leading-relaxed
                    text-lg
                  ">
                    Crafted exclusively from your
                    aesthetic inspirations and custom
                    luxury layouts.
                  </p>
                </div>

              </div>

            </div>

            {/* card */}
            <div className="
              group
              bg-white/70
              backdrop-blur-2xl
              rounded-[36px]
              p-7
              border
              border-white/60
              shadow-[0_15px_50px_rgba(0,0,0,0.06)]
              hover:translate-y-[-4px]
              transition-all
            ">

              <div className="
                flex
                items-center
                gap-5
              ">

                <div className="
                  w-20
                  h-20
                  rounded-full
                  bg-gradient-to-br
                  from-[#fff5ef]
                  to-[#f4ddd1]
                  flex
                  items-center
                  justify-center
                  text-3xl
                ">
                  📦
                </div>

                <div>
                  <h3 className="
                    text-3xl
                    font-semibold
                    text-[#4b2e25]
                  ">
                    Luxury Packaging
                  </h3>

                  <p className="
                    mt-2
                    text-[#7c675f]
                    leading-relaxed
                    text-lg
                  ">
                    Wrapped beautifully with premium
                    protection and signature Bloomcase
                    packaging.
                  </p>
                </div>

              </div>

            </div>

            {/* card */}
            <div className="
              group
              bg-white/70
              backdrop-blur-2xl
              rounded-[36px]
              p-7
              border
              border-white/60
              shadow-[0_15px_50px_rgba(0,0,0,0.06)]
              hover:translate-y-[-4px]
              transition-all
            ">

              <div className="
                flex
                items-center
                gap-5
              ">

                <div className="
                  w-20
                  h-20
                  rounded-full
                  bg-gradient-to-br
                  from-[#fff5ef]
                  to-[#f4ddd1]
                  flex
                  items-center
                  justify-center
                  text-3xl
                ">
                  ✨
                </div>

                <div>
                  <h3 className="
                    text-3xl
                    font-semibold
                    text-[#4b2e25]
                  ">
                    Handmade Luxury
                  </h3>

                  <p className="
                    mt-2
                    text-[#7c675f]
                    leading-relaxed
                    text-lg
                  ">
                    Every Bloomcase is designed with
                    aesthetic elegance and handcrafted
                    luxury details.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="
          relative
        ">

          {/* glow */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#ffffff]/60
            to-[#f7dccc]/30
            blur-3xl
            rounded-[50px]
          " />

          <div className="
            relative
            bg-white/75
            backdrop-blur-3xl
            rounded-[48px]
            border
            border-white/60
            p-10
            shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          ">

            {/* top */}
            <div className="
              flex
              items-start
              justify-between
              mb-12
            ">

              <div>

                <p className="
                  uppercase
                  tracking-[6px]
                  text-xs
                  text-[#b7846b]
                  mb-5
                ">
                  Delivery Form
                </p>

                <h2 className="
                  text-[64px]
                  leading-[0.92]
                  font-serif
                  text-[#4b2e25]
                ">
                  Luxury
                  <br />
                  Checkout ✨
                </h2>

              </div>

              <div className="
                w-20
                h-20
                rounded-full
                bg-gradient-to-br
                from-[#fff5ef]
                to-[#f0d9cc]
                flex
                items-center
                justify-center
                text-3xl
                shadow-lg
              ">
                🎀
              </div>

            </div>

            {/* FORM */}
            <div className="
              space-y-7
            ">

              {/* name */}
              <div>

                <label className="
                  block
                  mb-3
                  text-[#5f463d]
                  font-medium
                  text-lg
                ">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="
                    w-full
                    bg-[#fbf6f2]
                    border
                    border-[#ead8cc]
                    rounded-3xl
                    px-7
                    py-6
                    text-lg
                    outline-none
                    focus:border-[#8b5e4a]
                    focus:shadow-lg
                    transition-all
                  "
                />

              </div>

              {/* whatsapp */}
              <div>

                <label className="
                  block
                  mb-3
                  text-[#5f463d]
                  font-medium
                  text-lg
                ">
                  WhatsApp Number
                </label>

                <input
                  type="text"
                  placeholder="08xxxxxxxxxx"
                  value={whatsapp}
                  onChange={(e) =>
                    setWhatsapp(e.target.value)
                  }
                  className="
                    w-full
                    bg-[#fbf6f2]
                    border
                    border-[#ead8cc]
                    rounded-3xl
                    px-7
                    py-6
                    text-lg
                    outline-none
                    focus:border-[#8b5e4a]
                    focus:shadow-lg
                    transition-all
                  "
                />

              </div>

              {/* address */}
              <div>

                <label className="
                  block
                  mb-3
                  text-[#5f463d]
                  font-medium
                  text-lg
                ">
                  Address
                </label>

                <textarea
                  placeholder="Your complete address"
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                  className="
                    w-full
                    h-44
                    resize-none
                    bg-[#fbf6f2]
                    border
                    border-[#ead8cc]
                    rounded-3xl
                    px-7
                    py-6
                    text-lg
                    outline-none
                    focus:border-[#8b5e4a]
                    focus:shadow-lg
                    transition-all
                  "
                />

              </div>

              {/* delivery */}
              <div>

                <label className="
                  block
                  mb-4
                  text-[#5f463d]
                  font-medium
                  text-lg
                ">
                  Delivery Method
                </label>

                <div className="
                  grid
                  grid-cols-2
                  gap-5
                ">

                  {/* delivery */}
                  <button
                    type="button"
                    onClick={() =>
                      setDelivery("Delivery")
                    }
                    className={`
                      rounded-3xl
                      py-6
                      text-lg
                      font-medium
                      transition-all
                      border

                      ${
                        delivery === "Delivery"
                          ? "bg-[#8b5e4a] text-white border-[#8b5e4a] shadow-[0_15px_40px_rgba(139,94,74,0.35)] scale-[1.03]"
                          : "bg-[#fbf6f2] border-[#ead8cc] text-[#4b2e25]"
                      }
                    `}
                  >
                    🚚 Delivery
                  </button>

                  {/* pickup */}
                  <button
                    type="button"
                    onClick={() =>
                      setDelivery("Pick Up")
                    }
                    className={`
                      rounded-3xl
                      py-6
                      text-lg
                      font-medium
                      transition-all
                      border

                      ${
                        delivery === "Pick Up"
                          ? "bg-[#8b5e4a] text-white border-[#8b5e4a] shadow-[0_15px_40px_rgba(139,94,74,0.35)] scale-[1.03]"
                          : "bg-[#fbf6f2] border-[#ead8cc] text-[#4b2e25]"
                      }
                    `}
                  >
                    🏠 Pick Up
                  </button>

                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={handleContinue}
                className="
                  w-full
                  mt-6
                  bg-[#8b5e4a]
                  hover:bg-[#6f4838]
                  text-white
                  py-7
                  rounded-full
                  text-xl
                  font-medium
                  shadow-[0_20px_50px_rgba(139,94,74,0.35)]
                  hover:scale-[1.02]
                  transition-all
                "
              >
                Continue to Luxury Invoice →
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
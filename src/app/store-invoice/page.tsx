"use client";

export default function StoreInvoicePage() {

  const customer =
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem("store-customer") || "{}"
        )
      : {};

  const product =
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem("selected-product") || "{}"
        )
      : {};

  const sendWhatsApp = () => {

    const message =
      `🛍 *BLOOMCASE ORDER*%0A%0A` +
      `👤 Name: ${customer.name}%0A` +
      `📱 WhatsApp: ${customer.whatsapp}%0A` +
      `🚚 Delivery: ${customer.delivery}%0A` +
      `📍 Address: ${customer.address}%0A%0A` +
      `🛒 Product: ${product.name}%0A` +
      `💰 Total: Rp ${product.price?.toLocaleString("id-ID")}`;

    window.open(
      `https://wa.me/6281234567890?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-[#f6f0ea] px-6 py-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-[45px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

          <img
            src={product.image}
            className="
              w-full
              h-[280px] md:h-[450px]
              object-cover
            "
          />

          <div className="p-10">

            <p className="uppercase tracking-[5px] text-sm text-[#9d7c6e]">
              Selected Product
            </p>

            <h1 className="text-3xl md:text-5xl font-serif text-[#4c3228] mt-4">
              {product.name}
            </h1>

            <p className="text-[#8b746a] leading-8 mt-5">
              Premium aesthetic stamp case with
              elegant Bloomcase signature vibes.
            </p>

            <div className="border-t mt-8 pt-8">

              <div className="flex justify-between items-center">

                <div>
                  <p className="uppercase tracking-[4px] text-sm text-[#9d7c6e]">
                    Total Payment
                  </p>

                  <h2 className="text-5xl font-bold text-[#4c3228] mt-3">
                    Rp{" "}
                    {product.price?.toLocaleString(
                      "id-ID"
                    )}
                  </h2>
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

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-[45px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

          <p className="uppercase tracking-[6px] text-sm text-[#9d7c6e]">
            Store Invoice
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-serif text-[#4c3228] mt-4">
            Your Order ✨
          </h1>

          <p className="text-[#8b746a] leading-8 mt-5">
            Your Bloomcase order is almost done.
            Please review your shipping details
            before continuing to WhatsApp.
          </p>

          {/* CUSTOMER */}
          <div className="mt-12 space-y-6">

            <div className="
              bg-[#faf7f4]
              rounded-[30px]
              p-6
            ">

              <p className="uppercase tracking-[3px] text-sm text-[#9d7c6e]">
                Customer
              </p>

              <h2 className="text-3xl font-serif text-[#4c3228] mt-3">
                {customer.name}
              </h2>

            </div>

            <div className="
              bg-[#faf7f4]
              rounded-[30px]
              p-6
            ">

              <p className="uppercase tracking-[3px] text-sm text-[#9d7c6e]">
                WhatsApp
              </p>

              <h2 className="text-2xl text-[#4c3228] mt-3">
                {customer.whatsapp}
              </h2>

            </div>

            <div className="
              bg-[#faf7f4]
              rounded-[30px]
              p-6
            ">

              <p className="uppercase tracking-[3px] text-sm text-[#9d7c6e]">
                Delivery Method
              </p>

              <h2 className="text-2xl text-[#4c3228] mt-3">
                {customer.delivery}
              </h2>

            </div>

            <div className="
              bg-[#faf7f4]
              rounded-[30px]
              p-6
            ">

              <p className="uppercase tracking-[3px] text-sm text-[#9d7c6e]">
                Shipping Address
              </p>

              <p className="text-lg text-[#4c3228] leading-8 mt-3">
                {customer.address}
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={sendWhatsApp}
            className="
              w-full
              mt-10
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
            Continue to WhatsApp →
          </button>

        </div>

      </div>

    </main>
  );
}
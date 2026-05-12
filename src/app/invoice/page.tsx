"use client";

import { useEffect, useState } from "react";

type OrderData = {
  name: string;
  whatsapp: string;
  address: string;
  delivery: string;
};

export default function InvoicePage() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("custom-order");

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const totalPrice = "Rp129.000";

  const sendWhatsApp = () => {
    if (!order) return;

    const message = `
🌸 BLOOMCASE ORDER

Name: ${order.name}
WhatsApp: ${order.whatsapp}
Delivery: ${order.delivery}
Address: ${order.address}

Total: ${totalPrice}

Thank you for ordering Bloomcase ✨
`;

    const phone = "6281234567890";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const downloadInvoice = () => {
    window.print();
  };

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5efea]">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-[#b7846b] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

          <p className="text-[#4b2e25] text-lg">
            Loading Invoice...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5efea] px-6 py-12">

      <div className="max-w-3xl mx-auto">

        {/* TOP BADGE */}
        <div className="mb-8">

          <div className="
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            bg-white/80
            backdrop-blur-xl
            shadow-lg
            border
            border-white
          ">

            <div className="w-3 h-3 rounded-full bg-[#9c6b52]" />

            <p className="
              uppercase
              tracking-[5px]
              text-xs
              text-[#9c6b52]
            ">
              Invoice Summary
            </p>

          </div>

        </div>

        {/* TITLE */}
        <div className="mb-10">

          <h1 className="
            text-[70px]
            leading-[0.9]
            font-serif
            text-[#4b2e25]
          ">
            Your
            <br />
            Luxury
            <br />
            Order ✨
          </h1>

          <p className="
            mt-6
            text-[#6f5448]
            text-lg
            leading-9
            max-w-xl
          ">
            Your Bloomcase order has been successfully created
            with premium handcrafted details and elegant luxury
            finishing.
          </p>

        </div>

        {/* INVOICE CARD */}
        <div className="
          bg-white/80
          backdrop-blur-2xl
          rounded-[40px]
          p-8
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          border
          border-white
        ">

          {/* CUSTOMER INFO */}
          <div className="
            grid
            md:grid-cols-2
            gap-10
          ">

            <div>

              <p className="
                uppercase
                tracking-[5px]
                text-xs
                text-[#b7846b]
                mb-3
              ">
                Full Name
              </p>

              <h2 className="
                text-4xl
                font-serif
                text-[#4b2e25]
              ">
                {order.name}
              </h2>

            </div>

            <div>

              <p className="
                uppercase
                tracking-[5px]
                text-xs
                text-[#b7846b]
                mb-3
              ">
                Delivery
              </p>

              <div className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-full
                bg-[#f6eee8]
                text-[#5a382b]
                font-medium
              ">

                {order.delivery === "Pick Up"
                  ? "🏠 Pick Up"
                  : "🚚 Delivery"}

              </div>

            </div>

            <div>

              <p className="
                uppercase
                tracking-[5px]
                text-xs
                text-[#b7846b]
                mb-3
              ">
                WhatsApp
              </p>

              <p className="
                text-2xl
                text-[#4b2e25]
              ">
                {order.whatsapp}
              </p>

            </div>

            <div>

              <p className="
                uppercase
                tracking-[5px]
                text-xs
                text-[#b7846b]
                mb-3
              ">
                Address
              </p>

              <p className="
                text-xl
                text-[#4b2e25]
                leading-8
              ">
                {order.address}
              </p>

            </div>

          </div>

          {/* DIVIDER */}
          <div className="
            h-[1px]
            bg-[#ead8cd]
            my-10
          " />

          {/* PRODUCT */}
          <div className="
            flex
            items-center
            justify-between
            gap-6
            flex-wrap
          ">

            <div>

              <h3 className="
                text-3xl
                font-serif
                text-[#4b2e25]
              ">
                Premium Stamp Case
              </h3>

              <p className="
                text-[#8a6d5d]
                mt-3
                leading-7
              ">
                Handmade aesthetic custom design with
                luxury finishing details.
              </p>

            </div>

            <div className="
              text-5xl
              font-bold
              text-[#4b2e25]
            ">
              {totalPrice}
            </div>

          </div>

          {/* TOTAL BOX */}
          <div className="
            mt-10
            bg-[#f8f1eb]
            rounded-[30px]
            px-8
            py-7
            flex
            items-center
            justify-between
            flex-wrap
            gap-6
          ">

            <div>

              <p className="
                text-[#8a6d5d]
                text-lg
              ">
                Total Payment
              </p>

              <h2 className="
                text-6xl
                font-bold
                text-[#4b2e25]
                mt-2
              ">
                {totalPrice}
              </h2>

            </div>

            <div className="
              w-20
              h-20
              rounded-full
              bg-[#f6e7de]
              flex
              items-center
              justify-center
              text-4xl
            ">
              ✨
            </div>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="
          mt-8
          flex
          flex-wrap
          gap-5
        ">

          <button
            onClick={sendWhatsApp}
            className="
              px-10
              py-5
              rounded-full
              bg-[#9c6b52]
              text-white
              text-lg
              font-medium
              shadow-xl
              hover:scale-105
              transition-all
            "
          >
            Send to WhatsApp  
          </button>

          <button
            onClick={downloadInvoice}
            className="
              px-10
              py-5
              rounded-full
              bg-white
              text-[#4b2e25]
              text-lg
              font-medium
              shadow-xl
              border
              border-[#ead8cd]
              hover:scale-105
              transition-all
            "
          >
            Download Invoice 
          </button>

        </div>

      </div>

    </main>
  );
}
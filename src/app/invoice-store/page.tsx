"use client";

import { useEffect, useState } from "react";

export default function InvoiceStorePage() {

  const [customer, setCustomer] = useState<any>({});
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const savedCustomer = JSON.parse(
      localStorage.getItem("store-customer") || "{}"
    );

    const savedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCustomer(savedCustomer);

    setCart(savedCart);

    const calculatedTotal = savedCart.reduce(
      (acc: number, item: any) =>
        acc + Number(item.price),
      0
    );

    setTotal(calculatedTotal);

  }, []);

  const sendWhatsApp = () => {

    const productList = cart
      .map(
        (item: any) =>
          `• ${item.name} - Rp ${Number(
            item.price
          ).toLocaleString("id-ID")}`
      )
      .join("%0A");

    const message =
      `🛍 *BLOOMCASE STORE ORDER*%0A%0A` +
      `━━━━━━━━━━━━━━%0A%0A` +

      `👤 *Customer*%0A` +
      `${customer.name}%0A%0A` +

      `📱 *WhatsApp*%0A` +
      `${customer.whatsapp}%0A%0A` +

      `🚚 *Delivery*%0A` +
      `${customer.delivery}%0A%0A` +

      `📍 *Address*%0A` +
      `${customer.address}%0A%0A` +

      `🛒 *Items Ordered*%0A` +
      `${productList}%0A%0A` +

      `━━━━━━━━━━━━━━%0A%0A` +

      `💰 *TOTAL PAYMENT*%0A` +
      `Rp ${total.toLocaleString("id-ID")}%0A%0A` +

      `Thank you ✨`;

    window.open(
      `https://wa.me/6281234567890?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-[#f6f0ea] px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[5px] text-[#9d7c6e]">
          Store Invoice
        </p>

        <h1 className="text-6xl font-serif text-[#4c3228] mt-5">
          Your Order ✨
        </h1>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            {/* CUSTOMER */}
            <div className="space-y-8 text-[#4c3228]">

              <div>
                <p className="text-sm uppercase tracking-[3px] text-[#9d7c6e]">
                  Full Name
                </p>

                <h2 className="text-3xl mt-2">
                  {customer.name}
                </h2>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[3px] text-[#9d7c6e]">
                  WhatsApp
                </p>

                <h2 className="text-3xl mt-2">
                  {customer.whatsapp}
                </h2>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[3px] text-[#9d7c6e]">
                  Delivery
                </p>

                <h2 className="text-3xl mt-2">
                  {customer.delivery}
                </h2>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[3px] text-[#9d7c6e]">
                  Address
                </p>

                <h2 className="text-xl mt-2 leading-9">
                  {customer.address}
                </h2>
              </div>

            </div>

            {/* ITEMS */}
            <div className="border-t border-[#eadfd7] mt-10 pt-10">

              <h2 className="text-3xl font-serif text-[#4c3228] mb-8">
                Order Items
              </h2>

              <div className="space-y-5">

                {cart.length > 0 ? (

                  cart.map((item: any, index: number) => (

                    <div
                      key={index}
                      className="
                        flex
                        justify-between
                        items-center
                        bg-[#f9f4ef]
                        rounded-3xl
                        p-5
                      "
                    >

                      <div>

                        <h3 className="text-xl text-[#4c3228]">
                          {item.name}
                        </h3>

                        <p className="text-[#9d7c6e] mt-1">
                          Ready Collection
                        </p>

                      </div>

                      <p className="text-xl font-semibold text-[#4c3228]">
                        Rp{" "}
                        {Number(item.price).toLocaleString(
                          "id-ID"
                        )}
                      </p>

                    </div>

                  ))

                ) : (

                  <div className="text-[#9d7c6e]">
                    No items in cart
                  </div>

                )}

              </div>

              {/* TOTAL */}
              <div className="border-t border-[#eadfd7] mt-10 pt-8 flex justify-between items-center">

                <h2 className="text-4xl font-serif text-[#4c3228]">
                  Total
                </h2>

                <h2 className="text-5xl font-bold text-[#4c3228]">
                  Rp{" "}
                  {total.toLocaleString("id-ID")}
                </h2>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col justify-between">

            <div>

              <p className="uppercase tracking-[4px] text-[#9d7c6e]">
                Payment Summary
              </p>

              <h2 className="text-5xl font-serif text-[#4c3228] mt-5 leading-tight">
                Ready to
                <br />
                Checkout? ✨
              </h2>

              <p className="mt-8 text-[#7a655d] leading-8 text-lg">
                Your Bloomcase order is ready.
                Continue to WhatsApp and send
                your order directly to admin.
              </p>

            </div>

            <button
              onClick={sendWhatsApp}
              className="
                mt-14
                bg-[#7b5647]
                hover:bg-[#68473a]
                text-white
                w-full
                py-5
                rounded-full
                text-lg
                transition-all
                duration-300
                shadow-xl
                hover:scale-[1.02]
              "
            >
              Send to WhatsApp →
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
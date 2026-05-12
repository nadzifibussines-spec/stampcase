"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as fabric from "fabric";

const phoneModels = [
  "iPhone X",
  "iPhone XR",
  "iPhone XS",
  "iPhone XS Max",
  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone 12",
  "iPhone 12 Mini",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 13",
  "iPhone 13 Mini",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",
  "iPhone 17",
  "iPhone 17 Plus",
  "iPhone 17 Pro",
  "iPhone 17 Pro Max",
];

const stickers = [
  "/stickers/bali.png",
  "/stickers/balii.png",
  "/stickers/heart.png",
  "/stickers/vintage.png",
  "/stickers/teddy.png",
  "/stickers/ribbon.png",
  "/stickers/butterfly.png",
  "/stickers/stamp.png",
  "/stickers/cloud.png",
  "/stickers/lace.png",
  "/stickers/ticket.png",
  "/stickers/star.png",
];

export default function CustomizePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const router = useRouter();

  const [selectedPhone, setSelectedPhone] =
    useState("iPhone 15 Pro Max");

  const canvasInstance = useRef<fabric.Canvas | null>(null);

  // CASE IMAGE
  const getCaseImage = (phone: string) => {
    return `/cases/${phone
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/\+/g, "plus")}.png`;
  };

  // LOAD CASE IMAGE
  const loadCaseImage = async (phone: string) => {
    if (!canvasInstance.current) return;

    const canvas = canvasInstance.current;

    const imageUrl = getCaseImage(phone);

    try {
      const img = await fabric.Image.fromURL(imageUrl);

      const objects = canvas.getObjects();

      objects.forEach((obj) => {
        if ((obj as any).isCaseImage) {
          canvas.remove(obj);
        }
      });

      img.set({
        originX: "center",
        originY: "center",
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        selectable: false,
        evented: false,
      });

      const maxWidth = 260;
      const maxHeight = 520;

      const scale = Math.min(
        maxWidth / (img.width || 1),
        maxHeight / (img.height || 1)
      );

      img.scale(scale);

      (img as any).isCaseImage = true;

      canvas.add(img);

      canvas.moveObjectTo(img, 0);

      canvas.renderAll();
    } catch (error) {
      console.log(error);
    }
  };

  // INIT CANVAS
  useEffect(() => {
    if (!canvasRef.current) return;

    // DELETE ICON
    const deleteIcon =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23a04c4c'/%3E%3Cpath d='M8 8L16 16M16 8L8 16' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E";

    const rotateIcon =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none'%3E%3Ccircle cx='12' cy='12' r='12' fill='%237b5647'/%3E%3Cpath d='M15.5 8.5V5.5M15.5 5.5H12.5M15.5 5.5L11.5 9.5C10.1 10.9 10.1 13.1 11.5 14.5C12.9 15.9 15.1 15.9 16.5 14.5C17.2 13.8 17.5 12.9 17.5 12' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

    const deleteImg = document.createElement("img");

    deleteImg.src = deleteIcon;

    const rotateImg = document.createElement("img");

    rotateImg.src = rotateIcon;

    const deleteObject = (
      _eventData: any,
      transform: any
    ) => {
      const target = transform.target;

      const canvas = target.canvas;

      canvas.remove(target);

      canvas.requestRenderAll();
    };

    // DELETE BUTTON
    // DELETE BUTTON
const fabricObj = fabric.FabricObject.prototype as any;

if (!fabricObj.controls) {
  fabricObj.controls = {};
}

fabricObj.controls.deleteControl =
  new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -18,
    offsetX: 18,
    cursorStyle: "pointer",
    mouseUpHandler: deleteObject,

    render: function (
      ctx,
      left,
      top
    ) {
      const size = 30;

      ctx.save();

      ctx.translate(left, top);

      ctx.drawImage(
        deleteImg,
        -size / 2,
        -size / 2,
        size,
        size
      );

      ctx.restore();
    },
  });

    // ROTATE BUTTON
    (fabric.FabricObject.prototype as any).controls.mtr =
      new fabric.Control({
        x: 0,
        y: -0.5,
        offsetY: -45,
        actionHandler: fabric.controlsUtils.rotationWithSnapping,
        cursorStyleHandler:
          fabric.controlsUtils.rotationStyleHandler,

        render: function (
          ctx,
          left,
          top
        ) {
          const size = 32;

          ctx.save();

          ctx.translate(left, top);

          ctx.drawImage(
            rotateImg,
            -size / 2,
            -size / 2,
            size,
            size
          );

          ctx.restore();
        },
      });

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: window.innerWidth < 768 ? 280 : 350,
height: window.innerWidth < 768 ? 560 : 700,
      backgroundColor: "#ffffff",
      preserveObjectStacking: true,
    });

    canvasInstance.current = canvas;

    loadCaseImage(selectedPhone);

    return () => {
      canvas.dispose();
    };
  }, []);

  // CHANGE PHONE
  useEffect(() => {
    loadCaseImage(selectedPhone);
  }, [selectedPhone]);

  // ADD STICKER
  const addSticker = async (url: string) => {
    if (!canvasInstance.current) return;

    const canvas = canvasInstance.current;

    const img = await fabric.Image.fromURL(url);

    // SAME SIZE
    img.scaleToWidth(90);

    img.set({
      left: 170,
      top: 300,

      // FIXED SIZE
      lockScalingX: true,
      lockScalingY: true,

      // STYLE
      cornerStyle: "circle",
      transparentCorners: false,

      borderColor: "#7b5647",
      cornerColor: "#7b5647",

      padding: 8,
    });

    // ONLY ROTATE + DELETE
    img.setControlsVisibility({
  mt: false,
  mb: false,
  ml: false,
  mr: false,
  bl: false,
  br: false,
  tl: false,
  tr: false,
  mtr: true,
  deleteControl: true,
});

canvas.add(img);

(img as any).controls.deleteControl =
  (fabric.FabricObject.prototype as any)
    .controls.deleteControl;

canvas.setActiveObject(img);

canvas.renderAll();
  };

  // SAVE DESIGN
  const saveDesign = () => {
    if (!canvasInstance.current) return;

    const image = canvasInstance.current.toDataURL({
  format: "png",
  quality: 1,
  multiplier: 1,
});

    localStorage.setItem(
      "stampcase-design",
      JSON.stringify({
        phone: selectedPhone,
        design: image,
      })
    );

    router.push("/form-custom");
  };
  const downloadDesign = () => {
  if (!canvasInstance.current) return;

  const dataURL = canvasInstance.current.toDataURL({
    format: "png",
    quality: 1,
    multiplier: 3, // HD
  });

  const link = document.createElement("a");

  link.href = dataURL;

  link.download = `${selectedPhone
    .replace(/\s+/g, "-")
    .toLowerCase()}-design.png`;

  link.click();
};

  return (
    <main className="min-h-screen bg-[#f6f0ea] px-6 py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[6px] text-sm text-[#9d7c6e]">
            Customize Your Stamp Case
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-serif text-[#4c3228] mt-6">
            Design Your
            <br />
            Dream Case ✨
          </h1>

          <p className="mt-10 text-lg leading-10 text-[#7a655d] max-w-xl">
            Choose your iPhone model and decorate
            your case with cute aesthetic stickers
            just like Canva.
          </p>

          {/* PHONE */}
          <div className="mt-16">

            <h2 className="text-4xl font-serif text-[#4c3228] mb-8">
              Choose iPhone Model
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-[420px] overflow-y-auto pr-2">

              {phoneModels.map((phone) => {

                const imagePath = getCaseImage(phone);

                return (
                  <button
                    key={phone}
                    onClick={() =>
                      setSelectedPhone(phone)
                    }
                    className={`
                      rounded-[28px]
                      border
                      p-4
                      flex
                      items-center
                      gap-4
                      transition-all
                      duration-300
                      shadow-lg
                      hover:scale-[1.02]
                      ${
                        selectedPhone === phone
                          ? "bg-[#7b5647] text-white border-[#7b5647]"
                          : "bg-white border-[#eadfd7]"
                      }
                    `}
                  >

                    <div className="w-16 h-24 bg-[#f4efeb] rounded-2xl overflow-hidden flex items-center justify-center">

                      <img
                        src={imagePath}
                        alt={phone}
                        className="w-full h-full object-contain"
                      />

                    </div>

                    <div className="text-left">

                      <p className="font-semibold text-lg">
                        {phone}
                      </p>

                      <p
                        className={`text-sm mt-1 ${
                          selectedPhone === phone
                            ? "text-[#f4dfd3]"
                            : "text-[#9d7c6e]"
                        }`}
                      >
                        Transparent Case
                      </p>

                    </div>

                  </button>
                );
              })}
            </div>

          </div>

          {/* STICKERS */}
          <div className="mt-16">

            <h2 className="text-4xl font-serif text-[#4c3228] mb-8">
              Sticker Library
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

              {stickers.map((sticker, index) => (

                <button
                  key={index}
                  onClick={() => addSticker(sticker)}
                  className="
                    bg-white
                    rounded-[28px]
                    h-28
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >

                  <img
                    src={sticker}
                    alt="sticker"
                    className="w-16 h-16 object-contain"
                  />

                </button>

              ))}

            </div>

          </div>

          {/* BUTTON */}
          
          {/* BUTTONS */}
<div className="mt-16 flex gap-5 justify-end">

  {/* DOWNLOAD */}
  <button
    onClick={downloadDesign}
    className="
      bg-white
      border
      border-[#7b5647]
      text-[#7b5647]
      px-10
      py-5
      rounded-full
      text-lg
      font-medium
      shadow-xl
      transition-all
      duration-300
      hover:scale-105
    "
  >
    Download Design 
  </button>

  {/* INVOICE */}
  <button
    onClick={saveDesign}
    className="
      bg-[#7b5647]
      hover:bg-[#69473a]
      text-white
      px-10
      py-5
      rounded-full
      text-lg
      font-medium
      shadow-xl
      transition-all
      duration-300
      hover:scale-105
    "
  >
    Continue to Form
  </button>

</div>

        </div>

        {/* RIGHT */}
        <div className="lg:sticky lg:top-10 flex justify-center">

          <div
            className="
              bg-white
              rounded-[50px]
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              p-8
            "
          >

            <canvas ref={canvasRef} />

          </div>

        </div>

      </div>

    </main>
  );
}
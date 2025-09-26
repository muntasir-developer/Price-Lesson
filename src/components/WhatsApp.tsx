"use client";
import Image from "next/image";

export default function WhatsAppFloating() {
  const phone = "918578064265"; // your number
  const message = "Hi, I came from your website and want to know more!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const openWhatsApp = () => {
    // Open WhatsApp in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="fixed lg:bottom-5 bottom-24 right-3 lg:right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg 
                 bg-green-500 hover:scale-110 transform transition duration-300"
    >
      <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
    </button>
  );
}

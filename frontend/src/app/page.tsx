"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
// import { useLanguage } from "../context/LenguajeContext.js";
import "./globals.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center">
      <section className="font-fredoka-semibold w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Contenedor con título a la izquierda e imagen a la derecha */}
        <div className="mt-14 px-10 mb-8 w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <h1 className="text-5xl text-p-white text-center md:text-left">
              {t("page_title")}
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end px-6">
            <Image
              alt="logo-w-b.svg"
              width={400}
              height={400}
              className=""
              src="/images/portada-1.svg"
            />
          </div>
        </div>

        {/* Contenido centrado debajo */}
        <div className="font-fredoka-semibold w-full flex flex-col items-center text-center px-6 mt-6">
          <p className="text-1xl text-p-white">{t("page_text_1")}</p>
          <p className="text-1xl text-p-white ">{t("page_text_2")}</p>
          <a
            className="font-fredoka-semibold text-center mt-10 font-bold px-6 py-4 rounded-xl border border-gray-500 hover:cursor-pointer text-color-blue bg-yellow"
            onClick={() => window.open("https://calendly.com/ip-weproject")}
          >
            {t("book_consultation")}
          </a>
        </div>
      </section>
    </div>
  );
}

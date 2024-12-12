"use client";
import Image from "next/image";
import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LenguajeContext.js";
import { useTranslation } from "react-i18next";
import "../globals.css";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <section className="top-0 left-0 w-full shadow-md z-50">
      <div className="container flex p-3 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex">
          <Image
            priority
            width={30}
            height={30}
            alt="logo"
            src="/images/logo1.1.svg"
          />
          <span className="mt-2 ml-4 text-xl font-bold text-white">{t("Lokis")}</span>
        </a>

        {/* Navegación */}
        <nav className="flex items-center  rounded-full px-4 py-1">
          <a href="/" className="px-4 py-2 rounded-full text-gray-400 hover:text-gray-100">
            {t("home")}
          </a>
          <a href="/components/products" className="px-4 py-2 rounded-full text-gray-400 hover:text-gray-100">
            {t("header_products")}
          </a>
          <a href="/components/about" className="px-4 py-2 rounded-full text-gray-400 hover:text-gray-100">
            {t("header_about")}
          </a>
          <a href="/components/form" className="px-4 py-2 rounded-full text-gray-400 hover:text-gray-100">
            {t("header_contact")}
          </a>
        </nav>

        {/* Botones "Let's Talk" y de Idioma */}
        <div className="flex items-center space-x-4">
          {/* Botón "Let's Talk" */}
          {/* <a href="/components/form"> <button className="bg-grey-light border-2 rounded-full border-black px-5 py-2 bg-white text-black font-semibold shadow-[8px_8px_0px_0px_rgba(0,_0,_0,_1)] hover:bg-gray-300 relative">
            {t("lets_talk")}
            <span className="absolute inset-0 rounded-full bg-gray-700 -bottom-1.5 -right-1.5 translate-x-1 translate-y-1 -z-10"></span>
          </button></a> */}

          {/* Botón de Idioma */}
{/* Botón de Idioma */}
<button
  onClick={() => {
    const newLanguage = language === "en" ? "es" : "en";
    changeLanguage(newLanguage); // Cambiar idioma
  }}
  className="flex items-center px-4 py-2 rounded-lg border border-gray-500 text-gray-500 hover:bg-gray-300 text-sm"
>
  <GlobeAltIcon className="w-5 h-5 mr-1" />
  {language === "en" ? "ES" : "EN"}
</button>

          {/* Menú desplegable */}
          {isOpen && (
            <div className="absolute right-30 mt-2 w-24 rounded-md shadow-lg bg-white">
              <div className="py-1">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-gray-700 text-sm hover:bg-indigo-100 ${
                    language === "en" ? "font-semibold" : ""
                  }`}
                  disabled={language === "en"}>
                  {t("toogle_lenguage_en")}
                </button>
                <button
                  onClick={() => {
                    changeLanguage("es");
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-gray-700 text-sm hover:bg-indigo-100 ${
                    language === "es" ? "font-semibold" : ""
                  }`}
                  disabled={language === "es"}>
                  {t("toogle_lenguage_es")}
                </button>
              </div>
            </div>
          )}
        </div>
       </div>
       <div className="mx-4 border-b border-gray-500"></div>
    </section>
  );
}

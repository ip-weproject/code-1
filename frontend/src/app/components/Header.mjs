"use client";
import Image from "next/image";
import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LenguajeContext.js";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import "../globals.css";
import Link from "next/link.js";


export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const router = useRouter();

  const handleClick = () => {
    router.push("/components/form");
  };

  return (
    <section className="font-fredoka-semibold fixed flex justify-center top-0 left-0 w-full z-50 ">
      <div className="container flex py-4 px-6 flex-col md:flex-row items-center justify-between bg-lightgray mt-4 rounded-lg">
        {/* Logo */}
        <Link href="/" className="flex">
          <Image
            priority
            width={30}
            height={30}
            alt="logo"
            src="/images/logo-png.svg"
          />
          <span className="ml-10 text-3xl font-bold text-color-blue">
            {t("OSA")}
          </span>
        </Link>

        {/* Navegación */}
        <nav className="flex items-center  rounded-full px-4 py-1">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-color-blue hover:text-color-blue"
          >
            {t("home_page")}
          </Link>
          <Link
            href="/components/products"
            className="px-4 py-2 rounded-full text-color-blue hover:text-color-blue"
          >
            {t("header_products")}
          </Link>
          <Link
            href="/components/about"
            className="px-4 py-2 rounded-full text-color-blue hover:text-color-blue"
          >
            {t("header_about")}
          </Link>
          {/* <Link
            href="/components/form"
            className="px-4 py-2 rounded-full text-color-blue hover:text-color-blue"
          >
            {t("header_contact")}
          </Link> */}
        </nav>

        {/* Botones "Let's Talk" y de Idioma */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleClick}
            className="bg-yellow flex items-center px-4 py-2 rounded-lg -zinc-900 text-color-blue hover:bg-gray-300 text-sm"
          >
            {t("header_contact")}
          </button>

          {/* Botón de Idioma */}

          <button
            onClick={() => {
              const newLanguage = language === "en" ? "es" : "en";
              changeLanguage(newLanguage); // Cambiar idioma
            }}
            className="flex items-center px-4 py-2 rounded-lg border border-zinc-900 text-color-blue hover:bg-gray-300 text-sm"
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
                  className={`block w-full text-left px-4 py-2 text-color-blue text-sm hover:bg-white ${
                    language === "en" ? "font-semibold" : ""
                  }`}
                  disabled={language === "en"}
                >
                  {t("toogle_lenguage_en")}
                </button>
                <button
                  onClick={() => {
                    changeLanguage("es");
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-color-blue text-sm hover:bg-white ${
                    language === "es" ? "font-semibold" : ""
                  }`}
                  disabled={language === "es"}
                >
                  {t("toogle_lenguage_es")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="mx-4 border-b border-gray-500"></div> */}
    </section>
  );
}

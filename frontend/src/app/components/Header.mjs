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

  // const toggleDropdown = () => setIsOpen(!isOpen);

  const router = useRouter();

  // const handleClick = () => {
  //   router.push("/components/form");
  // };

    // Función para hacer scroll a una sección
    const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <section className="font-fredoka-bold fixed flex  justify-center top-0 left-0 w-full z-50">
      <div className="container flex py-4 px-6 flex-col md:flex-row items-center justify-between bg-lightgray mt-4 rounded-lg">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} href="/" className="flex">
          <Image
            priority
            width={30}
            height={30}
            alt="logo"
            src="/images/logo-png.svg"
          />
          <span className="ml-4 text-3xl font-bold text-color-blue">
            {t("OSA")}
          </span>
        </button>

           {/* Navegación */}
          <nav className="flex items-center standard-font-size rounded-full px-4 py-1">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg px-4 py-2 rounded-lg text-color-blue border border-transparent hover:border-solid hover:border-2 hover:bg-[#FCCA7B] hover:rounded-lg standard-font-size"
          >
            {t("home_page")}
          </button>
        
          <button
            onClick={() => scrollToSection("products")}
            className="text-lg px-4 py-2 rounded-lg text-color-blue border border-transparent hover:border-solid hover:border-2 hover:bg-[#FCCA7B] hover:rounded-lg standard-font-size"
          >
            {t("header_products")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg px-4 py-2 rounded-lg text-color-blue border border-transparent hover:border-solid hover:border-2 hover:bg-[#FCCA7B] hover:rounded-lg standard-font-size"
          >
            {t("header_about")}
          </button>
          <button
            onClick={() => scrollToSection("sales")}
            className="text-lg px-4 py-2 rounded-lg text-color-blue border border-transparent hover:border-solid hover:border-2 hover:bg-[#FCCA7B] hover:rounded-lg standard-font-size"
          >
            {t("Salesforce")}
          </button>
        </nav>

        {/* Botones "Let's Talk" y de Idioma */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("contact")}
            // onClick={handleClick}
            className="bg-[#FCCA7B] flex items-center px-4 py-2 rounded-lg text-color-blue hover:bg-red-400 standard-font-size"
          >
            {t("header_contact")}
          </button>

          {/* Botón de Idioma */}

          <button
            onClick={() => {
              const newLanguage = language === "en" ? "es" : "en";
              changeLanguage(newLanguage); // Cambiar idioma
            }}
            className="flex items-center px-4 py-2 rounded-lg border border-zinc-900 text-color-blue hover:bg-gray-300 standard-font-size"
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

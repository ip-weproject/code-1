"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LenguajeContext.js";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import "../globals.css";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const [targetSection, setTargetSection] = useState(null);

  // Función para hacer scroll a una sección
  const scrollToSection = (id) => {
    if (pathname !== "/") {
      setTargetSection(id); // Guarda la sección a la que queremos ir
      router.push("/"); // Primero, navega a la página principal
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detecta cuando la ruta cambia a `/` y hace el scroll
  useEffect(() => {
    if (pathname === "/" && targetSection) {
      document
        .getElementById(targetSection)
        ?.scrollIntoView({ behavior: "smooth" });
      setTargetSection(null); // Resetea el estado
    }
  }, [pathname, targetSection]);

  return (
    <section className="font-mona-bold text-color-1 fixed flex  justify-center top-0 left-0 w-full z-50">
      <div className="container flex py-4 px-6 flex-col md:flex-row items-center justify-between bg-color-2 shadow-lg mt-4 rounded-lg">
        {/* Logo
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-color-1 focus:outline-none"
        >
          ☰
        </button> */}
        <button
          onClick={() => scrollToSection("home")}
          href="/"
          className="flex"
        >
          <Image
            priority
            width={50}
            height={50}
            alt="logo"
            src="/images/osa-logo_3.svg"
          />
          <span className="ml-4 mt-2 text-3xl">{t("OSA")}</span>
        </button>

        {/* Navegación */}
        <nav className={`md:flex ${isOpen ? "block" : "hidden"} flex-col md:flex-row items-center`}>
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg px-4 py-2 rounded-lg border border-transparent hover:bg-color-2 hover:rounded-lg standard-font-size"
          >
            {t("home_page")}
          </button>

          <button
            onClick={() => scrollToSection("products")}
            className="text-lg px-4 py-2 rounded-lg border border-transparent hover:bg-color-2 hover:rounded-lg standard-font-size"
          >
            {t("header_products")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg px-4 py-2 rounded-lg border border-transparent hover:bg-color-2 hover:rounded-lg standard-font-size"
          >
            {t("header_about")}
          </button>
          <button
            onClick={() => scrollToSection("sales")}
            className="text-lg px-4 py-2 rounded-lg border border-transparent hover:bg-color-2 hover:rounded-lg standard-font-size"
          >
            {t("Salesforce")}
          </button>
        </nav>

        {/* Botones "contact" y de Idioma */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("contact")}
            // onClick={handleClick}
            className="flex items-center px-4 py-2 text-color-2 text-lg rounded-lg bg-color-3 hover:bg-color-1 transition-all duration-300 standard-font-size"
          >
            {t("header_contact")}
          </button>

          {/* Botón de Idioma */}

          <button
            onClick={() => {
              const newLanguage = language === "en" ? "es" : "en";
              changeLanguage(newLanguage); // Cambiar idioma
            }}
            className="flex items-center px-4 py-2 rounded-lg standard-font-size hover:bg-color-5 hover:border-solid"
          >
            <GlobeAltIcon className="w-5 h-5 mr-1" />
            {language === "en" ? "ES" : "EN"}
          </button>

        </div>
      </div>
    </section>
  );
}

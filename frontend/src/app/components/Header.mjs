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
      <div className="container flex py-4 px-6 flex-col md:flex-row items-center justify-between bg-color-2 mt-4 rounded-lg">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          href="/"
          className="flex"
        >
          <Image
            priority
            width={35}
            height={35}
            alt="logo"
            src="/images/logo-png.svg"
          />
          <span className="ml-4 text-3xl">{t("OSA")}</span>
        </button>

        {/* Navegación */}
        <nav className="flex items-center standard-font-size rounded-full px-4 py-1">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg px-4 py-2 rounded-lg border border-transparent hover:border-solid hover:border-2 hover:bg-color-3 hover:rounded-lg standard-font-size"
          >
            {t("home_page")}
          </button>

          <button
            onClick={() => scrollToSection("products")}
            className="text-lg px-4 py-2 rounded-lg border border-transparent hover:border-solid hover:border-2 hover:bg-color-3 hover:rounded-lg standard-font-size"
          >
            {t("header_products")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg px-4 py-2 rounded-lg border border-transparent hover:border-solid hover:border-2 hover:bg-color-3 hover:rounded-lg standard-font-size"
          >
            {t("header_about")}
          </button>
          <button
            onClick={() => scrollToSection("sales")}
            className="text-lg px-4 py-2 rounded-lg border border-transparent hover:border-solid hover:border-2 hover:bg-color-3 hover:rounded-lg standard-font-size"
          >
            {t("Salesforce")}
          </button>
        </nav>

        {/* Botones "Let's Talk" y de Idioma */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("contact")}
            // onClick={handleClick}
            className="bg-color-3 flex items-center px-4 py-2 text-color-2 rounded-lg hover:bg-color-2 transition-all duration-300 standard-font-size"
          >
            {t("header_contact")}
          </button>

          {/* Botón de Idioma */}

          <button
            onClick={() => {
              const newLanguage = language === "en" ? "es" : "en";
              changeLanguage(newLanguage); // Cambiar idioma
            }}
            className="flex items-center px-4 py-2 rounded-lg hover:bg-color-2 standard-font-size"
          >
            <GlobeAltIcon className="w-5 h-5 mr-1" />
            {language === "en" ? "ES" : "EN"}
          </button>

          {/* Menú desplegable */}
          {isOpen && (
            <div className="absolute right-30 mt-2 w-24 rounded-md shadow-lg ">
              <div className="py-1">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm  ${
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
                  className={`block w-full text-left px-4 py-2 text-sm ${
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
    </section>
  );
}

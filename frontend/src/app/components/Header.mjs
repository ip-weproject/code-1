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

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Oculta el header al hacer scroll hacia abajo
    } else {
      setIsVisible(true); // Muestra el header al hacer scroll hacia arriba
    }
    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);


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
    <section className="font-albert-bold text-color-1 fixed flex h-32 bg-color-2 justify-center top-0 left-0 w-full z-50">
              <button
          onClick={() => scrollToSection("home")}
          href="/"
          className="flex"
        >
          <Image
            priority
            width={90}
            height={90}
            alt="logo"
            src="/images/osa-logo_3.svg"
          />
          <span className="flex items-center ml-4 text-3xl">{t("OSA")}</span>
        </button>
      <div className="container flex w-6/12 px-6 mx-20 my-8 flex-col md:flex-row items-center justify-between bg-color-2 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl">
        {/* Logo
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-color-1 focus:outline-none"
        >
          ☰
        </button> */}


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

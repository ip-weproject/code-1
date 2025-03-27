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
    <section className="font-albert-bold text-color-1 fixed flex justify-between h-20 md:h-28 py-4 bg-color-2  top-0 w-full z-50">
        <button
          onClick={() => scrollToSection("home")}
          href="/"
          className="flex">
          <Image
            priority
            width={260}
            height={70}
            alt="logo"
            src="/images/logo-text-2.svg"
            className="pl-32"          />
        </button>
      <div className="flex w-6/12 px-6 mx-24 py-0 flex-col md:flex-row items-center justify-between bg-color-2 rounded-2xl">
      {/* <div className="flex w-6/12 px-6 mx-24 py-0 flex-col md:flex-row items-center justify-between bg-color-2 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl"> */}
        {/* Logo
        <button onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-color-1 focus:outline-none">
          ☰ </button> */}

        {/* Navegación */}
        {/* <nav className= "flex-col md:flex-row items-center"> */}
        <nav className={`md:flex ${isOpen ? "block" : "hidden"} flex-col md:flex-row items-center`}>
          <button
            onClick={() => scrollToSection("home")}
            className="ml-2 px-4 py-2 border-2 border-transparent rounded-full hover:border-black font-gilroy-regular standard-font-size outline-none p-0 m-0">
            {t("home_page")}
          </button>

          <button
            onClick={() => scrollToSection("products")}
            className="ml-2 px-4 py-2 border-2 border-transparent rounded-full hover:border-black font-gilroy-regular standard-font-size bg-transparent"
          >
            {t("header_products")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="ml-2 px-4 py-2 border-2 border-transparent rounded-full hover:border-black font-gilroy-regular standard-font-size bg-transparent min-w-[120px]"
          >
            {t("header_about")}
          </button>
          <button
            onClick={() => scrollToSection("sales")}
            className="ml-2 px-4 py-2 border-2 border-transparent rounded-full hover:border-black font-gilroy-regular standard-font-size bg-transparent"
          >
            {t("Salesforce")}
          </button>
        </nav>

        {/* Botones "contact" y de Idioma */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("contact")}
            // onClick={handleClick}
            className="flex items-center ml-2 px-4 py-2 text-color-1 text-lg rounded-full consultation-btn hover:consultation-btn transition-all duration-300 font-gilroy-regular"
          >
            {t("header_contact")}
          </button>

          {/* Botón de Idioma */}

          <button
            onClick={() => {
              const newLanguage = language === "en" ? "es" : "en";
              changeLanguage(newLanguage);
            }}
            className="flex items-center px-4 py-2 rounded-full standard-font-size font-gilroy-regular border-2 border-transparent hover:border-black transition-all duration-300"
          >
            <GlobeAltIcon className="w-5 h-5 mr-1 mb-0.5" />
            {language === "en" ? "ES" : "EN"}
          </button>





        </div>
      </div>
      {/* <button
          onClick={() => scrollToSection("home")}
          href="/"
          className="flex w-40 p-5">
          <Image
            priority
            width={50}
            height={80}
            alt="logo"
            src="/images/Partner-Logo.webp"
            className="hidden"
          />
          <span className="flex items-center ml-4 text-3xl">{t("OSA")}</span>
        </button> */}
    </section>
  );
}

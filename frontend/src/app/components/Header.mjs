"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LenguajeContext.js";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import "../globals.css";
import Link from "next/link.js";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [targetSection, setTargetSection] = useState(null);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (pathname !== "/") {
      setTargetSection(id);
      router.push("/");
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (pathname === "/" && targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
      setTargetSection(null);
    }
  }, [pathname, targetSection]);

  return (
    <section className="font-albert-bold text-color-1 fixed flex justify-around h-20 md:h-28 py-4 bg-header top-0 w-full z-50">
      {/* <div className="flex items-center"> */}
      <button onClick={() => scrollToSection("home")} className="flex">
        <Image priority width={150} height={60} alt="logo" src="/images/logo-h.svg" className="pl-26" />
      </button>
        {/* <Link href="">
          <Image
            priority
            width={150}
            height={120}
            alt="Salesforce"
            src="/images/partner-logo.svg"
            className="-ml-5"/>
          </Link> */}
      {/* </div> */}




      {/* Botón hamburguesa */}
      <button className="md:hidden pr-6" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
      </button>
      
      {/* Menú desplegable en mobile */}
      <div className={`absolute top-full left-0 w-full bg-color-2 transition-transform transform ${isOpen ? "translate-y-0" : "-translate-y-full"} md:relative md:top-0 md:flex md:translate-y-0 md:w-auto md:items-center`}>
  <nav className={`flex flex-col md:flex-row items-center ${isOpen ? "block" : "hidden md:block"}`}>
    <div className="flex md:flex-row flex-col items-center md:shadow-none pr-16 md:pr-0">
    <button onClick={() => scrollToSection("home")} className="ml-3 px-4 py-2 border-2 border-transparent rounded-full hover:border-black font-gilroy-regular standard-font-size">
      {t("home_page")}
    </button>
    <button onClick={() => scrollToSection("products")} className="ml-3 px-4 py-2 border-2 border-transparent rounded-full hover:border-black font-gilroy-regular standard-font-size">
      {t("header_products")}
    </button>
    <button onClick={() => scrollToSection("about")} className="ml-3 px-4 py-2 border-2 border-transparent rounded-full hover:border-black font-gilroy-regular standard-font-size">
      {t("header_about")}
    </button>
    <button onClick={() => scrollToSection("sales")} className="ml-3 px-4 py-2 border-2 border-transparent rounded-full hover:border-black font-gilroy-regular standard-font-size">
      {t("CRM")}
    </button>
    <button onClick={() => scrollToSection("contact")} className="ml-3 px-4 py-2 text-color-1 text-lg rounded-full consultation-btn hover:consultation-btn transition-all duration-300 font-gilroy-regular">
      {t("header_contact")}
    </button>
    <button onClick={() => changeLanguage(language === "en" ? "es" : "en")} className="ml-3 flex items-center px-4 py-2 rounded-full standard-font-size font-gilroy-regular border-2 border-transparent hover:border-black transition-all duration-300">
      <GlobeAltIcon className="w-5 h-5 mr-1 mb-0.5" />
      {language === "en" ? "ES" : "EN"}
    </button>
  </div>
  </nav>
</div>

    </section>
  );
}

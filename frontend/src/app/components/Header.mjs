"use client";
import Image from "next/image";
import { useLanguage } from "../context/LenguajeContext.js";
import { useTranslation } from "react-i18next"; 
import "../globals.css";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
<section  className="w-full text-p-gray-700 shadow bg-p-black">
    <div  className="container mx-auto flex flex-wrap md:p-3 flex-col md:flex-row items-center justify-between">
            <a href="/" className="flex title-font font-medium items-center px-2 text-p-gray-900 md:mb-0">
            <Image  priority 
                    pazly-editable="src child"
                    width={30} 
                    height={30} 
                    className="transform" 
                    alt="logo" 
                    src="/images/Recurso 12.svg"/>
            <span className="ml-4 text-xl whitespace-pre-line text-p-white">{t("Nebula")}</span>
        </a>
        <div  className="flex flex-col md:flex-row">
            <nav  className="flex flex-wrap items-center text-center justify-center pb-2 md:pb-0">
                <a target="_blank"  className="mr-5 text-xl cursor-pointer whitespace-pre-line text-color-red">{t("header_products")}</a>
                <a target="_blank"  className="mr-5 text-xl cursor-pointer whitespace-pre-line text-color-red">{t("header_about")}</a>
                <a href="components/form" className="mr-5 text-xl cursor-pointer whitespace-pre-line text-color-red">{t("header_contact")}</a>
            </nav>
            <div  className="flex flex-row justify-center pb-2 md:pb-0">
            <button className="mr-5 text-xl cursor-pointer border-b border-transparent hover:border-indigo-600 whitespace-pre-line text-color-cian" onClick={() => changeLanguage('en')} disabled={language === 'en'}>En</button>
            <button className="mr-5 text-xl cursor-pointer border-b border-transparent hover:border-indigo-600 whitespace-pre-line text-color-cian" onClick={() => changeLanguage('es')} disabled={language === 'es'}>Es</button>
            </div>
        </div>
    </div>
</section>

  );
};

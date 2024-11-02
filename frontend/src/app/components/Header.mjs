"use client";
import Image from "next/image";
import { useLanguage } from "../context/LenguajeContext.js";
import { useTranslation } from "react-i18next"; 
import "../globals.css";

export default function Header() {
  const { changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
<div className="w-full text-p-gray-700 shadow bg-p-truegray-800">
    <div  className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <nav  className="flex lg:w-1/5 flex-wrap justify-center text-center md:ml-auto">
            <a pazly-editable="innerHTML href clone" target="_blank"  className="mr-5 text-xl cursor-pointer border-b border-transparent hover:border-indigo-600 text-p-white whitespace-pre-line">{t("header_about")}</a>
            <a pazly-editable="innerHTML href clone" target="_blank"  className="mr-5 text-xl cursor-pointer border-b border-transparent hover:border-indigo-600 text-p-white whitespace-pre-line">{t("header_products")}</a>
        </nav>
        <a pazly-editable="href"  className="flex order-first lg:order-none lg:w-2/5 title-font font-medium items-center text-p-gray-900 lg:items-center lg:justify-center px-2 mb-4 md:mb-0"> 
            <div  className="m-2 w-16 h-16 rounded-md shadow-lg bg-p-red-50 flex justify-center items-center transform rotate-45 overflow-hidden">
            <Image  priority 
                    pazly-editable="src child"
                    width={80} 
                    height={80} 
                    className="object-fill h-auto w-auto transform -rotate-45 scale-150" 
                    alt="logo" 
                    src="/images/logo-inv.png"/>
          </div>
            <span pazly-editable="innerHTML child"  className="ml-3 text-xl whitespace-pre-line text-p-white">Nebula Tek</span>
        </a>
        <nav  className="flex lg:w-1/5 flex-wrap justify-center text-center md:ml-auto">
            <div>
            <a pazly-editable="innerHTML href clone" target="_blank"  className="text-xl cursor-pointer border-b border-transparent hover:border-indigo-600 text-p-white whitespace-pre-line">{t("header_contact")}</a>
            <button pazly-editable="innerHTML href clone" className="mr-5 text-xl cursor-pointer border-b border-transparent hover:border-indigo-600 text-p-white whitespace-pre-line" onClick={() => changeLanguage('en')}>En</button>
            <button pazly-editable="innerHTML href clone" className="mr-5 text-xl cursor-pointer border-b border-transparent hover:border-indigo-600 text-p-white whitespace-pre-line" onClick={() => changeLanguage('es')}>Es</button>
            </div>

        </nav>
    </div>
    </div>
  );
};

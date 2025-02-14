"use client";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
// import { useLanguage } from "../context/LenguajeContext.js";
import "./globals.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center">
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Contenedor con título a la izquierda e imagen a la derecha */}
        <div className="mt-14 px-10 mb-8 w-full flex flex-col md:flex-row items-center">
          {/* Título a la izquierda */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <h1 className="text-5xl font-gilroy-bold text-p-white text-center md:text-left">
              {t('page_title')}
            </h1>
          </div>

          {/* Imagen a la derecha */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end px-6">
            <Image 
              alt="logo-w-b.svg" 
              width={400}  
              height={400} 
              className=""  
              // className="hover:scale-110 transition-transform duration-300 ease-in-out"  
              src="/images/portada-1.svg"
            />
          </div>
        </div>

        {/* Contenido centrado debajo */}
        <div className="w-full flex flex-col items-center text-center px-6 mt-6">
          <p className="text-p-white font-gilroy-light">
            {t('page_text')}
          </p>
          <a className="font-gilroy0light text-center mt-10 font-bold px-6 py-4 rounded-xl border border-gray-500 hover:cursor-pointer text-color-blue bg-color-yellow"
             onClick={() => window.open("https://calendly.com/ip-weproject")}>
            {t('book_consultation')}
          </a>
        </div>

      </section>
    </div>
  );
}


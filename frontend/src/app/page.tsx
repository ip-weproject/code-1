"use client";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
// import { useLanguage } from "../context/LenguajeContext.js";
import "./globals.css";

export default function Home() {
  
  const { t } = useTranslation();
  return (
<div id="" className="">

<div className="">
   <section className="w-full body">
        <div  className="w-full flex flex-col">

            <div  className="w-full container mx-auto md:px-24 px-2 md:text-left text-center pb-6 pt-12 flex flex-col justify-center items-center">
                <Image  alt="image-1" 
                        width={200}  
                        height={200} 
                        className="pb-20 inline-flex mb-4 hover:scale-110 transition-transform duration-300 ease-in-out"  
                        src="/images/logo1.1.svg"
                        />
                        <div  className="w-full mb-4 py-2">
                        <h1 className="w-full whitespace-pre-line text-5xl font-gilroy-bold text-center text-p-white">{t('page_title')}
                        </h1>
                        </div>
                        <p className="w-full mb-8 leading-relaxed whitespace-pre-line font-gilroy-light text-center text-p-white">{t('page_text')}
                        </p>
                <div  className="w-full flex md:flex-row flex-col justify-center pb-6">
                    <a  className="mx-1 font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl  text-p-gray-200 border border-gray-500 hover:cursor-pointer whitespace-pre-line" onClick={() => window.open("https://calendly.com/ip-weproject")}>{t('book_consultation')}</a>
                    {/* <a  className="mx-1 font-bold px-6 py-4 rounded-xl hover:cursor-pointer outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl  border border-gray-500  text-p-gray-200" onClick={() => window.open("https://calendly.com/ip-weproject")}>{t('lets_talk')}</a> */}
                </div>
            </div>
        </div>
    </section>
    </div>

    </div>
  );
}

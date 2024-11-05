"use client";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
// import { useLanguage } from "../context/LenguajeContext.js";
import "./globals.css";

export default function Home() {
  
  const { t } = useTranslation();
  return (
<div id="" className="">

<div className="m-0 p-0">
    <section className="w-full bg-p-truegray-800">
        <div  className="w-full flex flex-col">

            <div  className="w-full container mx-auto md:px-24 px-2 md:text-left text-center py-6 flex flex-col justify-center items-center">
                <Image  alt="image-1" 
                        width={300}  
                        height={300} 
                        className="pt-20 pb-20 inline-flex mb-4"  
                        src="/images/portada-min-svg.svg"
                        />
                        <div  className="w-full mb-4 py-2">
                        <h1 className="w-full whitespace-pre-line text-5xl font-semibold text-center text-p-white">{t('page_title')}
                        </h1>
                        </div>
                        <p className="w-full mb-8 leading-relaxed whitespace-pre-line text-center text-p-white">{t('page_text')}
                        </p>
                <div  className="w-full flex md:flex-row flex-col justify-center pb-6">
                    <a  className="mx-1 font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg text-color-purple bg-p-black whitespace-pre-line" style={{transition:"all .15s ease"}} target="_blank">{t('book_consultation')}</a>
                    <a  className="mx-1 text-color-cian font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-p-black" target="_blank">{t('learn_more')}</a>
                </div>
            </div>
        </div>
    </section>
    </div>

    <section className="w-full bg-p-truegray-800">
        <div  className="flex flex-row flex-wrap container mx-auto justify-center py-4">
            <div  className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-700 bg-p-black">
                <p className="w-full text-center px-6 pt-4 whitespace-pre-line text-color-cian">{t("discover")}</p>
                <div  className="w-full pb-4">
                    <h1 className="w-full font-bold text-5xl my-8 whitespace-pre-line text-color-cian text-center">{t("free_plan")}</h1>
                    <p className="w-full px-8 text-base whitespace-pre-line mb-4 text-p-white text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div  className="w-full pb-4">
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-white"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-white"> ❌ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-white"> ❌ Lorem ipsum dolor sit amet consectetur </div>
                </div>
                <div  className="w-full text-center pt-8 pb-4">
                    <a href="/components/plan-details" className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line bg-p-white">{t("sign_up")}</a>
                </div>
            </div>
    
            <div  className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-100 bg-p-black">
                <p className="w-full text-center px-6 pt-4 whitespace-pre-line text-color-blue">{t("go_pro")}</p>
                <div  className="w-full pb-4">
                    <h1 className="w-full font-bold text-5xl my-8 whitespace-pre-line text-center text-color-blue">{t("pro_price")}</h1>
                    <p className="w-full px-8 text-base whitespace-pre-line mb-4 text-p-white text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div  className="w-full pb-4">
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-white"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-white"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-white"> ❌ Lorem ipsum dolor sit amet consectetur </div>
                </div>
    
                <div  className="w-full text-center pt-8 pb-4">
                    <a href="/components/plan-details"  className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line bg-p-white text-p-black">{t("sign_up")}</a>
                </div>
            </div>
    
            <div  className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-100 bg-p-black" pazly-editable="block bg clone">
                <p className="w-full text-center px-6 pt-4 whitespace-pre-line text-color-red">{t("enterprise_plan")}</p>
                <div  className="w-full pb-4">
                    <h1 className="w-full font-bold text-5xl my-8 whitespace-pre-line text-center text-color-red">{t("lets_talk")}</h1>
                    <p className="w-full px-8 text-base whitespace-pre-line mb-4 text-p-white text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div  className="w-full pb-4">
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-white"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-white"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-white"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                </div>
                <div  className="w-full text-center pt-8 pb-4">
                    <a href="/components/plan-details" className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line bg-p-white text-p-black">{t("learn_more")}</a>
                </div>
            </div>
        </div>
    </section>

    </div>
  );
}

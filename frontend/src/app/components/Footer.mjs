"use client";
import Image from "next/image";
// import { useLanguage } from "../context/LenguajeContext.js";
import { useTranslation } from "react-i18next"; 


export default function Footer() {
    // const { changeLanguage } = useLanguage();
    const { t } = useTranslation(); 

    return (

        <footer className="bg-p-truegray-800">
        <div className="w-full py-8 px-4">
            <div className="mx-auto container overflow-hidden flex flex-col md:flex-row justify-between pb-4 text-center md:text-left">
                <a className="w-full md:w-1/4 flex justify-center items-center p-5" target="_blank" rel="noopener noreferrer">
                    <div className="m-2 w-20 h-20 flex justify-center items-center">
                        <Image
                            width={50}
                            height={50}
                            className="object-fill h-auto w-auto transform"
                            alt="logo"
                            src="/images/Recurso 10.svg"
                        />
                    </div>
                </a>
                <div className="w-full mt-6 md:mt-0 leading-normal">
                    <h4 className="py-2 uppercase font-bold whitespace-pre-line text-p-white">{t("about_nebula_tek")}</h4>
                    <p className="text-lg whitespace-pre-line text-p-white">
                    {t("salesforce_services")}
                    </p>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/4 mt-6 md:mt-0">
                    <h4 className="inline-block py-2 px-3 uppercase font-bold text-center w-full whitespace-pre-line text-p-white">Links</h4>
                    <div className="flex flex-col pl-0 md:pl-4 justify-center items-center w-full">
                        <a href="#" target="_blank" className="flex items-center hover:underline whitespace-pre-line text-lg text-p-blue-200" rel="noopener noreferrer">Facebook</a>
                        <a href="#" target="_blank" className="flex items-center hover:underline whitespace-pre-line text-lg text-p-cyan-200" rel="noopener noreferrer">Twitter</a>
                        <a href="#" target="_blank" className="flex items-center hover:underline whitespace-pre-line text-lg text-p-red-300" rel="noopener noreferrer">YouTube</a>
                    </div>
                </div>
            </div>
            <div className="pt-4 mt-4 text-grey-darker text-xs border-t border-gray-500 text-center">
                <span className="whitespace-pre-line text-p-white">©2024 nebulatek.com All rights reserved.</span>
                <a href="#" target="_blank" className="inline-block py-2 px-3 whitespace-pre-line text-p-white" rel="noopener noreferrer">Privacy statement</a>
                <a href="#" target="_blank" className="inline-block py-2 px-3 whitespace-pre-line text-p-white" rel="noopener noreferrer">Terms of service</a>
                <a href="#" target="_blank" className="inline-block py-2 px-3 whitespace-pre-line text-p-white" rel="noopener noreferrer">Imprint</a>
            </div>
        </div>
    </footer>
)};
"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next"; 

function Products () {
    const { t } = useTranslation(); 

    return ( 
        <section className="">
        <div  className="flex flex-row flex-wrap container mx-auto justify-center pt-16">
            <div  className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-700 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
                <p className="w-full text-center px-6 pt-4 whitespace-pre-line text-p-gray-500">{t("discover")}</p>
                <div  className="w-full pb-4">
                    <h1 className="w-full font-bold text-5xl my-8 whitespace-pre-line text-p-white text-center">{t("free_plan")}</h1>
                    <p className="w-full px-8 text-base whitespace-pre-line mb-4 text-p-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div  className="w-full pb-4">
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ❌ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ❌ Lorem ipsum dolor sit amet consectetur </div>
                </div>
                <div  className="w-full text-center pt-8 pb-4">
                    <a href="/components/plan-details" className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line border border-gray-500 text-p-white">{t("sign_up")}</a>
                </div>
            </div>
    
            <div  className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-500 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
                <p className="w-full text-center px-6 pt-4 whitespace-pre-line text-p-gray-500">{t("go_pro")}</p>
                <div  className="w-full pb-4">
                    <h1 className="w-full font-bold text-5xl my-8 whitespace-pre-line text-center text-p-white">{t("pro_price")}</h1>
                    <p className="w-full px-8 text-base whitespace-pre-line mb-4 text-p-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div  className="w-full pb-4">
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ❌ Lorem ipsum dolor sit amet consectetur </div>
                </div>
    
                <div  className="w-full text-center pt-8 pb-4">
                    <a href="/components/plan-details"  className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line border border-gray-500 text-p-white">{t("sign_up")}</a>
                </div>
            </div>
    
            <div  className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-100 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
                <p className="w-full text-center px-6 pt-4 whitespace-pre-line text-p-gray-500">{t("enterprise_plan")}</p>
                <div  className="w-full pb-4">
                    <h1 className="w-full font-bold text-5xl my-8 whitespace-pre-line text-center text-p-white">{t("lets_talk")}</h1>
                    <p className="w-full px-8 text-base whitespace-pre-line mb-4 text-p-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div  className="w-full pb-4">
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                </div>
                <div  className="w-full text-center pt-8 pb-4">
                    <a href="/components/plan-details" className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line border border-gray-500 text-p-white">{t("learn_more")}</a>
                </div>
            </div>
        </div>
    </section>
     );
}

export default Products;
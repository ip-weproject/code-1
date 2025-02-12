"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next"; 

function Products () {
    const { t } = useTranslation(); 

    return ( 
        <section className="">
        
        <div  className="flex flex-row flex-wrap container mx-auto justify-center pt-16">
        <div className="mb-8 leading-relaxed justify-center text-p-white">
             {t('about_services')}
        </div>
            <div  className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-700 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
                <p className="w-full font-bold text-3xl my-8 whitespace-pre-line text-p-yellow text-center">{t("plan_1")}</p>
                <div  className="w-full pb-4">
                    <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-white  text-center">{t("plan_1_title")}</h1>
                    <p className="w-full px-8 text-base whitespace-pre-line mb-4 text-p-gray-500 text-center">{t("plan_1_description")} </p>
                </div>
                {/* <div  className="w-full pb-4">
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ✅ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ❌ Lorem ipsum dolor sit amet consectetur </div>
                    <div className="w-full px-8 py-1 contianer mx-auto flex items-center text-p-gray-500"> ❌ Lorem ipsum dolor sit amet consectetur </div>
                </div> */}
                <div  className="w-full text-center pt-8 pb-4">
                    <a href="/components/plan-details" className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line border border-gray-500 text-p-white">{t("learn_more")}</a>
                </div>
            </div>

            <div  className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-700 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
                <p className="w-full font-bold text-3xl my-8 whitespace-pre-line text-p-yellow text-center">{t("plan_2")}</p>
                <div  className="w-full pb-4">
                    <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-white  text-center">{t("plan_2_title")}</h1>
                    <p className="w-full px-8 text-base whitespace-pre-line mb-4 text-p-gray-500 text-center">{t("plan_2_description")} </p>
                </div>
                <div  className="w-full text-center pt-8 pb-4">
                    <a href="/components/plan-details" className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line border border-gray-500 text-p-white">{t("learn_more")}</a>
                </div>
            </div>

            <div  className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-700 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
                <p className="w-full font-bold text-3xl my-8 whitespace-pre-line text-p-yellow text-center">{t("plan_3")}</p>
                <div  className="w-full pb-4">
                    <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-white  text-center">{t("plan_3_title")}</h1>
                    <p className="w-full px-8 text-base whitespace-pre-line mb-4 text-p-gray-500 text-center">{t("plan_3_description")} </p>
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
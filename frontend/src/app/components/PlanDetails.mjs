"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next"; 

function PlanDetails () {
    const { t } = useTranslation();
    return ( 

    <section className="mt-28 w-full">
    <div  className="w-full pt-8 pb-8">
        <div  className="container mx-auto flex lg:flex-row flex-col items-center">
            <div  className="lg:w-5/12 w-10/12 lg:pl-20">
                 <Image  priority 
                     pazly-editable="src child"
                     width={330} 
                     height={330} 
                     className="transform" 
                     alt="logo" 
                     src="/images/logo1.1b.svg"/>
            </div>
            <div  className="w-full md:w-10/12 lg:w-6/12 lg:pr-4">
                <h1 className="title-font text-lg mb-6 mt-2 px-12 text-white font-semibold whitespace-pre-line">{t("building_websites")}</h1>
                <div  className="flex flex-col">
                    <div  className="w-full px-8">
                        <div  className="relative flex flex-col min-w-0">
                            <div  className="px-4 py-5 flex-auto text-white">
                                <h2 className="text-lg mb-1 font-semibold whitespace-pre-line">⚡ {t("fast_and_easy")}</h2>
                                <p className="mb-4 whitespace-pre-line">{t("compose_layouts")}</p>
                            </div>
                        </div>
                    </div>
                    <div  className="w-full px-8">
                        <div  className="relative flex flex-col min-w-0">
                            <div  className="px-4 py-5 flex-auto text-white">
                                <h2 className="text-lg mb-1 font-semibold whitespace-pre-line">🌱{t("growing_integrations")} </h2>
                                <p className="mb-4 whitespace-pre-line">{t("lokis_pro_integrations")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="text-md font-light mt-6 lg:mt-12 text-center px-4 w-full flex flex-col md:flex-row justify-center ">
            <a href=""  className="mx-1 font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg text-p-gray-200 border border-gray-500  whitespace-pre-line" onClick={() => window.open("https://calendly.com/ip-weproject")}>{t("build_website")}</a>
            <a href="/components/products"  className="mx-1 font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg text-p-gray-200 border border-gray-500  whitespace-pre-line">{t("back_to_plans")}</a>
        </div>
    </div>
</section>
     );
}

export default PlanDetails;
"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next"; 

function PlanDetails () {
    const { t } = useTranslation();
    return ( 

    <section className="w-full bg-p-truegray-100">
    <div  className="w-full pt-8 pb-8 border-y">
        <div  className="container mx-auto flex lg:flex-row flex-col items-center">
            <div  className="lg:w-6/12 w-10/12 lg:pl-4">
                 <Image  priority 
                     pazly-editable="src child"
                     width={730} 
                     height={430} 
                     className="transform " 
                     alt="logo" 
                     src="/images/agency.jpg"/>
            </div>
            <div  className="w-full md:w-10/12 lg:w-6/12 lg:pr-4">
                <h1 className="title-font text-lg mb-6 mt-2 px-12 text-p-gray-700 font-semibold whitespace-pre-line">{t("building_websites")}</h1>
                <div  className="flex flex-col">
                    <div  className="w-full px-8">
                        <div  className="relative flex flex-col min-w-0">
                            <div  className="px-4 py-5 flex-auto text-p-gray-700">
                                <h2 className="text-lg mb-1 font-semibold whitespace-pre-line">⚡ {t("fast_and_easy")}</h2>
                                <p className="mb-4 whitespace-pre-line">{t("compose_layouts")}</p>
                            </div>
                        </div>
                    </div>
                    <div  className="w-full px-8">
                        <div  className="relative flex flex-col min-w-0">
                            <div  className="px-4 py-5 flex-auto text-p-gray-700">
                                <h2 className="text-lg mb-1 font-semibold whitespace-pre-line">🌱{t("growing_integrations")} </h2>
                                <p className="mb-4 whitespace-pre-line">{t("nebula_pro_integrations")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="text-md font-light mt-6 lg:mt-12 text-center px-4 w-full flex flex-col md:flex-row justify-center ">
            <a href=""  className="text-p-white font-bold px-6 py-4 rounded outline-none focus:outline-none mx-2 lg:mx-6 mb-4 uppercase text-sm shadow hover:shadow-lg bg-color-blue whitespace-pre-line">{t("build_website")}</a>
            <a href="/"  className="text-p-white font-bold px-6 py-4 rounded outline-none focus:outline-none mx-2 lg:mx-6 mb-4 uppercase text-sm shadow hover:shadow-lg bg-color-purple whitespace-pre-line">{t("back_to_plans")}</a>
        </div>
    </div>
</section>
     );
}

export default PlanDetails;
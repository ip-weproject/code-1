"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";

function Services() {
  const { t } = useTranslation();

  return (
    <section className="w-full font-gilroy-bold text-color-1 bg-color-2 pt-16 px-5">
      <div className="flex flex-row flex-wrap justify-center bg-color-2 py-16">

        <p className="w-full text-4xl px-20 md:text-6xl my-8 whitespace-pre-line text-color-1 text-end justify-center">
          {t("services_header")}
        </p>
        <p className="font-gilroy-light text-color-1 md:text-2xl px-20 pb-16 leading-relaxed text-end justify-center">
          {t("services_1")}
        </p>
        <p className="w-full font-gilroy-semibold large-font-size px-20 pb-4 leading-relaxed text-center justify-center">
          {t("services_2")}
        </p>
        
        {/* Contenedor flex con altura completa y alineado al centro */}
        <div className="w-full flex items-center justify-center">
          <section className="w-full flex flex-row justify-center items-stretch gap-10 px-10">
            {["plan_1", "plan_2", "plan_3"].map((plan, index) => (
              <div key={index} className="w-1/3 flex">
                <div className="w-full bg-gradient-1 rounded-3xl py-6 px-8 shadow-[15px_15px_0px_0px_black] flex flex-col flex-grow justify-between min-h-[400px]">
                
                  <p className="w-full font-gilroy-bold text-3xl mt-4 text-center">
                    {t(plan)}
                  </p>
                  <p className="font-gilroy-medium text-lg text-start">
                    {t(`${plan}_title`)}
                  </p>

                  <p className="font-gilroy-regular text-sm text-justify">
                    {t(`${plan}_aim`)}<br/>{t(`${plan}_description`)}
                  </p>
                  <p className="self-center font-gilroy-light text-sm bg-color-4 rounded-full px-4 py-2">
                    {t(`${plan}_duration`)}
                  </p>

                </div>
              </div>
            ))}
          </section>
        </div>


      </div>
    </section>
  );
}

export default Services;

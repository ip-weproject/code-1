"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

function Services() {
  const { t } = useTranslation();

  return (
    <section className="w-full font-gilroy-bold text-color-1 bg-color-2 pt-0 md:pt-16 md:px-5">
      <div className="flex flex-row flex-wrap justify-center bg-color-2 py-16">

        <p className="w-full mx-10 md:mx-0 px-96 md:px-20 text-3xl md:text-6xl my-8 whitespace-pre-line text-color-1 text-end justify-center">
          {t("services_header")}
        </p>
        <p className="font-gilroy-light text-color-1 mx-10 md:mx-0 md:text-2xl px-96 md:px-20 pb-16 leading-relaxed text-end justify-center">
          {t("services_1")}
        </p>
        <p className="w-full font-gilroy-semibold text-1xl md:text-3xl px-96 md:px-20 pb-4 text-center justify-center">
          {t("services_2")}
        </p>
        
        {/* Contenedor flex con altura completa y alineado al centro */}
        <div className="w-full flex items-center justify-center px-96 md:px-0">
          <section className="w-full flex md:flex-row flex-col justify-center items-stretch gap-10 px-10">
            {["plan_1", "plan_2", "plan_3"].map((plan, index) => (
              <div key={index} className="w-full md:w-1/3 flex">
                <div className="w-full h-full rounded-3xl bg-gradient-1 border shadow-[15px_15px_0px_0px_black] flex flex-col justify-between">

                  {/* Contenedor flex para dividir en dos secciones (superior e inferior) */}
                  <div className="flex w-full flex-col h-full">

                    <div className="flex flex-row h-60 bg-gradient-1 rounded-t-3xl">
                    {/* Parte superior con imagen SVG usando Image de Next.js */}

                    <div className="flex flex-row justify-center w-full px-4 rounded-t-3xl py-4 relative bg-gradient-1">
                      <Image
                        src={t(`/images/${plan}.svg`)} // Ruta a tu imagen SVG
                        alt="Imagen plan"
                        width={200}
                        height={120}
                        objectFit="cover" // Asegura que la imagen cubra el área
                        className="bg-gradient-1" // Para asegurar que tenga bordes redondeados
                      />
                      </div>
                    </div>

                    {/* Parte inferior (contenido del plan) */}
                    <div className="flex flex-col justify-evenly w-full h-80 p-4 bg-white rounded-b-3xl">
                    <p className="font-gilroy-bold text-3xl mb-4 text-start z-10">
                        {t(plan)}
                      </p>
                      <p className="font-gilroy-medium text-lg text-start">
                        {t(`${plan}_title`)}
                      </p>

                      <p className="font-gilroy-regular text-sm text-justify">
                        {t(`${plan}_aim`)}
                      </p>
                      <div className="flex flex-row">
                      <span className="self-center font-gilroy-light text-sm bg-color-3 text-white rounded-full px-4 mr-3 py-2">
                        {t(`${plan}_duration`)}
                      </span>

                        <span className="self-center font-gilroy-light text-sm bg-color-4 text-white rounded-full px-4 mr-3 py-2">
                        {t(`${plan}_duration_info`)} {/* Información adicional sobre la duración */}
                      </span>
                      </div>
                    </div>

                  </div>


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

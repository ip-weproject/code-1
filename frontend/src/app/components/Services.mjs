"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";

function Services() {
  const { t } = useTranslation();

  return (
    <section className="font-albert-semibold text-color-1 mt-10">
      <div className="flex flex-row flex-wrap container mx-auto justify-center pt-16">
        <p className="w-full text-4xl px-20 md:text-6xl my-8 whitespace-pre-line text-color-3 text-center justify-center">
          {t("services_header")}
        </p>
        <div className="text-center font-albert-regular regular-font-size px-10 mt-8 mb-8 leading-relaxed justify-center">
          {t("services_1")}
        </div>
        <div className="w-full text-center font-albert-semibold regular-font-size px-10 mb-8 leading-relaxed justify-center">
          {t("services_2")}
        </div>

        {/* Tarjetas con efecto de giro */}
        {["plan_1", "plan_2", "plan_3"].map((plan, index) => (
          <div key={index} className="card-container">
            <div className="card">
              {/* Cara frontal */}
              <div className="card-front">
                <p className="w-full font-albert-semibold medium-font-size my-8 whitespace-pre-line text-color-3 text-center">
                  {t(plan)}
                </p>
                <h1 className="w-full font-albert-regular standard-font-size my-8 px-8 text-center">
                  {t(`${plan}_title`)}
                </h1>
                <h1 className="w-full font-albert-semibold standard-font-size my-8 px-8 whitespace-pre-line text-center">
                  {t(`${plan}_duration`)}
                </h1>
              </div>

              {/* Cara trasera */}
              <div className="card-back">
                <p className="font-albert-semibold small-font-size text-center mt-4 px-8 py-2 text-color-1">
                  {t(`${plan}_aim`)}
                </p>
                <p className="font-albert-regular small-font-size text-center mt-4 px-8 py-2 text-color-1">
                  {t(`${plan}_description`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

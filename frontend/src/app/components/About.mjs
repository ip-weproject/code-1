"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24 px-40 bg-color-2">
      <div className="w-full bg-color-2">
          <div className="py-10">
            <p className="font-gilroy-bold text-4xl md:text-6xl mx-10 md:my-8 text-color-1 text-start">
            {t("about_header")}</p>
           
            <p className="font-gilroy-light text-color-1 md:text-2xl px-10 justify-center mt-8">
              {t("about_description_2")}
            </p>
            <p className="font-gilroy-light text-color-1 md:text-2xl px-10 justify-center">
              {t("about_description_1")}
            </p>
          </div>

          <div className="w-full h-full rounded-3xl bg-gradient-1 border shadow-[15px_15px_0px_0px_black] flex flex-col justify-between">
          <div className="bg-white h-20 rounded-t-3xl">
            <p className="text-center font-gilroy-bold text-color-1 medium-font-size pt-5 px-10 leading-relaxed justify-center">
              {t("certifications")}
            </p>
        </div>
          <div className="grid grid-cols-2 gap-6 px-10 md:flex md:flex-row py-16 md:px-30 md:justify-center">
          <Image
            priority
            width={100}
            height={100}
            alt="logo"
            src="/images/cert-admin.png"
            className="w-24 md:w-32 h-auto mx-auto"
          />
          <Image
            priority
            width={100}
            height={100}
            alt="logo"
            src="/images/cert-app-builder.png"
            className="w-24 md:w-32 h-auto mx-auto"
          />
          <Image
            priority
            width={100}
            height={100}
            alt="logo"
            src="/images/cert-business-analyst.png"
            className="w-24 md:w-32 h-auto mx-auto"
          />
          <Image
            priority
            width={100}
            height={100}
            alt="logo"
            src="/images/cert-ai-specialist.png"
            className="w-24 md:w-32 h-auto mx-auto"
          />
        </div>
        </div>
        </div>
    </section>
  );
}

export default About;

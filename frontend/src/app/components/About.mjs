"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24 bg-color-2">
      <div className="w-full bg-color-2">
          <div className="mx-20 py-10">
            <p className="font-gilroy-bold text-4xl md:text-6xl mx-10 md:my-8 text-color-1 text-start">
            {t("about_header")}</p>
           
            <p className="font-gilroy-light text-color-1 md:text-2xl px-10 justify-center mt-8">
              {t("about_description_2")}
            </p>
            <p className="font-gilroy-light text-color-1 md:text-2xl px-10 justify-center">
              {t("about_description_1")}
            </p>
            <p className="text-center font-mona-semibold text-color-1 medium-font-size px-10 mt-20 leading-relaxed justify-center">
              {t("certifications")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 px-20 md:flex md:flex-row md:px-80 md:justify-center">
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
    </section>
  );
}

export default About;

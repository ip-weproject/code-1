"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="font-albert-semibold about-section py-12">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="p-6">
            <p className="font-bold text-4xl md:text-6xl mx-10 md:my-8 whitespace-pre-line text-color-3 text-center">
            {t("about_header")}
       
            </p>
           
             <p className="text-center font-albert-semibold text-color-1 regular-font-size px-10 mt-8 mb-8 leading-relaxed justify-center">
              {t("about_description_2")}
            </p>
            <p className="text-center font-mona-regular regular-font-size text-color-1 px-10 mt-8 mb-8 leading-relaxed justify-center">
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
      </div>
    </section>
  );
}

export default About;

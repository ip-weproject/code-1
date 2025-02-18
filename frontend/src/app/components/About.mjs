"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="font-fredoka-semibold about-section py-12">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
         
          <div className="p-6">
          <p className="w-full font-bold text-4xl my-8 whitespace-pre-line text-p-lightgray text-center">
            {t("meet_osa")}
          </p>
              <p className="regular-font-size font-fredoka-bold text-center text-p-red">{t("page_text_1")}</p>
            <p className="regular-font-size font-fredoka-medium text-white mt-4">
              {t("about_us")}
            </p>
           
          </div>
          <div className="flex justify-center gap-4">
              <Image
                priority
                width={150}
                height={150}
                alt="logo"
                src="/images/cert-admin.png"
              />
              <Image
                priority
                width={150}
                height={150}
                alt="logo"
                src="/images/cert-app-builder.png"
              />
              <Image
                priority
                width={150}
                height={150}
                alt="logo"
                src="/images/cert-ai-specialist.png"
              />
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;

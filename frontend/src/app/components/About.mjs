"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="font-mona-semibold about-section py-12">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="p-6">
            <p className="font-bold text-4xl my-8 whitespace-pre-line text-color-4 text-center">
            {t("about_header")}
              {/* <span className="text-color-4">{t("optimize")}</span>
              <span className="">{t("about_header_1")}</span>
              <span className="">{t("about_header_2")}</span>
              <span className="text-color-4">{t("service")}</span>
              <span className="">{t("about_header_3")}</span>
              <span className="text-color-4">{t("analytics")}</span>
              <span className="">{t("about_header_4")}</span> */}
            </p>
            {/* <p className="regular-font-size font-mona-semibold text-center text-color-4">
              {t("about_1")}
            </p> */}
            <p className="text-center font-mona-regular regular-font-size text-color-1 px-10 mt-8 mb-8 leading-relaxed justify-center">
              {t("about_description_1")}
            </p>

            <p className="text-center font-mona-semibold text-color-1 regular-font-size px-10 mt-8 mb-8 leading-relaxed justify-center">
              {t("about_description_2")}
            </p>

            <p className="text-center font-mona-semibold text-color-1 medium-font-size px-10 mt-8 mb-8 leading-relaxed justify-center">
              {t("certifications")}
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
              src="/images/cert-business-analyst.png"
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

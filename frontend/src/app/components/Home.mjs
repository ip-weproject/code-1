"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../globals.css";
import Image from "next/image";

function Start() {
  const { t } = useTranslation();

  return (
    <section className="bg-color-2 w-full h-full px-32 flex flex-row justify-center">
    {/* <div className="font-albert-bold w-full min-h-screen flex justify-center relative z-0 bg-[url('/images/portada1.jpg')] bg-cover bg-center bg-no-repeat after:content-[''] after:absolute after:inset-0 after:bg-black/60 after:z-[-1]"> */}

      <div className="w-1/2 max-w-6xl mx-auto flex flex-col mt-14 md:mt-16">
        {/* Encabezado: Título e imagen */}

        <div className="w-full mt-10 md:mt-5">
        <div className="font-gilroy-bold text-6xl text-color-1 mt-20 md:mt-15 md:px-18 text-start">
          {t("home_title")}
        </div>

        </div>
        <div className="w-full flex justify-center mt-4 md:mt-4">
          <span className="font-gilroy-light text-color-1 md:text-2xl text-start mt-2 md:mt-0">
            {t("home_text_1")}
          </span>
        </div>
        {/* Botón de consulta */}
        <div className="flex flex-col items-start w-auto text-start md:mt-10 mt-2 mb-12 lg:mt-2">
        <a className="consultation-btn mt-10 px-6 py-4 rounded-full text-lg font-gilroy-regular text-color-1 hover:consultation-btn transition-all duration-300"
        onClick={() => window.open("https://calendly.com/ip-weproject")}>
        {t("book_consultation")}
      </a>


        </div>
      </div>
      <div className="w-1/2 mt-6 flex align-middle justify-end">
                <Image
                priority
                width={500}
                height={500}
                className="flex"
                alt="logo"
                src="/images/green-box-home.svg"
                />
      </div>
    </section>
  );
}

export default Start;

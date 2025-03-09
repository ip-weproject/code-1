"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../globals.css";

function Start() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen flex section-background justify-center">
      <section className="font-fredoka-semibold w-full max-w-6xl mx-auto flex flex-col mt-14 md:mt-20 lg:mt-40">
        {/* Encabezado: Título e imagen */}

        <div className="w-full mt-5">
          <h1 className="text-8xl md:text-5xl font-fredoka-bold text-p-red text-center">
            {t("page_title")}
          </h1>
        </div>
        <div className="w-full flex justify-center mt-10 md:mt-8 lg:mt-6">
          <h1 className="text-xl md:text-4xl font-fredoka-bold text-p-lightgray text-center mt-10">
            {t("page_text_2")}
          </h1>
        </div>
        {/* Botón de consulta */}
        <div className="w-full flex flex-col items-center text-center mt-10 md:mt-2 lg:mt-2">
          <a
            className="font-fredoka-bold mt-10 px-6 py-4 rounded-xl hover:cursor-pointer text-color-blue bg-yellow transition-all duration-300"
            onClick={() => window.open("https://calendly.com/ip-weproject")}
          >
            {t("book_consultation")}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Start;

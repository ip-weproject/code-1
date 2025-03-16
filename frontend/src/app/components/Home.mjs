"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../globals.css";

function Start() {
  const { t } = useTranslation();

  return (
    <div className="font-albert-bold w-full min-h-screen flex home-background justify-center">
      <section className=" w-full max-w-6xl mx-auto flex flex-col mt-14 md:mt-20 lg:mt-40">
        {/* Encabezado: Título e imagen */}

        <div className="w-full mt-10 md:mt-5">
        <h1 className="text-4xl mt-20 px-18 text-color-5 text-center md:text-7xl ">
          {t("home_title")}
        </h1>

        </div>
        <div className="w-full flex justify-center mt-10 md:mt-8 lg:mt-6">
          <h1 className="font-albert-semibold  md:text-2xl text-color-2 text-center mt-10">
            {t("home_text_1")}
          </h1>
        </div>
        {/* Botón de consulta */}
        <div className="w-full flex flex-col items-center text-center md:mt-10 mt-2 lg:mt-2">
          <a
            className=" mt-10 px-6 py-4 rounded-xl hover:cursor-pointer  text-color-2 bg-color-3 hover:bg-color-1 transition-all duration-300"
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

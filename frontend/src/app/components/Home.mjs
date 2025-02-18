"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../globals.css";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen flex section-background justify-center">
      <section className="font-fredoka-semibold w-full max-w-6xl mx-auto flex flex-col mt-14 md:mt-20 lg:mt-40">
        {/* Encabezado: Título e imagen */}
        <div className="px-10 mb-8 w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <h1 className="text-8xl md:text-5xl font-fredoka-bold text-p-red text-center md:text-left">
              {t("page_title")}
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end px-6">
            {/* Puedes insertar una imagen aquí si lo deseas */}
            {/* <Image
              alt="logo"
              width={400}
              height={400}
              className="imagen-portada"
              src="/images/robot.png"
            /> */}
          </div>
        </div>
        {/* Texto adicional */}
        <div className="w-full flex items-start mt-8 md:mt-8 lg:mt-6">
          <h1 className="text-xl md:text-3xl font-fredoka-bold text-p-yellow">
            {t("page_text_2")}
          </h1>
        </div>
        {/* Botón de consulta */}
        <div className="w-full flex flex-col items-center text-center mt-2 md:mt-2 lg:mt-2">
          <a className="font-fredoka-bold mt-10 px-6 py-4 rounded-xl hover:cursor-pointer text-color-blue bg-yellow transition-all duration-300"
            onClick={() => window.open("https://calendly.com/ip-weproject")}>
            {t("book_consultation")}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;

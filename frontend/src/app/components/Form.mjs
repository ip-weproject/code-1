"use client";
import Image from "next/image";
import "../globals.css";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();

  return (
    <section className="font-gilroy-semibold md:px-20 px-96 pt-16 mt-32 md:pt-0 md:mx-0 mx-10 pb-10 md:py-40 py-0 flex flex-col lg:flex-row items-center bg-color-2">
      {/* Texto a la derecha */}
      <div className="lg:w-2/3 w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:px-10 mt-6 lg:mt-0">
        <h1 className="font-gilroy-bold text-4xl md:text-6xl text-color-1 mb-4">
          {t("form_lets_talk")}
        </h1>
        <p className="mb-4 leading-relaxed font-gilroy-light text-color-1 md:text-2xl text-start">
          {t("about_us_form")}
        </p>
        <div className="font-gilroy-bold md:mb-0 mb-8 text-color-1">{t("form_keep_in_touch")}</div>
      </div>

      {/* Formulario a la izquierda */}
      <div className="md::w-1/1 md:w-full md:flex md:justify-center">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col lg:w-5/6 w-full rounded-lg"
        >
          <input type="hidden" name="form-name" value="contact" />
          <textarea
            name="message"
            className="focus:outline-none mb-4 py-3 px-3 rounded-lg resize-none border-2 border-solid border-black"
            rows="5"
            placeholder={t("form_message_placeholder")}
          ></textarea>

          <div className="flex flex-col md:flex-row md:justify-between md:mb-4">
            <input
              className="flex-grow bg-white focus:outline-none px-4 md:h-14 h-10 md:w-full my-2 md:ml-0 pl-4 rounded-lg border-2 border-solid border-black"
              placeholder={t("form_name")}
              name="name"
              type="text"
              required
            />
            <input
              className="flex-grow bg-white focus:outline-none h-10 md:w-full md:h-14 md:my-2 md:ml-5 pl-4 rounded-lg border-2 border-solid border-black"
              placeholder={t("form_company")}
              name="company"
              type="text"
              required
            />
          </div>

          <div className="flex flex-row my-2 md:my-0 justify-between h-10 md:h-14">
            <input
              className="flex-grow bg-white px-4 m-0 rounded-lg focus:outline-none border-2 border-solid border-black"
              placeholder={t("form_email")}
              name="email"
              type="email"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center text-p-blue font-gilroy-regular ml-5 px-3 focus:outline-none text-color-1 text-lg rounded-lg consultation-btn hover:consultation-btn transition-all duration-300 standard-font-size ease-in-out"
            >
              {t("form_send_message")}
            </button>

          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;

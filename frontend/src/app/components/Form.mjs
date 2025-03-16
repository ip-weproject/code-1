"use client";
import Image from "next/image";
import "../globals.css";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();

  return (
    <section className="font-albert-semibold px-20 py-20 flex flex-col lg:flex-row items-center">
      {/* Texto a la derecha */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:px-10 mt-6 lg:mt-0">
        <h1 className="text-6xl text-color-3 mb-4">
          {t("form_lets_talk")}
        </h1>
        <p className="mb-4 leading-relaxed font-albert-regular regular-font-size text-color-1">
          {t("about_us_form")}
        </p>
        <div className="regular-font-size text-color-1">{t("form_keep_in_touch")}</div>
      </div>

      {/* Formulario a la izquierda */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col lg:w-5/6 w-full rounded-lg "
        >
          <input type="hidden" name="form-name" value="contact" />
          <textarea
            name="message"
            className="focus:outline-none mb-4 py-3 px-3 rounded-lg resize-none"
            // className="focus:outline-noneborder-gray-300 mb-4 py-2 px-3 rounded-lg md:bg-[url('/images/dot.svg')] bg-repeat bg-[size:6px_6px] placeholder:text-xl"
            rows="5"
            placeholder={t("form_message_placeholder")}
          ></textarea>

          <div className="flex flex-row justify-between mb-4">
            <input
              className="flex-grow bg-white focus:outline-none py-4 px-4 m-0 rounded-lg"
              placeholder={t("form_name")}
              name="name"
              type="text"
              required
            />
            <input
              className="flex-grow bg-white focus:outline-none w-full ml-5 pl-4 rounded-lg"
              placeholder={t("form_company")}
              name="company"
              type="text"
              required
            />
          </div>

          <div className="flex flex-row justify-between h-14">
            <input
              className="flex-grow bg-white focus:outline-none px-4 m-0 rounded-lg"
              placeholder={t("form_email")}
              name="email"
              type="email"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center text-p-blue font-semibold ml-5 px-3 focus:outline-none text-color-2 text-lg rounded-lg bg-color-3 hover:bg-color-1 transition-all duration-300 standard-font-size ease-in-out"
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

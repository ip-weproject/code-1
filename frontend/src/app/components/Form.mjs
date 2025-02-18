"use client";
import Image from "next/image";
import "../globals.css";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();

  return (
    <section className="font-fredoka-semibold px-20 py-20 text-p-gray-700 flex flex-col lg:flex-row items-center">
      {/* Texto a la derecha */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:px-10 mt-6 lg:mt-0">
        <h1 className=" font-fredoka-bold  sm:text-5xl text-p-red mb-4">
          {t("form_lets_talk")}
        </h1>
        <p className="mb-4 leading-relaxed regular-font-size text-p-white">
          {t("about_us_form")}
        </p>
        <div className="regular-font-size text-p-white">{t("form_keep_in_touch")}</div>
      </div>

      {/* Formulario a la izquierda */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col lg:w-3/4 w-full p-2 bg-gray-100 rounded-lg shadow-lg"
        >
          <input type="hidden" name="form-name" value="contact" />
          <textarea
            name="message"
            className="focus:outline-none border-2 border-gray-300 mb-4 py-2 px-3 rounded-lg md:bg-[url('/images/dot.svg')] bg-repeat bg-[size:6px_6px] placeholder:text-xl"
            rows="10"
            placeholder={t("form_message_placeholder")}
          ></textarea>

          <div className="flex flex-row justify-between shadow-lg border-2 border-gray-300">
            <input
              className="flex-grow bg-white focus:outline-none px-4 m-0 rounded-b-lg"
              placeholder={t("form_name")}
              name="name"
              type="text"
              required
            />
            <input
              className="flex-grow bg-white focus:outline-none px-4 m-0 rounded-b-lg"
              placeholder={t("form_company")}
              name="company"
              type="text"
              required
            />
          </div>

          <div className="flex flex-row justify-between shadow-lg border-2 border-gray-300">
            <input
              className="flex-grow bg-white focus:outline-none px-4 m-0 rounded-b-lg"
              placeholder={t("form_email")}
              name="email"
              type="email"
              required
            />
            <button
              type="submit"
              className="inline-flex font-semibold py-2 px-6 focus:outline-none text-md m-0 h-12 hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out"
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

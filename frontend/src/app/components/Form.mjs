"use client";
import Image from "next/image";
import "../globals.css";
import { useTranslation } from "react-i18next"; 

function Form() {
  const { t } = useTranslation();
  return (
    <section className="pt-18 text-p-gray-700 flex lg:flex-row flex-col">
      <div className="lg:w-2/3 lg:px-4 py-6 px-2 flex flex-col lg:items-start lg:text-left items-center text-center ">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-p-white">
        {t('lets_talk')}
        </h1>
        <p className="mb-8 leading-relaxed text-p-white">
        {t('about_us')}
        </p>
        <form
          name="contact" // Nombre del formulario
          method="POST"
          data-netlify="true"
          className="flex flex-col lg:justify-start justify-center w-full p-2 bg-gray-100 rounded-t-lg"
        >
          {/* Campo oculto requerido para que Netlify identifique el formulario */}
          <input type="hidden" name="form-name" value="contact" />
          <textarea
            name="message"
            className="focus:outline-none shadow-lg border-2 border-gray-300 mb-4 py-2 px-3 rounded-t-lg md:bg-[url('/images/dot.svg')] bg-repeat bg-[size:6px_6px] placeholder:text-xl"
            rows="10"
            placeholder={t('form_message_placeholder')}
          ></textarea>
          <div className="flex flex-row justify-between shadow-lg border-2 border-gray-300">
            <input
              className="flex-grow bg-white focus:outline-none px-4 m-0 rounded-b-lg"
              placeholder="Email"
              name="email"
              type="email"
              required
            />
            <button
              type="submit"
              className="inline-flex font-semibold py-2 px-6 focus:outline-none text-md m-0 h-12 hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out"
            >
              {t('form_send_message')}
            </button>
          </div>
        </form>
        <div className="text-sm mt-2 mb-8 w-full text-p-white">
             {t('form_keep_in_touch')}
        </div>
        {/* <div className="flex flex-row">
          <a
            target="_blank"
            className="mx-2 text-p-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-color-white"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            target="_blank"
            className="mx-2 text-p-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-color-white"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            target="_blank"
            className="mx-2 text-p-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-color-white"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            target="_blank"
            className="mx-2 text-p-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-color-white"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div> */}
      </div>
      <div className="flex justify-center lg:w-1/3 w-full items-stretch">
        <Image
          className="object-center flex"
          priority
          width={200}
          height={200}
          alt="form"
          src="/images/logo1.1b.svg"
        />
      </div>
    </section>
  );
}

export default Form;

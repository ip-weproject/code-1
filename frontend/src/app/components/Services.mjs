"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

function Services() {
  const { t } = useTranslation();

  return (
    <section className="font-mona-semibold text-color-1 mt-10">
      <div className="flex flex-row flex-wrap container mx-auto justify-center pt-16">
        <p className="w-full  text-4xl my-8 whitespace-pre-line text-color-3 text-center justify-center">
          {t("services_header")}
        </p>
        <div className="text-center font-mona-regular regular-font-size px-10 mt-8 mb-8 leading-relaxed justify-center">
          {t("services_1")}
        </div>
        <div className="w-full text-center font-mona-semibold regular-font-size px-10 mb-8 leading-relaxed justify-center">
          {t("services_2")}
        </div>
  
        <div className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
          <p className="w-full font-mona-semibold medium-font-size my-8 whitespace-pre-line text-color-4 text-center">
            {t("plan_1")}
          </p>
          <div className="w-full pb-4">
            <h1 className="w-full font-mona-regular standard-font-size my-8 px-8 text-center">
              {t("plan_1_title")}
            </h1>
            <h1 className="w-full font-mona-semibold standard-font-size my-8 px-8 whitespace-pre-line text-center">
              {t("plan_1_duration")}
            </h1>
          
          </div>
          <div className="w-full text-center pt-3 pb-4">
            <Link
              href={{
                pathname: "/plan-details",
                query: { plan: "plan_1", logo: "logo-1" },
              }}
              className="inline-flex px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-lg whitespace-pre-line border border-gray-500"
            >
              {t("learn_more")}
            </Link>
          </div>
        </div>

        <div className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
          <p className="w-full font-mona-semibold medium-font-size my-8 whitespace-pre-line text-color-4 text-center">
            {t("plan_2")}
          </p>
          <div className="w-full pb-4">
            <h1 className="w-full font-mona-regular standard-font-size my-8 px-8 text-center">
              {t("plan_2_title")}
            </h1>
            <h1 className="w-full font-mona-semibold standard-font-size my-8 px-8 whitespace-pre-line text-center">
              {t("plan_2_duration")}
            </h1>

          </div>
          <div className="w-full text-center pt-3 pb-4">
            <Link
              href={{
                pathname: "/plan-details",
                query: { plan: "plan_2", logo: "logo-1" },
              }}
              className="inline-flex px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-lg whitespace-pre-line border border-gray-500"
            >
              {t("learn_more")}
            </Link>
          </div>
        </div>


        <div className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
          <p className="w-full font-mona-semibold medium-font-size my-8 whitespace-pre-line text-color-4 text-center">
            {t("plan_3")}
          </p>
          <div className="w-full pb-4">
            <h1 className="w-full font-mona-regular standard-font-size my-8 px-8 text-center">
              {t("plan_3_title")}
            </h1>
            <h1 className="w-full font-mona-semibold standard-font-size my-8 px-8 whitespace-pre-line text-center">
              {t("plan_3_duration")}
            </h1>

          </div>
          <div className="w-full text-center pt-3 pb-4">
            <Link
              href={{
                pathname: "/plan-details",
                query: { plan: "plan_3", logo: "logo-1" },
              }}
              className="inline-flex px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-lg whitespace-pre-line border border-gray-500"
            >
              {t("learn_more")}
            </Link>
          </div>
        </div>



      </div>
    </section>
  );
}

export default Services;

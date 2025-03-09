"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

function Salesforce() {
  const { t } = useTranslation();

  return (
    <section className="font-fredoka-semibold mt-10">
      <div className="flex flex-row flex-wrap container mx-auto justify-center pt-16">
      {/* <div className="bg-lightgraymd:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-700 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105"> */}
          <h1 className="w-full my-8 px-8 whitespace-pre-line font-fredoka-bold text-6xl text-p-yellow text-center">
            {t("new_salesforce")}
          </h1>
          <h1 className="w-full my-8 px-8 whitespace-pre-line font-fredoka-bold text-4xl text-p-white  text-center">
            {t("discover_salesforce")}
          </h1>
          <Image
            priority
            width={300}
            height={300}
            className="mx-auto mt-10 mb-10"
            alt="logo"
            src="/images/salesforce-with-type-logo.svg"
          />
          <div className="w-full text-center pt-4 pb-4">
             <Link
              href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex font-bold px-6 py-4 font-fredoka-bold rounded outline-none focus:outline-none mr-1 mb-1  text-sm shadow hover:shadow-lg whitespace-pre-line border border-gray-500 text-p-yellow"
            >
              {t("OSA - Oficial partner")}
            </Link>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Salesforce;

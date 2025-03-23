"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

function Salesforce() {
  const { t } = useTranslation();

  return (
    <section className="w-full h-full px-40 py-40 bg-color-2">
      <div className="flex flex-row justify-center bg-color-2">
        <div className="flex flex-col w-1/3 justify-center bg-color-2 text-start">
          <Image
          priority
          width={200}
          height={200}
          className="flex auto mt-10 mb-10"
          alt="logo"
          src="/images/salesforce-with-type-logo.svg"
          />
        </div>
        <div className="flex flex-col justify-center w-2/3">
          <div className="w-full font-gilroy-bold text-4xl md:text-6xl mx-10 my-4 px-8 text-color-1 text-end">
            {t("new_salesforce")}
          </div>
          <div className="w-full my-4 font-gilroy-light text-color-1 md:text-2xl text-end">
            {t("discover_salesforce")}
          </div>
          <div className="text-end mt-4">
          <Link
            href="https://www.salesforce.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full font-gilroy-regular outline-none text-color-2 text-lg mr-1 mb-1 bg-color-4 hover:bg-color-3 transition-all duration-300 font-gilroy-regular">
            {t("official_site")}
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Salesforce;

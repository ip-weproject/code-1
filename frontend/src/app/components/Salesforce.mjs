"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

function Salesforce() {
  const { t } = useTranslation();

  return (
    <section className="font-albert-semibold mt-10">
      <div className="flex flex-row flex-wrap container mx-auto justify-center pt-16">
        <h1 className="w-full my-4 px-8 whitespace-pre-line  text-6xl text-color-3 text-center">
          {t("new_salesforce")}
        </h1>
        <h1 className="w-full my-4 px-8 whitespace-pre-line  text-4xl text-color-2 text-center">
          {t("discover_salesforce")}
        </h1>
        <Image
          priority
          width={200}
          height={200}
          className="mx-auto mt-10 mb-10"
          alt="logo"
          src="/images/salesforce-with-type-logo.svg"
        />
        <div className="w-full text-center pt-2 pb-4">
          <Link
            href="https://www.salesforce.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-bold px-4 py-2  rounded-xl outline-none focus:outline-none mr-1 mb-1  text-sm shadow hover:bg-[#0d9dda] hover:text-color-3 border border-cian-500 text-color-2">
            {t("official_site")}
          </Link>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Salesforce;

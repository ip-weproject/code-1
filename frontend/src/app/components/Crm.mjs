"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

function Crm() {
  const { t } = useTranslation();

  return (
    <section className="w-full h-full mt-20 md:mt-0 mx-10 md:mx-0 px-96 md:px-36 md:py-40 py-0 bg-color-2">
      <div className="flex md:flex-row flex-col-reverse justify-center bg-color-2">
        <div className="flex items-start">
        <Image
              priority
              width={480}
              height={480}
              className="flex auto mb-10"
              alt="logo"
              src="/images/green-box-2.svg"
            />
        </div>
        <div className="flex flex-col items-end w-full md:w-1/2">
          <div className="w-full font-gilroy-bold text-4xl md:text-6xl my-4 text-color-1 text-end">
            {t("new_salesforce")}
          </div>
          <div className="w-full mt-4 pl-20 font-gilroy-light text-color-1 md:text-2xl text-end">
            {t("discover_crm")}
          </div>
          <div className="w-full flex justify-end mt-6 ">
          <Link href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer">
            <Image
              priority
              width={120}
              height={120}
              className="flex mb-10"
              alt="logo"
              src="/images/salesforce-with-type-logo.svg"
            />
          </Link>
          <Link href="https://www.hubspot.com/" target="_blank" rel="noopener noreferrer">
            <Image
              priority
              width={120}
              height={120}
              className="ml-6 flex mt-6"
              alt="logo"
              src="/images/HubSpot_Logo.svg"
            />
          </Link>

            </div>

        </div>
      </div>
    </section>
  );
}

export default Crm;

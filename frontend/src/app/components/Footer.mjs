"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-5 md:px-40 flex flex-col md:flex-row justify-center font-albert-semibold text-color-2 bg-color-1">
      <div className="flex md:flex-row flex-col items-center h-50 md:h-40 justify-between w-full">
        <div className="flex justify-start">
          <Link href="#home" className="flex items-center content-center text-center">
            <div className="w-40 h-20 flex items-center">
              <Image
                width={180}
                height={180}
                className=""
                alt="logo"
                src="/images/logo-h-w.svg"
              />
            </div>
          </Link>

          {/* Logo de Salesforce */}
          <div className="flex items-center">
          <Link href="https://www.salesforce.com" target="_blank" rel="noopener noreferrer">
          <Image
            priority
            width={80}
            height={80}
            alt="Salesforce"
            src="/images/salesforce-with-type-logo.svg"
            className="ml-14"/>
          </Link>
            <Link href="">
          {/* <Link href="https://appexchange.salesforce.com/mktcollections/curated/technologypartners?gad_source=1&gad_campaignid=22539537766&gbraid=0AAAAAoNTYYTz_UITMiQt88JF2sDRgKY6Z&gclid=CjwKCAjwprjDBhBTEiwA1m1d0uwCPbrWQha1v0JDJ4okbS0LmFg8E6RuRFvE_wpj6Xww24VkN5VLThoCS2EQAvD_BwE" target="_blank" rel="noopener noreferrer"> */}
          <Image
            priority
            width={190}
            height={190}
            alt="Salesforce"
            src="/images/partner-logo.svg"
            className="ml-0 mt-6"/>
          </Link>
          </div>

          {/* Logo de partner */}
          <div className="flex items-center">
          </div>

          {/* Logo de Hubspot */}
          <div className="flex items-center">
          <Link href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">
          <Image
            priority
            width={90}
            height={90}
            alt="Salesforce"
            src="/images/HubSpot_Logo.svg"
            className="ml-0"/>
          </Link>
          </div>

        </div>

          {/* Logo derecha */}
        <div className="flex md:space-x-6 items-center">
        <div className="flex flex-col items-center">
          <Link href="https://www.linkedin.com/company/osa-crm-consulting/" target="_blank" rel="noopener noreferrer">
            <Image
              width={30}
              height={30}
              alt="LinkedIn"
              src="/images/linkedin.svg"
              className="my-2"
            />
          </Link>
          <Link href="https://wa.me/5491124760567" target="_blank" rel="noopener noreferrer">
            <Image
              width={30}
              height={30}
              alt="LinkedIn"
              src="/images/wassap.svg"
              className="mx-4"
            />
          </Link>
          </div>
        <div className="small-font-size md:text-left text-center flex flex-col mt-2 md:ml-10 text-white">
            <Link href="#form" className="flex flex-row my-1 whitespace-pre-line">
            <Image
              width={17}
              height={17}
              alt="info@osaconsulting.com"
              src="/images/footer-mail.svg"
              />
              <spam className="xsmall-font-size ml-2">info@osaconsulting.com</spam>
            </Link>

            <Link href="https://wa.me/5491124760567" className="flex flex-row my-1 whitespace-pre-line" target="_blank" rel="noopener noreferrer">
            <Image
              width={12}
              height={12}
              alt=""
              src="/images/footer-phone.svg"
              className="ml-0.5"/>
            <span className="xsmall-font-size ml-2">+54 9 11 2476-0567</span>
            </Link>

            <Link href="https://goo.su/ky1yU0l" className="flex flex-row my-1 whitespace-pre-line" target="_blank" rel="noopener noreferrer">
            <Image
              width={15}
              height={15}
              alt=""
              src="/images/footer-address.svg"/>
            <span className="xsmall-font-size ml-2">30 N Gould St, STE R, Sheridan, WY 82801, Wyoming, USA</span>
            </Link>

            <Link href="#" className="xsmall-font-size my-1 whitespace-pre-line text-center flex flex-row">
              <span className="flex">2025 © {t("footer_1")}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

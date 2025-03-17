"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-32 flex md:flex-row justify-center font-albert-semibold text-color-2 bg-color-1">
      <div className="flex md:flex-row items-center h-48 justify-between w-full">
        <div className="flex justify-start">
          <Link href="#" className="flex content-center text-center">
            <div className="m-2 w-20 h-20 flex items-center">
              <Image
                width={40}
                height={40}
                className="object-fill h-auto w-auto"
                alt="logo"
                src="/images/logo-w-b_1.svg"
              />
            </div>
          </Link>
          <div className="small-font-size md:text-left text-center flex flex-col mt-2 md:ml-6">
            <Link href="/form" className="flex flex-row my-1 whitespace-pre-line" target="_blank" rel="noopener noreferrer">
            <Image
              width={17}
              height={17}
              alt="info@osaconsulting.com"
              src="/images/footer-mail.svg"
              />
              
              <spam className="ml-2">info@osaconsulting.com</spam>
            </Link>
            <Link href="https://g.co/kgs/gvzTW54" className="flex flex-row my-1 whitespace-pre-line" target="_blank" rel="noopener noreferrer">
            <Image
              width={15}
              height={15}
              alt=""
              src="/images/footer-address.svg"/>
            <span className="xsmall-font-size ml-2">Buenos Aires, Argentina.</span>
            </Link>
            <Link href="#" className="xsmall-font-size my-1 whitespace-pre-line text-center flex flex-row">
              <span className="flex">2025 © {t("footer_1")}</span>
            </Link>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          {/* Logo de LinkedIn */}
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image
              width={30}
              height={30}
              alt="LinkedIn"
              src="/images/linkedin.svg"
            />
          </Link>

          {/* Logo de Salesforce */}
          <Image
            priority
            width={130}
            height={130}
            alt="Salesforce"
            src="/images/salesforce-with-type-logo.svg"
          />
        </div>
      </div>
    </footer>
  );
}

"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-5 md:px-40 flex flex-col md:flex-row justify-center font-albert-semibold text-color-2 bg-color-1">
      <div className="flex md:flex-row items-center h-48 justify-between w-full">
        <div className="flex justify-start">
          <Link href="#home" className="flex items-center content-center text-center">
            <div className="m-2 w-20 h-20 flex items-center">
              <Image
                width={30}
                height={30}
                className="object-fill h-auto w-auto"
                alt="logo"
                src="/images/logo-w-b_1.svg"
              />
            </div>
          </Link>
          <div className="small-font-size md:text-left text-center flex flex-col mt-2 md:ml-10">
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
            <span className="xsmall-font-size ml-2">Buenos Aires, Argentina.</span>
            </Link>

            <Link href="#" className="xsmall-font-size my-1 whitespace-pre-line text-center flex flex-row">
              <span className="flex">2025 © {t("footer_1")}</span>
            </Link>
          </div>
        </div>


          {/* Logo derecha */}
        <div className="flex md:space-x-6 items-center">
          <Link href="https://wa.me/5491124760567" target="_blank" rel="noopener noreferrer">
            <Image
              width={30}
              height={30}
              alt="LinkedIn"
              src="/images/linkedin.svg"
            />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image
              width={30}
              height={30}
              alt="LinkedIn"
              src="/images/wassap.svg"
            />
          </Link>

          {/* Logo de Salesforce */}
          <Link href="https://www.salesforce.com" target="_blank" rel="noopener noreferrer">
          <Image
            priority
            width={100}
            height={100}
            alt="Salesforce"
            src="/images/salesforce-with-type-logo.svg"
          />
          </Link>
        </div>
      </div>
    </footer>
  );
}

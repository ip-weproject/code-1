"use client";
import Image from "next/image";
// import { useLanguage } from "../context/LenguajeContext.js";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Footer() {
  // const { changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <footer className="font-albert-semibold text-color-2  bg-color-1">
      <div className="container px-5 pt-8 mx-auto">
        <div className="flex flex-wrap md:text-left text-center mb-4">
          <div className="lg:w-1/4 md:w-1/2 w-full pr-4">
            <Link href="#" className="text-center">
              <div className="m-2 w-20 h-20 flex justify-center items-center">
                <Image
                  width={40}
                  height={40}
                  className="object-fill h-auto w-auto transform"
                  alt="logo"
                  src="/images/logo-w-b_1.svg"
                />
              </div>
            </Link>
            <div className="small-font-size md:text-left text-center flex flex-col mt-4">
              <Link href="#" className="inline-block my-1 whitespace-pre-line">
                {" "}
                info@osaconsulting.com
              </Link>
              <br></br>
              <Link href="#" className="xsmall-font-size inline-block my-1 whitespace-pre-line">
                {" "}
                
                <span className="flex">2025 © {t("footer_1")}
           
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 w-1/2">
            <div className="flex flex-col mb-6 text-color-2"></div>
          </div>
          <div className="lg:w-1/4 w-1/2">
            {/* <h2 className="title-font font-medium text-p-gray-900 tracking-widest text-sm mb-3">
              SOCIAL
            </h2>
            <div className="flex flex-col mb-10">
              <Link
                href="#"
                className="text-p-gray-600 hover:text-p-gray-800 my-1"
              >
                Linkedin
              </Link>
            </div> */}
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <div className="flex flex-col pb-4">
              <div className="w-full my-1 text-center">
                {/* <div className="relative block text-left overflow-hidden shadow-lg my-2 text-p-indigo-800 min-h-[100px]"> */}
                <div className="">
                  <Image
                    priority
                    width={130}
                    height={130}
                    className="mx-auto mt-10 mb-10"
                    alt="logo"
                    src="/images/salesforce-with-type-logo.svg"
                  />
                </div>
             
              </div>

              {/* <div className="w-full my-1 text-center">
                <div className="relative block text-left overflow-hidden shadow-lg my-2 text-white  bg-color-blue">
                  <div className="relative h-full flex flex-col justify-between">
                    <p className="uppercase px-6 py-2 font-semibold text-xs text-white whitespace-pre-line">
                      Category
                    </p>
                    <div className="px-6 font-bold text-lg mb-8 text-p-white whitespace-pre-line">
                      One Fantastic Title that is lightly longer
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

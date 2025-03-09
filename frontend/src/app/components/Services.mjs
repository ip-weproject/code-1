"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

function Services() {
  const { t } = useTranslation();

  return (
    <section className="font-fredoka-semibold">
      <div className="flex flex-row flex-wrap container mx-auto justify-center pt-16">
      <p className="w-full font-bold text-4xl my-8 whitespace-pre-line text-p-lightgray text-center">
            {t("work_on")}
          </p>
        <div className="text-center regular-font-size px-10 mb-8 leading-relaxed justify-center text-p-white">
          {t("services_general")}
        </div>
        <div className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-700 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
          <p className="w-full font-bold text-3xl my-8 whitespace-pre-line text-p-red text-center">
            {t("plan_1")}
          </p>
          <div className="w-full pb-4">
            
            <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-white  text-center">
              {t("plan_1_title")}
            </h1>

            <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-yellow font-bold  text-center">
              {t("plan_1_duration")}
            </h1>

            <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-white  text-center">
              {t("plan_1_description")}
            </h1>

      

            {/* <div className="flex justify-center py-3 lg:w-12/12 w-full">
              <Image
                priority
                width={170}
                height={170}
                className="mx-auto"
                alt="logo"
                src="/images/prod-logo-1.svg"
              />
            </div> */}
          </div>
<<<<<<< HEAD:frontend/src/app/components/Services.mjs
     
=======
>>>>>>> 4e0131ddf8882ee28c628f78ad1eeae34ffb722e:frontend/src/app/components/Products.mjs
          <div className="w-full text-center pt-8 pb-4">
            <Link
               href={{
                pathname: "/plan-details",
                query: { plan: "plan_1", logo: "logo-1"}, 
              }}
              className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line border border-gray-500 text-p-white"
            >
              {t("learn_more")}
            </Link>
          </div>
        </div>

        <div className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-700 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
          <p className="w-full font-bold text-3xl my-8 whitespace-pre-line text-p-red text-center">
            {t("plan_2")}
          </p>
          <div className="w-full pb-4">
          <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-white  text-center">
              {t("plan_2_title")}
            </h1>

            <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-yellow font-bold  text-center">
              {t("plan_2_duration")}
            </h1>

            <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-white  text-center">
              {t("plan_2_description")}
            </h1>

      

            {/* <div className="flex justify-center py-3 lg:w-12/12 w-full">
              <Image
                priority
                width={170}
                height={170}
                className="mx-auto"
                alt="logo"
<<<<<<< HEAD:frontend/src/app/components/Services.mjs
                src="/images/logo-prod-1.svg"
              />
            </div> */}
        
=======
                src="/images/prod-logo-2.svg"
              />
            </div>
>>>>>>> 4e0131ddf8882ee28c628f78ad1eeae34ffb722e:frontend/src/app/components/Products.mjs
          </div>
          <div className="w-full text-center pt-8 pb-4">
            <Link
               href={{
                pathname: "/plan-details",
                query: { plan: "plan_2", logo: "logo-2" }, 
              }}
              className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line border border-gray-500 text-p-white"
            >
              {t("learn_more")}
            </Link>
          </div>
        </div>

        <div className="md:w-1/3 w-10/12 mx-4 text-left max-w-sm rounded-lg overflow-hidden shadow-lg my-4 py-4 text-p-gray-700 border border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105">
          <p className="w-full font-bold text-3xl my-8  whitespace-pre-line text-p-red text-center">
            {t("plan_3")}
          </p>
          <div className="w-full pb-4">
          <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-white  text-center">
              {t("plan_3_title")}
            </h1>

            <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-yellow font-bold  text-center">
              {t("plan_3_duration")}
            </h1>

            <h1 className="w-full text-1xl my-8 px-8 whitespace-pre-line text-p-white  text-center">
              {t("plan_3_description")}
            </h1>

      

            {/* <div className="flex justify-center py-3 lg:w-12/12 w-full">
              <Image
                priority
                width={170}
                height={170}
                className="mx-auto"
                alt="logo"
<<<<<<< HEAD:frontend/src/app/components/Services.mjs
                src="/images/logo-prod-1.svg"
              />
            </div> */}
         
=======
                src="/images/prod-logo-3.svg"
              />
            </div>
>>>>>>> 4e0131ddf8882ee28c628f78ad1eeae34ffb722e:frontend/src/app/components/Products.mjs
          </div>
          <div className="w-full text-center pt-8 pb-4">
            <Link
               href={{
                pathname: "/plan-details",
                query: { plan: "plan_3", logo: "logo-3"}, 
              }}
              className="inline-flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg whitespace-pre-line border border-gray-500 text-p-white"
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

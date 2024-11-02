import Image from "next/image";
// import { useTranslation } from 'react-i18next';
// import { useLanguage } from "../context/LenguajeContext.js";
import "./globals.css";

export default function Home() {
  
  // const { t } = useTranslation();
  return (
<div id="" className="">

<div className="m-0 p-0">
    <section className="w-full bg-p-truegray-800">
        <div  className="w-full flex flex-col">

            <div  className="w-full container mx-auto md:px-24 px-2 md:text-left text-center py-6 flex flex-col justify-center items-center">
                <Image  alt="image-1" 
                        width={300}  
                        height={300} 
                        className="pt-20 pb-20 inline-flex mb-4"  
                        src="/images/portada-min-svg.svg"
                        />
                        <div  className="w-full mb-4 py-2">
                        <h1 className="w-full whitespace-pre-line text-5xl font-semibold text-center text-p-white">The evolution of your tech solutions
                        {/* {t('header_title')} */}
                        </h1>
                        </div>
                        <p className="w-full mb-8 leading-relaxed whitespace-pre-line text-center text-p-white">Nebula Tek is an innovative startup based in Argentina, dedicated to providing cutting-edge solutions in Salesforce and Web3 technologies. Our team is made up of professionals with extensive experience in international projects, primarily in the USA, allowing us to offer a global and personalized approach to each of our clients. At Nebula Tek, we are passionate about helping businesses transform their processes and adopt the most advanced technologies to achieve their commercial goals.
                        {/* {t('about_text')} */}
                        </p>
                <div  className="w-full flex md:flex-row flex-col justify-center pb-6">
                    <a pazly-editable="innerHTML href bg clone"  className="mx-1 font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg text-color-purple bg-p-black whitespace-pre-line" style={{transition:"all .15s ease"}} target="_blank">Book a consultation today</a>
                    <a pazly-editable="innerHTML href bg clone"  className="mx-1 text-color-cian font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-p-black" target="_blank">Learn More</a>
                </div>
            </div>
        </div>
    </section>
    </div>

    </div>
  );
}

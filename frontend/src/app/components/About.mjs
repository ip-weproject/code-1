"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next"; 

       
  function About () {
    const { t } = useTranslation();
  
    return (
      <section className="about-section py-12">
        <div className="container mx-auto py-12">

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
  
          {/* Pilar */}
          <div className=" p-6 rounded-lg shadow-md relative">
           
            <h3 className="text-2xl font-semibold text-white mt-4">{t('about_us_1')}</h3>
            <p className="text-gray-500 mt-2">{t('about_us')}</p>

           
          </div>

            

          </div>
        </div>
      </section>
    );
  };

export default About;

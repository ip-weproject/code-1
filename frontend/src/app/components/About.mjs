"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next"; 

       
  function About () {
    const { t } = useTranslation();
  
    return (
      <section className="about-section py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-8">{t('about_us')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
          {/* Pilar */}
          <div className="about-card p-6 rounded-lg shadow-md border border-gray-500 relative">
            <Image
              src="/images/pilar.jpg"
              alt="Pilar - Salesforce Professional"
              width={200}
              height={300}
              className="rounded-md text-white"
            />
            <h3 className="text-2xl font-semibold text-white mt-4">{t('Pilar Dubiau')}</h3>
            <p className="text-gray-500 mt-2">{t('p_about_description')}</p>

            {/* Miniaturas de certificaciones */}
            <div className="absolute top-6 right-6 flex flex-col space-y-2">
              <Image
                src="/images/cert-adm.png"
                alt="Certificación 1"
                width={100}
                height={100}
                className="rounded-md"
              />
              <Image
                src="/images/cert-app-build.png"
                alt="Certificación 2"
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
          </div>

            {/* Ignacio */}
            <div className="about-card p-6 rounded-lg shadow-md border border-gray-500">
              <Image
                src="/images/ignacio.png"
                alt="Ignacio - Web Developer"
                width={200}
                height={300}
                className="rounded-md text-white"
              />
              <h3 className="text-2xl font-semibold text-white mt-4">{t('Ignacio Grilli')}</h3>
              <p className="text-gray-500 mt-2">{t('i_about_description')}</p>
            </div>

          </div>
        </div>
      </section>
    );
  };

export default About;

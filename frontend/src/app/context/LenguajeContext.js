// src/app/context/LenguajeContext.js
"use client";

import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { createContext, useState, useContext, useEffect } from "react";

// Inicializa i18n si aún no está inicializado
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    // Configuración de i18n
    resources: {
      en: {
        translation: {
          about_description_1:
            "We are a RevOps consulting firm, specializing in optimizing revenue operations for businesses of all sizes. We craft integrated strategies that align sales, marketing, and service to drive predictable growth, enhance efficiency, and ensure long-term success.",
          about_description_2:
            "We optimize revenue operations, integrate platforms, and leverage data for smarter, aligned growth across your entire customer lifecycle.",
          about_header: "Empowering revenue growth with unified operations",
          about_header_1: "We ",
          about_header_2: "revenue operations, ",
          about_header_3: "platforms, and leverage ",
          about_header_4: "for smarter, aligned growth.",
          about_us: "About Us",
          about_us_form:
            "At OSA, we don’t just implement CRMs; we transform your entire revenue engine. Our flexible, customized RevOps solutions are designed to align your sales, marketing, and service teams for maximum impact.",
          analytics: "data ",
          back_to_plans: "Back to Plans",
          book_consultation: "Free consultation",
          certifications: "Our Team Certifications",
          discover_crm: "Unlock the full potential of leading CRMs like Salesforce and HubSpot. Streamline your sales, enhance customer relationships, and drive business growth with powerful automation and unified data.",
          footer_1: "All rights reserved",
          form_company: "Company Name",
          form_email: "Email",
          form_keep_in_touch:
            "Reach out today, and let’s build a unified and highly efficient revenue operation for your business.",
          form_lets_talk: "Let's talk",
          form_message_placeholder: "Your message here...",
          form_name: "Name",
          form_phone: "Phone",
          form_send_message: "Send",
          form_subscribe_text:
            "Subscribe to our newsletter to get the latest insights on RevOps strategies, success stories, and expert tips. Want to streamline your revenue operations? Enter your email below.",
          header_about: "About",
          header_contact: "Contact",
          header_products: "Services",
          home: "Home",
          home_page: "Home",
          home_text_1:
            "We combine CRM power with our RevOps expertise to integrate sales, marketing, and service data, leverage AI, and develop scalable solutions that drive predictable revenue.",
          home_title: "Empowering <highlight>RevOps</highlight> for predictable growth",
          i_about_description:
            "Passionate web developer with over 3 years of experience in the software development industry. My enthusiasm for technology drives me to continuously learn and adapt to new advances. I love challenges, thrive in team environments, and maintain a proactive and enthusiastic approach. I’m looking for new opportunities to grow, innovate, and contribute to the tech industry by leveraging my skills and passion to achieve successful, collaborative solutions.",
          learn_more: "Learn more",
          mail_osa: "osa@infoconsulting.com",
          new_salesforce: "New to RevOps?",
          official_site: "Official site",
          optimize: "optimize ",
          p_about_description:
            "Certified Salesforce and HubSpot professional with extensive experience in RevOps consulting and CRM implementation. I have a strong background in applying agile methodologies and best practices to deliver efficient, high-quality solutions that align sales, marketing, and service. Enthusiastic and proactive, I love challenges and enjoy working collaboratively. I am seeking a new opportunity to continue learning, exploring, and growing in this industry.",
          plan_1: "Strategic Support",
          plan_1_aim:
            "Perfect for companies with existing CRMs (Salesforce, HubSpot) that need ongoing strategic support for their RevOps initiatives.",
          plan_1_description:
            "This plan includes troubleshooting, quick fixes, best practices advice, and general guidance to ensure your revenue operations remain stable, efficient, and aligned with your business goals.",
          plan_1_duration: "Per hour",
          plan_1_title:
            "Ongoing guidance for RevOps best practices and continuous improvement.",
          plan_2: "RevOps Kickstart",
          plan_2_aim:
            "Ideal for businesses new to a unified RevOps approach or implementing a new CRM (Salesforce, HubSpot). This plan offers a rapid setup to get your revenue engine aligned and running efficiently.",
          plan_2_description:
            "It includes CRM configuration, essential module setup, basic workflow automation across sales, marketing, and service, and foundational training.",
          plan_2_duration: "Two weeks",
          plan_2_title:
            "Launch your RevOps journey quickly and efficiently with key CRM implementations.",
          plan_3: "Growth Accelerator",
          plan_3_aim:
            "Designed for businesses ready to scale and in need of advanced RevOps features and deep CRM customization (Salesforce, HubSpot).",
          plan_3_description:
            "This plan focuses on comprehensive customizations tailored to your unique revenue process. It includes advanced workflow automation, custom reporting, deeper analytics, and strategic alignment across all revenue-generating functions.",
          plan_3_duration: "Monthly",
          plan_3_title: "Unlock full RevOps potential and achieve predictable growth as you scale.",
          CRM_services:
            "OSA: Optimizing revenue operations, integrating platforms, and leveraging data for smarter, aligned growth.",
          service: "integrate ",
          services_1:
            "We offer expert RevOps solutions to help businesses drive predictable growth, innovation, and efficiency by aligning their sales, marketing, and service functions. We design customized strategies to streamline operations, improve customer engagement, and ensure long-term success.",
          services_2:
            "Choose your tailored plan and unlock your organization’s full RevOps potential.",
          services_choose_plan: "Choose your plan",
          services_header:
            "Trust OSA as your strategic partner for RevOps implementation and consulting across leading CRMs.",
          sign_up: "Sign Up",
          sitemap: "SITEMAP",
          toogle_lenguage_en: "English",
          toogle_lenguage_es: "Spanish",
        },
      },
      es: {
        translation: {
          about_description_1:
            "Somos una consultora especializada en **RevOps**, dedicada a optimizar las operaciones de ingresos para empresas de todos los tamaños. Creamos estrategias integradas que alinean ventas, marketing y servicio para impulsar un crecimiento predecible, mejorar la eficiencia y asegurar el éxito a largo plazo.",
          about_description_2:
            "Optimizamos operaciones de ingresos, integramos plataformas y aprovechamos los datos para un crecimiento más inteligente y alineado a lo largo de todo el ciclo de vida del cliente.",
          about_header:
            "Impulsamos el crecimiento de ingresos con operaciones unificadas",
          about_header_1: "Optimizamos ",
          about_header_2: "operaciones de ingresos, ",
          about_header_3: "plataformas, y aprovechamos los ",
          about_header_4: "para un crecimiento más inteligente y alineado.",
          about_us: "Sobre Nosotros",
          about_us_form:
            "En OSA, no solo implementamos CRMs; transformamos todo tu motor de ingresos. Nuestras soluciones RevOps flexibles y personalizadas están diseñadas para alinear tus equipos de ventas, marketing y servicio para un impacto máximo.",
          analytics: "datos ",
          back_to_plans: "Volver a los Planes",
          book_consultation: "Consulta gratuita",
          certifications: "Certificaciones de nuestro equipo",
          discover_crm: "Descubre todo el potencial de CRMs líderes como Salesforce y HubSpot. Optimiza tus ventas, mejora la relación con tus clientes y acelera el crecimiento de tu negocio con potentes herramientas de automatización y datos unificados.",
          footer_1: "Todos los derechos reservados",
          form_company: "Compañía",
          form_email: "Correo electrónico",
          form_keep_in_touch:
            "Contáctanos hoy y construyamos juntos una operación de ingresos unificada y altamente eficiente para tu negocio.",
          form_lets_talk: "Hablemos",
          form_message_placeholder: "Tu mensaje aquí...",
          form_name: "Nombre",
          form_phone: "Teléfono",
          form_send_message: "Enviar",
          form_subscribe_text:
            "Suscríbete a nuestro boletín para recibir las últimas novedades sobre estrategias de RevOps, casos de éxito y consejos de expertos. ¿Quieres optimizar tus operaciones de ingresos? Ingresa tu correo electrónico a continuación.",
          header_about: "Acerca de",
          header_contact: "Contacto",
          header_products: "Servicios",
          home: "Inicio",
          home_page: "Inicio",
          home_text_1:
            "Combinamos el poder de los CRMs con nuestra experiencia en RevOps para integrar datos de ventas, marketing y servicio, utilizar IA y desarrollar soluciones escalables que impulsen ingresos predecibles.",
          home_title:
            "Impulsando el <highlight>RevOps</highlight> para un crecimiento predecible",
          i_about_description:
            "Apasionado desarrollador web con más de 3 años de experiencia en la industria del desarrollo de software. Mi entusiasmo por la tecnología me impulsa a aprender y adaptarme continuamente a nuevos avances. Me encantan los desafíos, destaco en entornos de equipo y mantengo un enfoque proactivo y entusiasta. Estoy buscando nuevas oportunidades para crecer, innovar y contribuir a la industria tecnológica, aprovechando mis habilidades y pasión para lograr soluciones exitosas y colaborativas.",
          learn_more: "Conoce más",
          new_salesforce: "¿Eres nuevo en RevOps?",
          official_site: "Sitio oficial",
          optimize: "optimizamos ",
          p_about_description:
            "Profesional certificada en Salesforce y HubSpot con amplia experiencia en consultoría de RevOps e implementación de CRMs. Tengo una sólida experiencia en la aplicación de metodologías ágiles y mejores prácticas para entregar soluciones eficientes y de alta calidad que alinean ventas, marketing y servicio. Entusiasta y proactiva, me encantan los desafíos y disfruto trabajar de manera colaborativa. Estoy buscando una nueva oportunidad para seguir aprendiendo, explorando y creciendo en esta industria.",
          plan_1: "Soporte Estratégico",
          plan_1_aim:
            "Perfecto para empresas con CRMs existentes (Salesforce, HubSpot) que necesitan soporte estratégico continuo para sus iniciativas de RevOps.",
          plan_1_description:
            "Este plan incluye solución de problemas, correcciones rápidas, asesoramiento sobre mejores prácticas y orientación general para garantizar que tus operaciones de ingresos se mantengan estables, eficientes y alineadas con tus objetivos de negocio.",
          plan_1_duration: "Por hora",
          plan_1_title:
            "Asesoría continua para las mejores prácticas de RevOps y mejora continua.",
          plan_2: "RevOps Despegue",
          plan_2_aim:
            "Ideal para empresas nuevas en un enfoque RevOps unificado o que implementan un nuevo CRM (Salesforce, HubSpot). Este plan ofrece una configuración rápida para poner en marcha tu motor de ingresos de forma alineada y eficiente.",
          plan_2_description:
            "Incluye configuración de CRM, configuración de módulos esenciales, automatización básica de flujos de trabajo en ventas, marketing y servicio, y capacitación fundamental.",
          plan_2_duration: "Dos semanas",
          plan_2_title:
            "Inicia tu viaje de RevOps de forma rápida y eficiente con implementaciones clave de CRM.",
          plan_3: "Acelerador de Crecimiento",
          plan_3_aim:
            "Diseñado para empresas listas para escalar y que requieren funciones avanzadas de RevOps y personalización profunda de CRM (Salesforce, HubSpot).",
          plan_3_description:
            "Este plan se enfoca en personalizaciones completas adaptadas a tu proceso de ingresos único. Incluye automatización avanzada de flujos de trabajo, informes personalizados, análisis más profundos y alineación estratégica en todas las funciones generadoras de ingresos.",
          plan_3_duration: "Mensual",
          plan_3_title:
            "Desbloquea todo el potencial de RevOps y logra un crecimiento predecible a medida que escalas.",
          CRM_services:
            "OSA: Optimizamos operaciones de ingresos, integramos plataformas y aprovechamos los datos para un crecimiento más inteligente y alineado.",
          service: "integramos ",
          services_1:
            "Ofrecemos soluciones expertas en RevOps para ayudar a las empresas a impulsar un crecimiento predecible, innovación y eficiencia, alineando sus funciones de ventas, marketing y servicio. Diseñamos estrategias personalizadas para optimizar operaciones, mejorar la interacción con los clientes y asegurar el éxito a largo plazo.",
          services_2:
            "Elige tu plan a medida y desbloquea todo el potencial RevOps de tu organización.",
          services_choose_plan: "Elige tu plan",
          services_header:
            "Confía en OSA como tu aliado estratégico para la implementación y consultoría de RevOps en los CRMs líderes.",
          sign_up: "Regístrate",
          sitemap: "MAPA DEL SITIO",
          toogle_lenguage_en: "Inglés",
          toogle_lenguage_es: "Español",
        },
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en"); // Inicializa con 'en' por defecto

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language); // Cambia el idioma en i18n
    localStorage.setItem("language", language); // Guarda el idioma en localStorage
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang); // Cambia el idioma en el contexto
  };

  if (!language) return null; // Evita el render hasta que se cargue el idioma

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
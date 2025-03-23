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
            "We are a Salesforce partner consulting firm focused on empowering small businesses with tailored solutions that boost efficiency, foster innovation, and ensure long-term success.",
          about_description_2:
            "We optimize businesses, provide service, and leverage analytics for smarter growth with Salesforce.",
          about_header: "Empowering small businesses with smarter solutions",
          about_header_1: "We ",
          about_header_2: "businesses, provide ",
          about_header_3: "and leverage ",
          about_header_4: "for smarter growth with Salesforce.",
          about_us: "About us",
          about_us_form:
            "At OSA, we don’t just implement Salesforce, we unlock its full potential for your business. Our flexible, customized solutions are designed to fit your unique needs.",
          analytics: "analytics ",
          back_to_plans: "Back to Plans",
          book_consultation: "Free consultation",
          certifications: "Our Team Certifications",
          discover_salesforce: "Unlock the full potential of the world's most popular CRM. Streamline your sales, enhance customer relationships, and drive business growth with powerful automation and analytics.",
            footer_1: "All rights reserved",
          form_company: "Company Name",
          form_email: "Email",
          form_keep_in_touch:
            "Reach out today, and let’s build the future of your business together.",
          form_lets_talk: "Let's talk",
          form_message_placeholder: "Your message here...",
          form_name: "Name",
          form_phone: "Phone",
          form_send_message: "Send",
          form_subscribe_text:
            "Subscribe to our newsletter to get the latest stories of our work and many happy customer testimonials. Want to be our customer? Enter your email below.",
          header_about: "About",
          header_contact: "Contact",
          header_products: "Services",
          home: "Home",
          home_page: "Home",
          home_text_1:
            "We combine Salesforce’s power with our expertise to integrate data, utilize AI, and develop scalable solutions.",
          home_title: "Empowering growth through Salesforce innovation",
          i_about_description:
            "Passionate web developer with over 3 years of experience in the software development industry. My enthusiasm for technology drives me to continuously learn and adapt to new advances. I love challenges, thrive in team environments, and maintain a proactive and enthusiastic approach. I’m looking for new opportunities to grow, innovate, and contribute to the tech industry by leveraging my skills and passion to achieve successful, collaborative solutions.",
          learn_more: "Learn more",
          mail_osa: "osa@infoconsulting.com",
          new_salesforce: "New to Salesforce?",
          official_site: "Official site",
          optimize: "optize ",
          p_about_description:
            "Certified Salesforce professional with extensive experience in consulting and UI development within Sales, Service, and Commerce Cloud. I have a strong background in applying agile methodologies and best practices to deliver efficient, high-quality solutions. Enthusiastic and proactive, I love challenges and enjoy working collaboratively. I am seeking a new opportunity to continue learning, exploring, and growing in this industry.",
          plan_1: "On demand support",
          plan_1_aim:
          "Perfect for companies that already have Salesforce implemented but need day-to-day support.",
          plan_1_description:
            "This plan includes troubleshooting, quick fixes, best practices advice, and general guidance to ensure your Salesforce environment remains stable and optimized.",
          plan_1_duration: "Per hour",
          plan_1_title:
            "Ongoing guidance for Salesforce basics and everyday challenges.",
          plan_2: "Jumpstart",
          plan_2_aim:
          "Ideal for businesses new to Salesforce, this plan offers a rapid setup to get your Salesforce environment up and running. ",
          plan_2_description:
            "It includes account configuration, essential module setup, basic workflows, and training. ",
          plan_2_duration: "Two weeks",
          plan_2_title:
            "Launch your Salesforce journey quickly and efficiently.",
          plan_3: "Growth Accelerator",
          plan_3_aim:
          "Designed for businesses ready to grow and in need of more advanced Salesforce features.",
          plan_3_description:
            "This plan focuses on customizations tailored to your unique needs. It includes advanced workflows, automation, custom reports, and deeper insights.",
          plan_3_duration: "Monthly",
          plan_3_title: "Unlock Salesforce's full potential as you scale.",
          salesforce_services:
            "OSA: Optimizing businesses, delivering service, and leveraging analytics for smarter growth with Salesforce.",
          service: "service, ",
          services_1:
            "We offer expert solutions to help businesses and professionals drive growth, innovation, and efficiency. We designed customized strategies to streamline operations, improve customer engagement, and ensure long-term success.",
          services_2:
            "Choose your tailored plan and unlock your organization’s full potential.",
          services_choose_plan: "Choose your plan",
          services_header:
            "Trust OSA as your strategic partner for Salesforce implementation and consulting",
          sign_up: "Sign Up",
          sitemap: "SITEMAP",
          toogle_lenguage_en: "English",
          toogle_lenguage_es: "Spanish",
        },
      },
      es: {
        translation: {
          about_description_1:
            "Somos una consultora partner de Salesforce dedicada a empoderar a pequeñas empresas con soluciones personalizadas que mejoran la eficiencia, fomentan la innovación y aseguran el éxito a largo plazo",
          about_description_2:
            "Optimizamos negocios, brindamos servicio y aprovechamos la analítica para un crecimiento más inteligente con Salesforce",
          about_header:
            "Impulsamos pequeñas empresas con soluciones inteligentes",
          about_header_1: "negocios, ",
          about_header_2: "brindamos ",
          about_header_3: "y aprovechamos la ",
          about_header_4: "para un crecimiento más inteligente con Salesforce.",
          about_us: "Sobre nosotros",
          about_us_form:
            "En OSA, no solo implementamos Salesforce, desbloqueamos todo su potencial para tu negocio. Nuestras soluciones flexibles y personalizadas se adaptan a tus necesidades únicas.",
          analytics: "analítica ",
          back_to_plans: "Volver a los Planes",
          book_consultation: "Consulta gratuita",
          certifications: "Certificaciones de nuestro equipo",
          discover_salesforce: "Descubre todo el potencial del CRM más popular del mundo. Optimiza tus ventas, mejora la relación con tus clientes y acelera el crecimiento de tu negocio con potentes herramientas de automatización y análisis.",
          footer_1: "Todos los derechos reservados",
          form_company: "Compañia",
          form_email: "Correo eléctronico",
          form_keep_in_touch:
            "Contáctanos hoy y construyamos juntos el futuro de tu negocio.",
          form_lets_talk: "Hablemos",
          form_message_placeholder: "Tu mensaje aquí...",
          form_name: "Nombre",
          form_phone: "Teléfono",
          form_send_message: "Enviar",
          form_subscribe_text:
            "Suscríbete a nuestro boletín para recibir las últimas historias de nuestro trabajo y muchos testimonios de clientes felices. ¿Quieres ser nuestro cliente? Ingresa tu correo electrónico a continuación.",
          header_about: "Acerca de",
          header_contact: "Contacto",
          header_products: "Servicios",
          home: "Inicio",
          home_page: "Inicio",
          home_text_1:
            "Combinamos el poder de Salesforce con nuestra experiencia para integrar datos, utilizar IA y desarrollar soluciones escalables.",
          home_title:
            "Impulsando el crecimiento con la innovación de Salesforce",
          i_about_description:
            "Apasionado desarrollador web con más de 3 años de experiencia en la industria del desarrollo de software. Mi entusiasmo por la tecnología me impulsa a aprender y adaptarme continuamente a nuevos avances. Me encantan los desafíos, destaco en entornos de equipo y mantengo un enfoque proactivo y entusiasta. Estoy buscando nuevas oportunidades para crecer, innovar y contribuir a la industria tecnológica, aprovechando mis habilidades y pasión para lograr soluciones exitosas y colaborativas.",
          learn_more: "Conoce más",
          new_salesforce: "¿Eres nuevo en Salesforce?",
          official_site: "Sitio oficial",
          optimize: "Optimizamos ",
          p_about_description:
            "Profesional certificada en Salesforce con amplia experiencia en consultoría y desarrollo de interfaces de usuario dentro de Sales, Service y Commerce Cloud. Tengo una sólida experiencia en la aplicación de metodologías ágiles y mejores prácticas para entregar soluciones eficientes y de alta calidad. Entusiasta y proactiva, me encantan los desafíos y disfruto trabajar de manera colaborativa. Estoy buscando una nueva oportunidad para seguir aprendiendo, explorando y creciendo en esta industria.",
          plan_1: "Soporte Esencial",
          plan_1_aim:
          "Perfecto para empresas que ya tienen Salesforce implementado pero necesitan soporte diario.",
          plan_1_description:
            "Este plan incluye solución de problemas, correcciones rápidas, asesoramiento sobre mejores prácticas y orientación general para garantizar que tu entorno de Salesforce se mantenga estable y optimizado.",
          plan_1_duration: "Por hora",
          plan_1_title:
            "Asesoría continua para los conceptos básicos de Salesforce y desafíos diarios.",
          plan_2: "Despegue",
          plan_2_aim:
          "Ideal para empresas nuevas en Salesforce, ofrece una configuración rápida para poner en marcha tu entorno de Salesforce. ",
          plan_2_description:
            "Incluye configuración de cuentas, configuración de módulos esenciales, flujos de trabajo básicos y capacitación.",
          plan_2_duration: "Dos semanas",
          plan_2_title:
            "Inicia tu viaje con Salesforce de forma rápida y eficiente.",
          plan_3: "Crecimiento Ágil",
          plan_3_aim:
          "Para empresas listas para crecer y que requieren funciones avanzadas de Salesforce.",
          plan_3_description:
            "Este plan se enfoca en personalizaciones adaptadas a tus necesidades únicas. Incluye flujos de trabajo avanzados, automatización, informes personalizados y análisis más profundos.",
          plan_3_duration: "Mensual",
          plan_3_title:
            "Desbloquea todo el potencial de Salesforce mientras escalas.",
          salesforce_services:
            " OSA: Optimizamos negocios, brindamos servicio y aprovechamos la analítica para un crecimiento más inteligente con Salesforce.",
          service: "servicio, ",
          services_1:
            "Ofrecemos soluciones de calidad para ayudar a empresas y profesionales a impulsar el crecimiento, la innovación y la eficiencia. Diseñamos estrategias personalizadas para optimizar operaciones, mejorar la interacción con los clientes y garantizar el éxito a largo plazo.",
          services_2:
            "Elige tu plan a medida y desbloquea todo el potencial de tu organización.",
          services_choose_plan: "Elige tu plan",
          services_header:
            "Confía en OSA como tu aliado estratégico para la implementación y consultoría de Salesforce.",
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

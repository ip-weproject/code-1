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
          toogle_lenguage_en: "English",
          toogle_lenguage_es: "Spanish",
          home_page: "Home",
          header_about: "About",
          header_products: "Services",
          header_contact: "Contact",
          page_title: "Empowering growth through Salesforce innovation",
          page_text_1:
            "We are a Salesforce partner consulting firm committed to helping small businesses unlock their full potential.",
          page_text_2:
            "We combine Salesforce’s power with our expertise to integrate data, utilize AI, and develop scalable solutions.",
            book_consultation: "Book a free consultation",
          learn_more: "Learn more",
          plan_1: "On demand support",
          plan_1_title:
            "Ongoing guidance for Salesforce basics and everyday challenges.",
          plan_1_duration: "P/ HOUR",
          plan_1_description:
            "Perfect for companies that already have Salesforce implemented but need day-to-day support. This plan includes troubleshooting, quick fixes, best practices advice, and general guidance to ensure your Salesforce environment remains stable and optimized.",
          plan_2: "Jumpstart",
          plan_2_title:
            "Launch your Salesforce journey quickly and efficiently.",
          plan_2_duration: "2 WEEKS",
          plan_2_description:
            "Ideal for businesses new to Salesforce, this plan offers a rapid setup to get your Salesforce environment up and running. It includes account configuration, essential module setup, basic workflows, and training. Perfect for small-to-medium businesses looking for a hassle-free Salesforce deployment with minimal customization.",
          plan_3: "Growth Accelerator",
          plan_3_title: "Unlock Salesforce's full potential as you scale.",
          plan_3_duration: "MONTHLY",
          plan_3_description:
            "Designed for businesses ready to grow and in need of more advanced Salesforce features. This plan focuses on customizations tailored to your unique needs. It includes advanced workflows, automation, custom reports, and deeper insights. Ideal for businesses aiming to leverage Salesforce for advanced CRM management, data-driven decision-making, and complex automation.",
          sign_up: "Sign Up",
          about: "About",
          about_us_form:
            "At OSA, we don’t just implement Salesforce, we unlock its full potential for your business. Our flexible, customized solutions are designed to fit your unique needs.",
          salesforce_services:
            "OSA: Optimizing businesses, delivering service, and leveraging analytics for smarter growth with Salesforce.",

          back_to_plans: "Back to Plans",
          home: "Home",
          mail_osa: "osa@infoconsulting.com",

          about_us: "About us",
          form_lets_talk: "Let's talk",
          form_subscribe_text:
            "Subscribe to our newsletter to get the latest stories of our work and many happy customer testimonials. Want to be our customer? Enter your email below.",
          form_message_placeholder: "Your message here...",
          form_email: "Email",
          form_send_message: "Send Message",
          form_name: "Name",
          form_company: "Company Name",
          form_phone: "Phone",
          form_keep_in_touch:
            "Reach out today, and let’s build the future of your business together.",
          services_general:
            "We offer expert Salesforce solutions to help businesses and professionals drive growth, innovation, and efficiency. Our certified team designs customized strategies to streamline operations, improve customer engagement, and ensure long-term success. Whether you need to optimize your current setup or completely transform your processes, we make Salesforce work smarter for you.",
          about_us:
            "At our core, we believe in creating tailored Salesforce implementations that prioritize efficiency, scalability, and innovation. We take the time to understand your unique business needs, adapting our strategies to deliver sustainable results. Whether enhancing an existing setup or embarking on a full transformation, we ensure that Salesforce works in harmony with your goals.",
          sitemap: "SITEMAP",
          new_salesforce: "New to Salesforce?",
          discover_salesforce:
            "Unlock the power of the most popular CRM in the world.",
          work_on: "We work on...",
          meet_osa: "Meet OSA",
        },
      },
      es: {
        translation: {
          toogle_lenguage_en: "Inglés",
          toogle_lenguage_es: "Español",
          home_page: "Inicio",
          header_about: "Acerca de",
          header_products: "Servicios",
          header_contact: "Contacto",
          page_title: "Impulsando el crecimiento con la innovación de Salesforce",
          page_text_1:
            "Somos  una consultora partner de Salesforce comprometida con ayudar a las pequeñas empresas a alcanzar su máximo potencial.",
          page_text_2:
            "Guiados por nuestros tres pilares—Optimización, Servicio y Analítica—nos especializamos en soluciones CRM personalizadas que optimizan operaciones, fortalecen relaciones con los clientes y generan un crecimiento sostenible.",
          book_consultation: "Consulta gratuita",
          learn_more: "Conoce más",
          plan_1: "Soporte Esencial",
          plan_1_title:
            "Asesoría continua para los conceptos básicos de Salesforce y desafíos diarios.",
          plan_1_duration: "POR HORA",
          plan_1_description:
            "Perfecto para empresas que ya tienen Salesforce implementado pero necesitan soporte diario. Este plan incluye solución de problemas, correcciones rápidas, asesoramiento sobre mejores prácticas y orientación general para garantizar que tu entorno de Salesforce se mantenga estable y optimizado.",
          plan_2: "Despegue",
          plan_2_duration: "2 SEMANAS",
          plan_2_title:
            "Inicia tu viaje con Salesforce de forma rápida y eficiente.",
          plan_2_description:
            "Ideal para empresas nuevas en Salesforce, ofrece una configuración rápida para poner en marcha tu entorno de Salesforce. Incluye configuración de cuentas, configuración de módulos esenciales, flujos de trabajo básicos y capacitación. Perfecto para pequeñas y medianas empresas que buscan una implementación de Salesforce sin complicaciones y con mínima personalización.",
          plan_3: "Crecimiento Ágil",
          plan_3_duration: "Mensual",
          plan_3_title:
            "Desbloquea todo el potencial de Salesforce mientras escalas.",
          plan_3_description:
            "Para empresas listas para crecer y que requieren funciones avanzadas de Salesforce. Este plan se enfoca en personalizaciones adaptadas a tus necesidades únicas. Incluye flujos de trabajo avanzados, automatización, informes personalizados y análisis más profundos. Ideal para empresas que buscan aprovechar Salesforce para una gestión avanzada de CRM, toma de decisiones basadas en datos y automatización compleja.",
          sign_up: "Regístrate",
          about_us_form:
            "En OSA, no solo implementamos Salesforce, desbloqueamos todo su potencial para tu negocio.Nuestras soluciones flexibles y personalizadas se adaptan a tus necesidades únicas.",
          salesforce_services:
            " OSA: Optimizamos negocios, brindamos servicio y aprovechamos la analítica para un crecimiento más inteligente con Salesforce.",
          back_to_plans: "Volver a los Planes",
          home: "Inicio",
          i_about_description:
            "Apasionado desarrollador web con más de 3 años de experiencia en la industria del desarrollo de software. Mi entusiasmo por la tecnología me impulsa a aprender y adaptarme continuamente a nuevos avances. Me encantan los desafíos, destaco en entornos de equipo y mantengo un enfoque proactivo y entusiasta. Estoy buscando nuevas oportunidades para crecer, innovar y contribuir a la industria tecnológica, aprovechando mis habilidades y pasión para lograr soluciones exitosas y colaborativas.",
          p_about_description:
            "Profesional certificada en Salesforce con amplia experiencia en consultoría y desarrollo de interfaces de usuario dentro de Sales, Service y Commerce Cloud. Tengo una sólida experiencia en la aplicación de metodologías ágiles y mejores prácticas para entregar soluciones eficientes y de alta calidad. Entusiasta y proactiva, me encantan los desafíos y disfruto trabajar de manera colaborativa. Estoy buscando una nueva oportunidad para seguir aprendiendo, explorando y creciendo en esta industria.",
          about_us: "Sobre nosotros",
          form_lets_talk: "Hablemos",
          form_subscribe_text:
            "Suscríbete a nuestro boletín para recibir las últimas historias de nuestro trabajo y muchos testimonios de clientes felices. ¿Quieres ser nuestro cliente? Ingresa tu correo electrónico a continuación.",
          form_message_placeholder: "Tu mensaje aquí...",
          form_send_message: "Enviar mensaje",
          form_email: "Correo eléctronico",
          form_name: "Nombre",
          form_company: "Compañia",
          form_phone: "Teléfono",
          form_keep_in_touch:
            "Contáctanos hoy y construyamos juntos el futuro de tu negocio.",
          services_general:
            "Ofrecemos soluciones expertas en Salesforce para ayudar a empresas y profesionales a impulsar el crecimiento, la innovación y la eficiencia. Nuestro equipo certificado diseña estrategias personalizadas para optimizar operaciones, mejorar la experiencia del cliente y asegurar un éxito a largo plazo. Ya sea que necesites optimizar tu configuración actual o realizar una transformación completa, hacemos que Salesforce trabaje de manera más inteligente para ti.",
          about_us:
            "En nuestra esencia, creemos en crear implementaciones personalizadas de Salesforce que prioricen la eficiencia, escalabilidad e innovación. Nos tomamos el tiempo necesario para entender las necesidades únicas de tu negocio, adaptando nuestras estrategias para ofrecer resultados sostenibles. Ya sea mejorando una configuración existente o emprendiendo una transformación completa, nos aseguramos de que Salesforce trabaje en armonía con tus objetivos.",
          sitemap: "MAPA DEL SITIO",
          new_salesforce: "¿Eres nuevo en Salesforce?",
          discover_salesforce: "Descubre el potencial del CRM más famoso.",
          work_on: "Trabajamos en ...",
          meet_osa: "Conocé OSA",
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

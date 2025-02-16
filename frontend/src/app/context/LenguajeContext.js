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
          page_title: "Optimizing today, transforming tomorrow",
          page_text_1:
            "We are a Salesforce partner consulting firm committed to helping small businesses unlock their full potential.",
          page_text_2:
            "Guided by our core pillars—Optimization, Service & Analytics—we specialize in custom CRM solutions that streamline operations, enhance customer relationships, and drive sustainable growth.",
          book_consultation: "Free consultation",
          learn_more: "Learn more",
          plan_1: "On demand support",
          plan_1_title:
            "Ongoing guidance for Salesforce basics and everyday challenges.",
          plan_1_duration: "(Per hour)",
          plan_1_description:
            "This plan is perfect for companies that already have Salesforce implemented but need day-to-day support. It includes troubleshooting, quick fixes, best practices advice, and general guidance to ensure your Salesforce environment remains stable and optimized.",
          plan_2: "Jumpstart",
          plan_2_title:
            "Launch your Salesforce journey quickly and efficiently.",
          plan_2_duration: "2 weeks",
          plan_2_description:
            "Ideal for businesses new to Salesforce, this plan offers a rapid setup to get your Salesforce environment up and running. It includes account configuration, essential module setup, basic workflows, and training. Perfect for small-to-medium businesses looking for a hassle-free Salesforce deployment with minimal customization.",
          plan_3: "Growth Accelerator",
          plan_3_title: "Unlock Salesforce's full potential as you scale.",
          plan_3_duration: "Monthly",
          plan_3_description:
            "For businesses that are ready to grow and require more advanced Salesforce features, this plan focuses on customizations tailored to your unique needs. It includes advanced workflows, automation, custom reports, and deeper insights. Ideal for businesses aiming to leverage Salesforce for advanced CRM management, data-driven decision-making, and complex automation.",
          sign_up: "Sign Up",
          about: "About",
          about_us_form:
            "At OSA, we don’t just implement Salesforce, we unlock its full potential for your business. Our flexible, customized solutions are designed to fit your unique needs, helping you streamline operations, enhance customer experiences, and drive measurable growth.",
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
            "Let’s turn your vision into reality. Reach out today, and let’s build the future of your business together.",
          services_general:
            "We offer expert Salesforce solutions to help businesses and professionals drive growth, innovation, and efficiency. Our certified team designs tailored strategies to streamline operations, enhance customer experiences, and ensure sustainable success. Whether you need to optimize your current setup or undergo a full transformation, we make Salesforce work smarter for you.",
          about_us:
            "We believe in efficiency, scalability, and innovation—tailoring every Salesforce implementation to your unique business needs. Whether it’s fine-tuning your current setup or designing a complete transformation, we make Salesforce work smarter for you. Let’s build the future of your business together.",
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
          page_title: "Optimizamos hoy, transformamos el mañana",
          page_text_1:
            "Somos  una consultora partner de Salesforce comprometida con ayudar a las pequeñas empresas a alcanzar su máximo potencial.",
          page_text_2:
            "Guiados por nuestros tres pilares—Optimización, Servicio y Analítica—nos especializamos en soluciones CRM personalizadas que optimizan operaciones, fortalecen relaciones con los clientes y generan un crecimiento sostenible.",
          book_consultation: "Consulta gratuita",
          learn_more: "Conoce más",
          plan_1: "Soporte Esencial",
          plan_1_title:
            "Asesoría continua para los conceptos básicos de Salesforce y desafíos diarios.",
          plan_1_duration: "Por hora",
          plan_1_description:
            "Este plan es ideal para empresas que ya tienen Salesforce implementado pero necesitan soporte diario. Incluye resolución de problemas, soluciones rápidas, asesoramiento sobre buenas prácticas y orientación general para mantener un entorno de Salesforce estable y optimizado.",
          plan_2: "Despegue",
          plan_2_duration: "2 semanas",
          plan_2_title:
            "Inicia tu viaje con Salesforce de forma rápida y eficiente.",
          plan_2_description:
            "Diseñado para empresas nuevas en Salesforce, este plan ofrece una implementación rápida para poner en marcha tu entorno Salesforce. Incluye configuración de cuenta, módulos esenciales, flujos de trabajo básicos y capacitación. Perfecto para pequeñas y medianas empresas que desean un despliegue sin complicaciones y sin personalizaciones complejas.",
          plan_3: "Crecimiento Ágil",
          plan_3_duration: "Mensual",
          plan_3_title:
            "Desbloquea todo el potencial de Salesforce mientras escalas.",
          plan_3_description:
            "Para empresas que están listas para crecer y requieren funciones más avanzadas de Salesforce, este plan se enfoca en personalizaciones a medida de tus necesidades específicas. Incluye flujos de trabajo avanzados, automatización, informes personalizados y análisis detallados. Ideal para empresas que desean aprovechar Salesforce para gestionar un CRM avanzado, tomar decisiones basadas en datos y crear automatizaciones complejas.",
          sign_up: "Regístrate",
          about_us_form:
            "En OSA, no solo implementamos Salesforce, desbloqueamos todo su potencial para tu negocio.Nuestras soluciones flexibles y personalizadas se adaptan a tus necesidades únicas, ayudándote a optimizar operaciones, mejorar la experiencia de tus clientes y generar un crecimiento medible.",
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
            "Hagamos realidad tu visión. Contáctanos hoy y construyamos juntos el futuro de tu negocio.",
          services_general:
            "Ofrecemos soluciones expertas en Salesforce para ayudar a empresas y profesionales a impulsar el crecimiento, la innovación y la eficiencia. Nuestro equipo certificado diseña estrategias personalizadas para optimizar operaciones, mejorar la experiencia del cliente y garantizar un crecimiento sostenible. Ya sea que necesites optimizar tu configuración actual o realizar una transformación completa, hacemos que Salesforce trabaje de manera más inteligente para ti.",
          about_us:
            "En OSA, ayudamos a empresas y profesionales a aprovechar Salesforce para crecer, innovar y optimizar sus procesos. Nuestro equipo de expertos certificados diseña soluciones a medida para agilizar operaciones, mejorar la experiencia del cliente y garantizar un crecimiento sostenible.Creemos en la eficiencia, escalabilidad e innovación. Ya sea optimizando tu configuración actual o liderando una transformación completa, hacemos que Salesforce trabaje mejor para ti.",
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

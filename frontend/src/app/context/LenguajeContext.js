// src/app/context/LenguajeContext.js
"use client";

import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { createContext, useState, useContext, useEffect } from 'react';

// Inicializa i18n si aún no está inicializado
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    // Configuración de i18n
    resources: {
      en: {
        translation: {
          "toogle_lenguage_en": "English",
          "toogle_lenguage_es": "Spanish",
          "header_about": "About",
          "header_products": "Products",
          "header_contact": "Contact",
          "page_title": "The evolution of your tech solutions",
          "page_text": "We are a Salesforce partner consulting firm committed to helping small businesses unlock their full potential. Guided by our core pillars—Optimization, Service & Analytics—we specialize in custom CRM solutions that streamline operations, enhance customer relationships, and drive sustainable growth. Our team of experts delivers a global yet personalized approach, combining precision, adaptability, and deep industry knowledge to meet each client’s unique challenges. At OSA, we empower businesses to optimize processes, embrace cutting-edge Salesforce technology, and maximize the value of their digital transformation.",
          "book_consultation": "Book a consultation",
          "learn_more": "Learn more",
          "discover": "Discover",
          "free_plan": "Free",
          "go_pro": "Go Pro",
          "pro_price": "12$/month",
          "enterprise_plan": "Enterprise",
          "lets_talk": "Let's talk",
          "sign_up": "Sign Up",
          "about": "About",
          "about_us": "About us",
          "salesforce_services": "Personalized Salesforce Services. At Lokis Tek, we offer tailored consulting and development in Salesforce to optimize customer relationship management (CRM), improve productivity, and maximize return on technology investment.",
          "building_websites": "Building websites for yourself or others? With Pazly you can build beautiful responsive websites in minutes.",
          "fast_and_easy": "Fast and easy to use",
          "compose_layouts": "It takes seconds to compose different layouts. Drag and drop components and start customising. Download your website and publish it with your preferred host provider.",
          "growing_integrations": "Growing integrations",
          "Lokis_pro_integrations": "Lokis Pro has several integrations that help you make better, more functional websites. We make new components every week.",
          "build_website": "Build your website in minutes",
          "back_to_plans": "Back to Plans",
          "home": "Home",
          "i_about_description": "I am a passionate Web Developer with over 3 years of experience in the software development industry. My enthusiasm for technology drives me to continuously learn and adapt to new advancements. I thrive on challenges, excel in team environments, and maintain a proactive and enthusiastic approach. I am seeking new opportunities to grow, innovate, and contribute to the tech industry, leveraging my skills and passion to drive successful and collaborative solutions.",
          "p_about_description": "As a Salesforce Certified Professional, I specialize in helping businesses unlock the full potential of their Salesforce platform. I manage end-to-end implementations tailored to unique business needs, ensuring seamless adoption and measurable results. Additionally, as a specialist in Revenue Operations Consulting, I assist organizations in optimizing their sales processes and driving growth.",
          "form_lets_talk": "Let's talk",
          "form_subscribe_text": "Subscribe to our newsletter to get the latest stories of our work and many happy customer testimonials. Want to be our customer? Enter your email below.",
          "form_message_placeholder": "Your message here...",
          "form_email_placeholder": "Email",
          "form_send_message": "Send Message",
          "form_keep_in_touch": "Keep in touch with us."
        }
      },
      es: {
        translation: {
          "toogle_lenguage_en": "Inglés",
          "toogle_lenguage_es": "Español",
          "header_about": "Acerca de",
          "header_products": "Productos",
          "header_contact": "Contacto",
          "page_title": "Optimizamos hoy, transformamos el mañana",
          "page_text": "Somos  una consultora partner de Salesforce comprometida con ayudar a las pequeñas empresas a alcanzar su máximo potencial. Guiados por nuestros tres pilares—Optimización, Servicio y Analítica—nos especializamos en soluciones CRM personalizadas que optimizan operaciones, fortalecen relaciones con los clientes y generan un crecimiento sostenible. Nuestro equipo de expertos ofrece un enfoque global y personalizado, combinando precisión, adaptabilidad y profundo conocimiento de la industria para abordar los desafíos únicos de cada cliente. En OSA, empoderamos a las empresas para optimizar sus procesos, adoptar tecnología de vanguardia en Salesforce y maximizar el valor de su transformación digital.",
          "book_consultation": "Reserva una consulta hoy",
          "learn_more": "Aprende más",
          "discover": "Descubre",
          "free_plan": "Gratis",
          "go_pro": "Hazte Pro",
          "pro_price": "12$/mes",
          "enterprise_plan": "Empresarial",
          "lets_talk": "Hablemos",
          "sign_up": "Regístrate",
          "about_us": "Sobre nosotros",
          "salesforce_services": "Servicios personalizados de Salesforce. En Lokis Tek, ofrecemos consultoría y desarrollo a medida en Salesforce para optimizar la gestión de relaciones con clientes (CRM), mejorar la productividad y maximizar el retorno de inversión en tecnología.",
          "building_websites": "¿Construyendo sitios web para ti o para otros? Con Pazly puedes crear sitios web responsivos y hermosos en minutos.",
          "fast_and_easy": "Rápido y fácil de usar",
          "compose_layouts": "Se tarda segundos en componer diferentes diseños. Arrastra y suelta componentes y comienza a personalizar. Descarga tu sitio web y publícalo con tu proveedor de hosting preferido.",
          "growing_integrations": "Integraciones en crecimiento",
          "Lokis_pro_integrations": "Lokis Pro tiene varias integraciones que te ayudan a hacer sitios web mejores y más funcionales. Creamos nuevos componentes cada semana.",
          "build_website": "Construye tu sitio web en minutos",
          "back_to_plans": "Volver a los Planes",
          "home": "Inicio",
          "i_about_description": "Apasionado desarrollador web con más de 3 años de experiencia en la industria del desarrollo de software. Mi entusiasmo por la tecnología me impulsa a aprender y adaptarme continuamente a nuevos avances. Me encantan los desafíos, destaco en entornos de equipo y mantengo un enfoque proactivo y entusiasta. Estoy buscando nuevas oportunidades para crecer, innovar y contribuir a la industria tecnológica, aprovechando mis habilidades y pasión para lograr soluciones exitosas y colaborativas.",
          "p_about_description": "Profesional certificada en Salesforce con amplia experiencia en consultoría y desarrollo de interfaces de usuario dentro de Sales, Service y Commerce Cloud. Tengo una sólida experiencia en la aplicación de metodologías ágiles y mejores prácticas para entregar soluciones eficientes y de alta calidad. Entusiasta y proactiva, me encantan los desafíos y disfruto trabajar de manera colaborativa. Estoy buscando una nueva oportunidad para seguir aprendiendo, explorando y creciendo en esta industria.",
          "form_lets_talk": "Hablemos",
          "form_subscribe_text": "Suscríbete a nuestro boletín para recibir las últimas historias de nuestro trabajo y muchos testimonios de clientes felices. ¿Quieres ser nuestro cliente? Ingresa tu correo electrónico a continuación.",
          "form_message_placeholder": "Tu mensaje aquí...",
          "form_email_placeholder": "Correo electrónico",
          "form_send_message": "Enviar mensaje",
          "form_keep_in_touch": "Mantente en contacto con nosotros."
        }
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });
}

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Inicializa con 'en' por defecto

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language); // Cambia el idioma en i18n
    localStorage.setItem('language', language); // Guarda el idioma en localStorage
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang); // Cambia el idioma en el contexto
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

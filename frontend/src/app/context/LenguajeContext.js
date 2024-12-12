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
          "page_text": "Lokis Tek is an innovative startup based in Argentina, dedicated to providing cutting-edge solutions in Salesforce and Web3 technologies. Our team is made up of professionals with extensive experience in international projects, primarily in the USA, allowing us to offer a global and personalized approach to each of our clients. At Lokis Tek, we are passionate about helping businesses transform their processes and adopt the most advanced technologies to achieve their commercial goals.",
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
          "p_about_description": "I am a passionate Web Developer with over 3 years of experience in the software development industry. My enthusiasm for technology drives me to continuously learn and adapt to new advancements. I thrive on challenges, excel in team environments, and maintain a proactive and enthusiastic approach. I am seeking new opportunities to grow, innovate, and contribute to the tech industry, leveraging my skills and passion to drive successful and collaborative solutions.",
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
          "page_title": "La evolución de tus soluciones tecnológicas",
          "page_text": "Lokis Tek es una startup innovadora con sede en Argentina, dedicada a proporcionar soluciones de vanguardia en tecnologías Salesforce. Nuestro equipo está formado por profesionales con amplia experiencia en proyectos internacionales, principalmente en EE. UU., lo que nos permite ofrecer un enfoque global y personalizado a cada uno de nuestros clientes. En Lokis Tek, nos apasiona ayudar a las empresas a transformar sus procesos y adoptar las tecnologías más avanzadas para lograr sus objetivos comerciales.",
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

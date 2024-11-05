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
          "header_about": "About",
          "header_products": "Products",
          "header_contact": "Contact",
          "page_title": "The evolution of your tech solutions",
          "page_text": "Nebula Tek is an innovative startup based in Argentina, dedicated to providing cutting-edge solutions in Salesforce and Web3 technologies. Our team is made up of professionals with extensive experience in international projects, primarily in the USA, allowing us to offer a global and personalized approach to each of our clients. At Nebula Tek, we are passionate about helping businesses transform their processes and adopt the most advanced technologies to achieve their commercial goals.",
          "book_consultation": "Book a consultation today",
          "learn_more": "Learn more",
          "discover": "Discover",
          "free_plan": "Free",
          "go_pro": "Go Pro",
          "pro_price": "12$/month",
          "enterprise_plan": "Enterprise",
          "lets_talk": "Let's talk",
          "sign_up": "Sign Up",
          "about_nebula_tek": "About Nebula Tek",
          "salesforce_services": "Personalized Salesforce Services. At Nebula Tek, we offer tailored consulting and development in Salesforce to optimize customer relationship management (CRM), improve productivity, and maximize return on technology investment.",
          "building_websites": "Building websites for yourself or others? With Pazly you can build beautiful responsive websites in minutes.",
          "fast_and_easy": "Fast and easy to use",
          "compose_layouts": "It takes seconds to compose different layouts. Drag and drop components and start customising. Download your website and publish it with your preferred host provider.",
          "growing_integrations": "Growing integrations",
          "nebula_pro_integrations": "Nebula Pro has several integrations that help you make better, more functional websites. We make new components every week.",
          "build_website": "Build your website in minutes",
          "back_to_plans": "Back to Plans"
        }
      },
      es: {
        translation: {
          "header_about": "Acerca de",
          "header_products": "Productos",
          "header_contact": "Contacto",
          "page_title": "La evolución de tus soluciones tecnológicas",
          "page_text": "Nebula Tek es una startup innovadora con sede en Argentina, dedicada a proporcionar soluciones de vanguardia en tecnologías Salesforce y Web3. Nuestro equipo está formado por profesionales con amplia experiencia en proyectos internacionales, principalmente en EE. UU., lo que nos permite ofrecer un enfoque global y personalizado a cada uno de nuestros clientes. En Nebula Tek, nos apasiona ayudar a las empresas a transformar sus procesos y adoptar las tecnologías más avanzadas para lograr sus objetivos comerciales.",
          "book_consultation": "Reserva una consulta hoy",
          "learn_more": "Aprende más",
          "discover": "Descubre",
          "free_plan": "Gratis",
          "go_pro": "Hazte Pro",
          "pro_price": "12$/mes",
          "enterprise_plan": "Empresarial",
          "lets_talk": "Hablemos",
          "sign_up": "Regístrate",
          "about_nebula_tek": "Sobre Nebula Tek",
          "salesforce_services": "Servicios personalizados de Salesforce. En Nebula Tek, ofrecemos consultoría y desarrollo a medida en Salesforce para optimizar la gestión de relaciones con clientes (CRM), mejorar la productividad y maximizar el retorno de inversión en tecnología.",
          "building_websites": "¿Construyendo sitios web para ti o para otros? Con Pazly puedes crear sitios web responsivos y hermosos en minutos.",
          "fast_and_easy": "Rápido y fácil de usar",
          "compose_layouts": "Se tarda segundos en componer diferentes diseños. Arrastra y suelta componentes y comienza a personalizar. Descarga tu sitio web y publícalo con tu proveedor de hosting preferido.",
          "growing_integrations": "Integraciones en crecimiento",
          "nebula_pro_integrations": "Nebula Pro tiene varias integraciones que te ayudan a hacer sitios web mejores y más funcionales. Creamos nuevos componentes cada semana.",
          "build_website": "Construye tu sitio web en minutos",
          "back_to_plans": "Volver a los Planes"
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
    // Intenta recuperar el idioma del localStorage solo en el cliente
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
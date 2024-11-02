// src/app/context/LenguajeContext.js
"use client";

import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { createContext, useState, useContext } from 'react';

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
          "salesforce_services": "Personalized Salesforce Services. At Nebula Tek, we offer tailored consulting and development in Salesforce to optimize customer relationship management (CRM), improve productivity, and maximize return on technology investment."
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
          "salesforce_services": "Servicios personalizados de Salesforce. En Nebula Tek, ofrecemos consultoría y desarrollo a medida en Salesforce para optimizar la gestión de relaciones con clientes (CRM), mejorar la productividad y maximizar el retorno de inversión en tecnología."
        }
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });
}


const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Cambia el idioma en i18n
    setLanguage(lang);          // Cambia el idioma en el contexto
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
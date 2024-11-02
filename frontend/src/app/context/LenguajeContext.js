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
            "header_title": "The evolution of your tech solutions",
            "about_text": "Nebula Tek is an innovative startup based in Argentina, dedicated to providing cutting-edge solutions in Salesforce and Web3 technologies. Our team is made up of professionals with extensive experience in international projects, primarily in the USA, allowing us to offer a global and personalized approach to each of our clients. At Nebula Tek, we are passionate about helping businesses transform their processes and adopt the most advanced technologies to achieve their commercial goals."
          }
        },
        es: {
          translation: {
            "header_title": "La evolución de tus soluciones tecnológicas",
            "about_text": "Nebula Tek es una startup innovadora con sede en Argentina, dedicada a proporcionar soluciones de vanguardia en tecnologías Salesforce y Web3. Nuestro equipo está formado por profesionales con amplia experiencia en proyectos internacionales, principalmente en EE. UU., lo que nos permite ofrecer un enfoque global y personalizado a cada uno de nuestros clientes. En Nebula Tek, nos apasiona ayudar a las empresas a transformar sus procesos y adoptar las tecnologías más avanzadas para lograr sus objetivos comerciales."
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
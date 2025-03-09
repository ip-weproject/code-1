"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
// import { useLanguage } from "../context/LenguajeContext.js";
import "./globals.css";
import Typewriter from "typewriter-effect";
import Header from "./components/Header.mjs";
import Footer from "./components/Footer.mjs";
import Services from "./components/Services.mjs";
import About from "./components/About.mjs";
import Form from "./components/Form.mjs";
import Start from "./components/Home.mjs";
import Salesforce from "./components/Salesforce.mjs";


export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Start/>
        </section>
        <section id="products" className="min-h-screen flex items-center justify-center">
          <Services/>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <About/>
        </section>
        <section id="sales" className="min-h-screen flex items-center justify-center">
          <Salesforce/>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Form/>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

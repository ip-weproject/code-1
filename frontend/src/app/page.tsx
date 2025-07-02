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
import Crm from "./components/Crm.mjs";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <main>
        <section
          id="home"
          className="flex items-center justify-center">
          <Start />
        </section>

        <section
          id="products"
          className="flex items-center justify-center">
          <Services />
        </section>

        <section
          id="about"
          className="flex items-center justify-center bg-color-2">
          <About />
        </section>

        <section
          id="sales"
          className="flex items-center justify-center bg-color-2">
          <Crm/>
        </section>

        <section
          id="contact"
          className="flex items-center justify-center">
          <Form />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

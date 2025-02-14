import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer.mjs";
import Header from "./components/Header.mjs";
import { LanguageProvider } from '../app/context/LenguajeContext';
import Head from "next/head";
import Link from "next/link";
import Products from "./components/Products.mjs";
import About from "./components/About.mjs";
import Form from "./components/Form.mjs";

const gilroyBold = localFont({
  src: "./fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
  weight: "100 900",
});

const gilroyLight = localFont({
  src: "./fonts/Gilroy-Light.ttf",
  variable: "--font-gilroy-light",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Loki's - web App",
  description: "A forward-thinking startup in Argentina specializing in Salesforce and Web3 solutions, driven by a team with international expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll scrollbar-hide">
        <LanguageProvider>
          <div className="main-container">
            <Header />
            <main className="content">{children}</main>
            <Products />
            <About />
            <Form />
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}


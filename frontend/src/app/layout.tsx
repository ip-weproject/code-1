import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer.mjs";
import Header from "./components/Header.mjs";
import { LanguageProvider } from '../app/context/LenguajeContext';
import Head from "next/head";


// const gilroyBlack = localFont({
//   src: "./fonts/Gilroy-Black.ttf",
//   variable: "--font-gilroy-black",
//   weight: "100 900",
// });

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

// const gilroyMedium = localFont({
//   src: "./fonts/Gilroy-Medium.ttf",
//   variable: "--font-gilroy-medium",
//   weight: "100 900",
// });

// const gilroyRegular = localFont({
//   src: "./fonts/Gilroy-Regular.ttf",
//   variable: "--font-gilroy-regular",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Loki's - web App",
  description: "A forward-thinking startup in Argentina specializing in Salesforce and Web3 solutions, driven by a team with international expertise.",
};

export default function RootLayout({children,}: 
  Readonly<{
  children: React.ReactNode;}>) {
  return (
    <LanguageProvider>
    <html lang="en">
    <Head>
      <link rel="preload" href="/images/favicon.svg" as="favicon" />
    </Head>



      <body className={`${gilroyBold.variable} ${gilroyLight.variable} antialiased`}>
        <div className="main-container">
          <Header/>
            <main className="content">{children}</main>
          <Footer/>
        </div>
      </body>



    </html>
    </LanguageProvider>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer.mjs";
import Header from "./components/Header.mjs";
import Plans from "./components/Plans.mjs";
import { LanguageProvider } from '../app/context/LenguajeContext';
import Head from "next/head";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nebula tek - web App",
  description: "A forward-thinking startup in Argentina specializing in Salesforce and Web3 solutions, driven by a team with international expertise.",
};

export default function RootLayout({children,}: 
  Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
    <html lang="en">
    <Head>
      <link rel="preload" href="/images/logo-inv.png" as="image" />
        </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="main-container">
      <Header/>
      <main className="content">{children}</main>
      <Plans/>
        <Footer/>
        </div>
      </body>
    </html>
    </LanguageProvider>
  );
}

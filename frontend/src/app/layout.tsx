import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer.mjs";
import Header from "./components/Header.mjs";
import { LanguageProvider } from "../app/context/LenguajeContext";

export const metadata: Metadata = {
  title: "OSA - Web App",
  description:
    "A forward-thinking startup in Argentina specializing in Salesforce and Web3 solutions, driven by a team with international expertise.",
  icons: {
    icon: "/images/favicon.ico", // Ruta correcta al favicon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head> */}
      <body className="overflow-y-scroll scrollbar-hide">
        <LanguageProvider>
          <div className="main-container">
            <Header />
            <main className="">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import "../globals.css";

function PlanDetails() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "plan_x"; // Si no hay parámetro, mostrar `plan_x` por defecto
  const logo = searchParams.get("logo") || "logo_x";

  // Función para hacer scroll a una sección

  const router = useRouter();
  const pathname = usePathname();
  const [targetSection, setTargetSection] = useState(null);
  // const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    // Verificar si estamos en la página de inicio
    if (window.location.pathname === "/") {
      setIsHome(true);
    }
  }, []);

  // Detecta cuando la ruta cambia a `/` y hace el scroll
  useEffect(() => {
    if (pathname === "/" && targetSection) {
      document
        .getElementById(targetSection)
        ?.scrollIntoView({ behavior: "smooth" });
      setTargetSection(null); // Resetea el estado
    }
  }, [pathname, targetSection]);

  return (
    <section className="mt-28 w-full">
      <div className="w-full pt-8 pb-8">
        <div className="font-fredoka-semibold container mx-auto flex lg:flex-row flex-col items-center">
          <div className="lg:w-5/12 w-10/12 lg:pl-20">
            <Image
              priority
              width={330}
              height={330}
              className="transform"
              alt="logo"
              src={`/images/prod-${logo}.svg`}
            />
          </div>
          <div className="w-full md:w-10/12 lg:w-6/12 lg:pr-4">
            <h1 className="title-font text-lg mb-6 mt-2 px-12 text-p-yellow font-semibold whitespace-pre-line">
              {t(`${plan}_title`)}
            </h1>
            <div className="flex flex-col">
              <div className="w-full px-8">
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto text-white">
                    <h2 className="text-lg mb-1 font-semibold whitespace-pre-line">
                      ⚡ {t("fast_and_easy")}
                    </h2>
                    <p className="mb-4 whitespace-pre-line">
                      {t(`${plan}_description`)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-8">
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto text-white">
                    <h2 className="text-lg mb-1 font-semibold whitespace-pre-line">
                      🌱{t("growing_integrations")}{" "}
                    </h2>
                    <p className="mb-4 whitespace-pre-line">
                      {t(`${plan}_duration`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-md font-light mt-6 lg:mt-12 text-center px-4 w-full flex flex-col md:flex-row justify-center ">
          <Link
            href="#"
            className="font-fredoka-bold  px-6 py-4 rounded-xl hover:cursor-pointer text-color-blue bg-yellow transition-all duration-300"
            onClick={() => window.open("https://calendly.com/ip-weproject")}
          >
            {t("book_consultation")}
          </Link>
          <button
            onClick={() => router.push("/#products")}
            className="font-fredoka-bold px-6 py-4 ml-2 text-p-white rounded-xl border hover:cursor-pointer text-color-blue hover:bg-red-400 transition-all duration-300"
          >
            {t("back_to_plans")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default PlanDetails;

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

import Image from "next/image";
import whatsappIcon from "../public/assets/images/WhatsApp.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omar Hamo Portfolio",
  description:
    "Omar Hamo is a full-stack developer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <a
              href="https://wa.me/963944974828"
              target="_blank"
              rel="noopener noreferrer"
              className="
            fixed bottom-4 right-4 z-50
            flex items-center space-x-3
            dark:bg-white bg-black bg-opacity-90 backdrop-blur-md
            px-4 py-2 rounded-full shadow-lg
            hover:shadow-xl transition-shadow
          "
            >
              <Image
                src={whatsappIcon}
                alt="WhatsApp"
                width={40}
                height={40}
                className="!bg-transparent"
              />
              <span className="text-sm font-medium dark:text-gray-800 text-white whitespace-nowrap">
                Need a website?<div>I am here to help!</div>
              </span>
            </a>
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

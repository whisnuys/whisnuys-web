import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "whisnuys",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-grey-1000 ${manrope.className}`}>
        <NextTopLoader color="#00adb5" showSpinner={false} />
        <AOSInit />
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTop";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header></Header>
      <main className="min-h-screen">{children}</main>
      <Footer></Footer>
      <ScrollToTopButton />
    </>
  );
};

export default layout;

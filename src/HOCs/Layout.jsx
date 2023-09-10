import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonDarkMode from "../components/ButtonDarkMode";
const Layout = (props) => {
  return (
    <div className="dark:bg-[#222831] text-white ">
      <Header />
      <div className="mt-14">{props.children}</div>
      <Footer />
      <ButtonDarkMode />
    </div>
  );
};

export default Layout;

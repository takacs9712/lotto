import React from "react";
import bcg from "../assets/bcg.jpg";

const Layout = ({ children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${bcg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="bg-auto min-h-screen" style={backgroundStyle}>
      {children}
    </div>
  );
};

export default Layout;

import React from "react";
// import bcg from "../assets/bcg.jpg";

import backgr from "../assets/backgr.jpg";

const Layout = ({ children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgr})`,
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

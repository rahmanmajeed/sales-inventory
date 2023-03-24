import React, { FC, Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./i18n";
import PortalFooter from "./portal/footer/PortalFooter";
import PortalNavbar from "./portal/navbar/PortalNavbar";

const App: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <React.Fragment>
      <Suspense fallback={null}>
        {isLoggedIn && <PortalNavbar />}
        <Outlet />
        {isLoggedIn && <PortalFooter />}
      </Suspense>
    </React.Fragment>
  );
};

export default App;

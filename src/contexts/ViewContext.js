import { createContext, useContext, useState } from "react";

const ViewContext = createContext();

export function useView() {
  return useContext(ViewContext);
}

export function ViewProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const value = {
    loading,
    setLoading,
    navbar,
    toggleNavbar,
    setNavbar,
    sidebar,
    toggleSidebar,
  };

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
}

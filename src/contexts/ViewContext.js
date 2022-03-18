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
    if (navbar) {
      setNavbar(false);
    } else {
      setNavbar(true);
      setSidebar(false);
    }
  };

  const toggleSidebar = () => {
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
      setNavbar(false);
    }
  };

  const value = {
    loading,
    setLoading,
    navbar,
    toggleNavbar,
    setNavbar,
    sidebar,
    setSidebar,
    toggleSidebar,
  };

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
}

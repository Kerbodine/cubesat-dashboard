import React from "react";
import { ViewProvider } from "./contexts/ViewContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainView from "./pages/MainView";

const App = () => {
  return (
    <ViewProvider>
      <Router>
        <div className="h-screen w-screen overflow-hidden">
          <Routes>
            <Route path="*" exact element={<MainView />} />
          </Routes>
        </div>
      </Router>
    </ViewProvider>
  );
};

export default App;

import React from "react";
import { ViewProvider } from "./contexts/ViewContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import MainView from "./pages/MainView";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import PrivateRoute from "./auth/PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword";
import Pricing from "./pages/Pricing";
import { DataProvider } from "./contexts/DataContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <AuthProvider>
      <ViewProvider>
        <DataProvider>
          <Router>
            <div className="h-full w-screen overflow-hidden">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset-password" element={<ForgotPassword />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="*" element={<PrivateRoute />}>
                  <Route path="*" element={<MainView />} />
                </Route>
              </Routes>
            </div>
          </Router>
        </DataProvider>
      </ViewProvider>
    </AuthProvider>
  );
};

export default App;

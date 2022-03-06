import React from "react";
import { ViewProvider } from "./contexts/ViewContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import MainView from "./pages/MainView";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import PrivateRoute from "./auth/PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword";

const App = () => {
  return (
    <AuthProvider>
      <ViewProvider>
        <Router>
          <div className="h-screen w-screen overflow-hidden">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route
                path="/reset-password"
                exact
                element={<ForgotPassword />}
              />
              <Route path="*" element={<PrivateRoute />}>
                <Route path="*" element={<MainView />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </ViewProvider>
    </AuthProvider>
  );
};

export default App;

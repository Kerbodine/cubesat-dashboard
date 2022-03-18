import React, { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Settings = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  const signOut = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      setError("Failed to logout");
    }
  };

  return (
    <div className="w-full h-full p-4 sm:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <div className="flex flex-col sm:flex-row w-full">
        <p className="text-gray-700 flex-auto whitespace-normal">
          <span className="font-medium">Current Account:</span>{" "}
          {currentUser.email}
        </p>
        <button className="form-button ml-auto flex-none" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Settings;

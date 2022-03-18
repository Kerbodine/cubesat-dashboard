import { getFirestore, doc, onSnapshot, query } from "firebase/firestore";
import {
  getDatabase,
  limitToLast,
  onValue,
  orderByChild,
  ref,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProRoute from "../auth/ProRoute";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import { app } from "../firebase";
import CubeSats from "./CubeSats";
import Dashboard from "./Dashboard";
import Images from "./Images";
import Realtime from "./Realtime";
import Settings from "./Settings";
import { useView } from "../contexts/ViewContext";
import { BiInfoCircle } from "react-icons/bi";

const MainView = () => {
  const [loading, setLoading] = useState(true);
  const { setUserData, currentUser } = useAuth();
  const { setLatestData, setAllData } = useData(null);
  const { toggleSidebar } = useView();

  const db = getFirestore(app);

  // Query snapshot for user data
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(
      doc(db, "Users", currentUser.uid),
      (document) => {
        setUserData(document.data());
        setLoading(false);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  // https://stackoverflow.com/questions/33036487/one-liner-to-flatten-nested-object
  const flattenObject = (obj) => {
    const flattened = {};

    Object.keys(obj).forEach((key) => {
      const value = obj[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(flattened, flattenObject(value));
      } else {
        flattened[key] = value;
      }
    });

    return flattened;
  };

  const rtdb = getDatabase(); // Real time database

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onValue(
      query(ref(rtdb, "data"), orderByChild("timeStamp"), limitToLast(1)),
      (snapshot) => {
        const data = snapshot.val();
        setLatestData(flattenObject(data));
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const flattenObj = (obj) => {
    const flattened = [];
    for (var key in obj) {
      flattened.push({ ...obj[key] });
    }
    return flattened;
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onValue(
      query(ref(rtdb, "data"), orderByChild("timeStamp"), limitToLast(10)),
      (snapshot) => {
        const data = snapshot.val();
        setAllData(flattenObj(data));
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="h-screen w-screen">
      {loading ? (
        <div className="grid h-full w-full place-items-center">
          <Loader />
        </div>
      ) : (
        <>
          <hr className="absolute top-[55px] h-[1px] w-screen border-gray-200" />
          <div className="mx-auto flex h-full w-full max-w-screen-xl">
            {/* Navbar section */}
            <Navbar />
            {/* Main task area */}
            <div className="ml-[56px] w-full h-full flex-auto sm:ml-0">
              <div className="h-[56px] border-b border-gray-200 flex items-center px-3">
                <button
                  className="lg:hidden ml-auto p-1 bg-gray-100 rounded-lg text-2xl text-gray-500"
                  onClick={toggleSidebar}
                >
                  <BiInfoCircle />
                </button>
              </div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cubesats" element={<CubeSats />} />
                <Route path="/realtime" element={<ProRoute />}>
                  <Route path="/realtime" element={<Realtime />} />
                </Route>
                <Route path="/images" element={<ProRoute />}>
                  <Route path="/images" element={<Images />} />
                </Route>
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            {/* Sidebar section */}
            <Sidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default MainView;

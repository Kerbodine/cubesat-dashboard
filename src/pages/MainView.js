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
  const { setLatestData, setAllData, setAllImages } = useData(null);
  const { toggleSidebar } = useView();

  const db = getFirestore(app); // firestore database

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

  const rtdb = getDatabase(); // Real time database

  const flattenObj = (obj) => {
    const flattened = [];
    for (var key in obj) {
      flattened.push({ ...obj[key] });
    }
    return flattened;
  };

  // Listener for latest data
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onValue(
      query(ref(rtdb, "data"), orderByChild("timeStamp"), limitToLast(1)),
      (snapshot) => {
        const data = snapshot.val();
        setLatestData(...flattenObj(data));
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  // Listener for all data
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onValue(
      query(ref(rtdb, "data"), orderByChild("timeStamp"), limitToLast(48)),
      (snapshot) => {
        const data = snapshot.val();
        setAllData(
          flattenObj(data).sort((a, b) => {
            return new Date(b.timeStamp) - new Date(a.timeStamp);
          })
        );
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  // Listener for all images
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onValue(
      query(ref(rtdb, "images"), orderByChild("timeStamp"), limitToLast(12)),
      (snapshot) => {
        const data = snapshot.val();
        setAllImages(
          flattenObj(data).sort((a, b) => {
            return new Date(b.timeStamp) - new Date(a.timeStamp);
          })
        );
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

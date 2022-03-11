import { createContext, useContext, useState, useEffect } from "react";
import { auth, app } from "../firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const db = getFirestore(app);

  const createSignupDoc = async (cred) => {
    const userDoc = {
      displayName: cred.user.displayName,
      email: cred.user.email,
      premium: false,
      createdAt: new Date(),
    };
    await setDoc(doc(db, "Users", cred.user.uid), userDoc);
  };

  const signup = async (email, password, firstName, lastName) => {
    try {
      let cred = await createUserWithEmailAndPassword(auth, email, password);
      cred.user.displayName = `${firstName} ${lastName}`;
      await createSignupDoc(cred);
    } catch (err) {
      console.log(err);
    }
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // User data states
  const [userData, setUserData] = useState("");

  const value = {
    userData,
    setUserData,
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

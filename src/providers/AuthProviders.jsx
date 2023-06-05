import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../utilities/firebase_config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const creatUser = (email, passowrd) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, passowrd);
  };

  const logIn = (email, passowrd) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, passowrd);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const updateProfileUser = (currentUser, name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })
          .then((data) => {
            localStorage.setItem("acces-token", data.data.token);
            setLoader(false);
          });
      } else {
        localStorage.removeItem("acces-token");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const googleSignUp = () => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = {
    user,
    creatUser,
    logIn,
    logOut,
    loader,
    updateProfileUser,
    googleSignUp,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

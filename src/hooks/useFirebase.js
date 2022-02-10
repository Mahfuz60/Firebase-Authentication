import { useEffect, useState } from "react";
import InitializeAuthentication from "../FirebaseAuthentication/Firebase.initializeApp";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

InitializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //User state changed
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("auth state changed", user);
        setUser(user);
      }
    });
  }, []);

  //logOut user
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    googleSignIn,
    error,
    user,
    logOut,
  };
};

export default useFirebase;

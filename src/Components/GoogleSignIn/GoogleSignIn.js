import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import InitializeAuthentication from "../../FirebaseAuthentication/Firebase.initializeApp";

InitializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const GoogleSignIn = () => {
  const [user, setUser] = useState({});

  //Sign In Method
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggedUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //SignOut Methods
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {!user.email ? (
        <div>
          <button onClick={handleGoogleSignIn}>GoogleSignIn</button>
          <br />
        </div>
      ) : (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
      {user.email && (
        <div>
          <h1>Welcome to {user.name}</h1>
          <p>I know Your Email Address:{user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  );
};

export default GoogleSignIn;

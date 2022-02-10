import React, { useState } from "react";
import InitializeAuthentication from "../../FirebaseAuthentication/Firebase.initializeApp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
InitializeAuthentication();

const auth = getAuth();

function EmailPasswordRegisterAndLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogIn, setIsLonin] = useState(false);

  //Registrations And Login
  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password at least 8 characters long");
      return;
    }
    // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //   setError("Password must contain two uppercase characters ");
    //   return;
    // }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Password at one Special Character required");
      return;
    }

    {
      isLogIn ? processLogin(email, password) : createNewUser(email, password);
    }
  };

  //Register user
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log(email, password);
        setError("");
        setNameUser();
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //Login User
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //verification Email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  //Reset Password for Email Verification
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {
      console.log(result);
      alert("Reset Your Password");
    });
  };
  //display set name methods
  const setNameUser = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {
      console.log(result);
    });
  };
  //OnBlur Methods
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  //OnChange methods
  const toggleLogin = (e) => {
    setIsLonin(e.target.checked);
  };
  return (
    <div>
      <h3 className="text-primary">Please {isLogIn ? "LogIn" : "Register"}</h3>
      <form onSubmit={handleRegister}>
        {!isLogIn && (
          <div className="row mb-3 justify-content-center">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Name:
            </label>
            <div className="col-sm-6">
              <input
                type="name"
                className="form-control"
                id="inputName"
                placeholder="Enter Your Name"
                onBlur={handleChangeName}
                required
              />
            </div>
          </div>
        )}
        <div className="row mb-3 justify-content-center">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Enter Your Email"
              onBlur={handleChangeEmail}
              required
            />
          </div>
        </div>
        <div className="row mb-3 justify-content-center">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-6">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Enter Your Password"
              onBlur={handleChangePassword}
              required
            />
          </div>
        </div>
        <div className="row mb-3 ">
          <div className="col-sm-4 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input mx-5"
                type="checkbox"
                id="gridCheck1"
                onChange={toggleLogin}
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-8 text-danger">{error}</div>

        {!isLogIn ? (
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        ) : (
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        )}

        <button
          onClick={handleResetPassword}
          type="button"
          className="btn btn-secondary mx-3"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default EmailPasswordRegisterAndLogin;

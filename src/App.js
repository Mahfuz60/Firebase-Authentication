import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import EmailPasswordRegisterAndLogin from "./Components/EmailPassword/EmailPasswordRegisterAndLogin";
// import GoogleSignIn from "./Components/GoogleSignIn/GoogleSignIn";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Shipping from "./Components/Shipping/Shipping";

function App() {
  return (
    <div className="App">
      {/* <GoogleSignIn></GoogleSignIn> */}
      {/* <EmailPasswordRegisterAndLogin></EmailPasswordRegisterAndLogin> */}

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const InitializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default InitializeAuthentication;

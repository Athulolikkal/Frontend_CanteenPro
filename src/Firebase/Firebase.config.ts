
import { initializeApp } from "firebase/app";
import { getAuth,RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbjkYUg077Va6fNqtjeTaWPcQH_MkDJAg",
  authDomain: "canteenproauth.firebaseapp.com",
  projectId: "canteenproauth",
  storageBucket: "canteenproauth.appspot.com",
  messagingSenderId: "918555379679",
  appId: "1:918555379679:web:c2723f4fda3364e5ace66a",
  measurementId: "G-DPGFFXQ7EV"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
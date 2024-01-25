import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBUqm2nfZCrsl5Ip84C0iLLxAfEFHlcpC0",
  authDomain: "enter-557fa.firebaseapp.com",
  projectId: "enter-557fa",
  storageBucket: "enter-557fa.appspot.com",
  messagingSenderId: "1058814060028",
  appId: "1:1058814060028:web:ab4fb14a106f948d197e79"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};

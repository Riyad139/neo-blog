import { getApps, initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyDhKoZPFmIWkADST33k3jsL2YxI8FCpT0I",
  authDomain: "neo-blog-442c7.firebaseapp.com",
  projectId: "neo-blog-442c7",
  storageBucket: "neo-blog-442c7.appspot.com",
  messagingSenderId: "638244507171",
  appId: "1:638244507171:web:5d4946112acdd2a54a6b96",
};

export function initFirebase() {
  const apps = getApps();
  if (apps.length) return apps[0];

  return initializeApp(firebaseConfig);
}

export default initFirebase();

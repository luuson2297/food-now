import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBwhNXrD9yzY4axSypQSsPFKxyLLaMxMY0",
    authDomain: "react-login-d741b.firebaseapp.com",
    projectId: "react-login-d741b",
    storageBucket: "react-login-d741b.appspot.com",
    messagingSenderId: "196767848877",
    appId: "1:196767848877:web:f9c98ad728be77a70ee924",
    measurementId: "G-R4EPQ2H337" 
  };
  
 firebase.initializeApp(firebaseConfig);


//  const auth = firebase.auth();
//  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
 

export default firebase;
//  export {auth,googleAuthProvider,facebookAuthProvider};
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwJ4tIS4Pnxz_GcU6K6Jddt2g-5tCy_Hk",
    authDomain: "crudproject-897ec.firebaseapp.com",
    databaseURL: "https://crudproject-897ec.firebaseio.com",
    projectId: "crudproject-897ec",
    storageBucket: "crudproject-897ec.appspot.com",
    messagingSenderId: "544078265461",
    appId: "1:544078265461:web:2f5e322de6a2ac7359cc3c",
    measurementId: "G-EFJE5M0B9V"
}


firebase.initializeApp(firebaseConfig);

export default firebase;

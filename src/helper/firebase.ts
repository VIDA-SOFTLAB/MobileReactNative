const firebase = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyCxWr7ECPcAobmVGs9xN5CZ3MpbxGIsepI",
    authDomain: "projeto-vida-f001b.firebaseapp.com",
    databaseURL: "https://projeto-vida-f001b-default-rtdb.firebaseio.com",
    projectId: "projeto-vida-f001b",
    storageBucket: "projeto-vida-f001b.appspot.com",
    messagingSenderId: "340161871175",
    appId: "1:340161871175:web:8a743435fbea224a452062",
    measurementId: "G-2R071EELC7"
};

firebase.initializeApp(firebaseConfig)

export async function login (email:string, senha:string) {
    try {
        const auth = await getAuth();
        
        const login = await signInWithEmailAndPassword(auth, email, senha)
        const userInfo = login.user

        return {
            status   : true,
            userInfo : userInfo
        }
    }
    catch (err) {
        return {
            status    : false,
            errorCode : err.code
        }
    }
}

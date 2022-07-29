import { initializeApp, fire } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from "firebase/storage"
import "firebase/database"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBQuYS-7KRjtF8S3Kgx8Q3zkSOEbpBSyfY",
    authDomain: "todolist-d59cf.firebaseapp.com",
    projectId: "todolist-d59cf",
    storageBucket: "todolist-d59cf.appspot.com",
    messagingSenderId: "590361329860",
    appId: "1:590361329860:web:965e06397ba7e14f104991",
    measurementId: "G-CXXWM9SP1L"
};
const APP = initializeApp(firebaseConfig);

export const Storage = getStorage(APP)




// const Auth = getAuth(APP)
// const provider = new GoogleAuthProvider()

// export const SingInWithGoogle = () => {
//     signInWithPopup(Auth, provider)
//         .then(res => {
//             console.log(res?.user?.displayName)
//             localStorage.setItem("Name", res.user.displayName)
//             localStorage.setItem("Email", res.user.email)
//             localStorage.setItem("Photo", res.user.photoURL)
//         })
//         .catch(error => console.log(error))
// }




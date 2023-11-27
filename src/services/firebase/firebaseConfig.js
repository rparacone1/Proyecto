import { initialize } from "firebase/app"
import { getFireStore } from 'firebase/firestore'

const firebaseConfig = {
    apikey: "AIzaSyDM3Vtwlk1TtblWH3QEMBpKQ82VHxK6djo",
    authDomain: "backend34860.firebaseapp.com",
    proyectId: "backend34860.appspot.com",
    storageBucket: "backend34860.appsspot.com",
    messagingSenderId: "94047319929",
    appId: "1:94047319929:web:2c9468e912534b938d21a8"   
}

const app = initializeApp(firebaseConfig)
export const db = getFireStore(app)

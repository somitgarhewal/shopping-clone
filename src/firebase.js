import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyBGDLuhp5rDRkjivyqi6ZZpNohGUgY9i3Y",
        authDomain: "shopping-clone.firebaseapp.com",
        databaseURL: "https://shopping-clone.firebaseio.com",
        projectId: "shopping-clone",
        storageBucket: "shopping-clone.appspot.com",
        messagingSenderId: "273359717109",
        appId: "1:273359717109:web:29878f910f2b29949a3bbc",
        measurementId: "G-X660NNGNRQ"
     
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
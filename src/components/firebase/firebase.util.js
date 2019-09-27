import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyC9XnqNjtcvuU4ykBVsE2pHksrldW9u8HA",
    authDomain: "mycollection-9b7a3.firebaseapp.com",
    databaseURL: "https://mycollection-9b7a3.firebaseio.com",
    projectId: "mycollection-9b7a3",
    storageBucket: "",
    messagingSenderId: "993190824442",
    appId: "1:993190824442:web:dca9b3e951f1257a783c43",
    measurementId: "G-28473EBFP0"
  };

  firebase.initializeApp(config)

export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promp:'select_account'})

export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase

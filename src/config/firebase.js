import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDoZ46kovfRjmggqNNnSbpbAfxDPsyDKW0',
  authDomain: 'movie-rolls.firebaseapp.com',
  databaseURL: 'https://movie-rolls.firebaseio.com',
  projectId: 'movie-rolls',
  storageBucket: 'movie-rolls.appspot.com',
  messagingSenderId: '39363327590'
}

firebase.initializeApp(config)

const facebookProvider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider()

const authRef = firebase.auth()
const databaseRef = new firebase.database().ref()

export { facebookProvider, googleProvider, authRef, databaseRef }

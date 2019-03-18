import { initializeApp, auth, database } from 'firebase'

const config = {
  apiKey: 'AIzaSyDoZ46kovfRjmggqNNnSbpbAfxDPsyDKW0',
  authDomain: 'movie-rolls.firebaseapp.com',
  databaseURL: 'https://movie-rolls.firebaseio.com',
  projectId: 'movie-rolls',
  storageBucket: 'movie-rolls.appspot.com',
  messagingSenderId: '39363327590'
}

initializeApp(config)

const googleProvider = new auth.GoogleAuthProvider()

const authRef = auth()
const databaseRef = new database().ref()

export { googleProvider, authRef, databaseRef }

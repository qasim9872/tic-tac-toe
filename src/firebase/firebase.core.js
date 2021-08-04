import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAundKnFw9XrXzOhtYog1lSDuXgbm7Q4W0',
  authDomain: 'my-secrets-jar.firebaseapp.com',
  projectId: 'my-secrets-jar',
  storageBucket: 'my-secrets-jar.appspot.com',
  messagingSenderId: '319658787665',
  appId: '1:319658787665:web:23365891300952b8eb8970',
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase

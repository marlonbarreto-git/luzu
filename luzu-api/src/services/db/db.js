const {initializeApp} = require('firebase/app')
const {getFirestore} = require('firebase/firestore/lite');

const firebaseConfig = {
  projectId: 'luzu-db',
  authDomain: "luzu-db.firebaseapp.com",
  databaseURL: "https://luzu-db.firebaseio.com",
  storageBucket: "luzu-db.appspot.com",
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

module.exports = {
  db
}
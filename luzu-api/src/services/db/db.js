const { initializeApp } = require('firebase/app')
const { getFirestore, getDoc, doc, setDoc } = require('firebase/firestore/lite');

const firebaseConfig = {
  projectId: 'luzu-db',
  authDomain: "luzu-db.firebaseapp.com",
  databaseURL: "https://luzu-db.firebaseio.com",
  storageBucket: "luzu-db.appspot.com",
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const createDocument = async(db, key, data) => await setDoc(doc(db, "luzu", key), data);

const getDocumenById = async(db, key) => {
  const docSnap = await getDoc(doc(db, "luzu", key));

  return docSnap.exists() ? docSnap.data() : null;
}

module.exports = {
  db,
  createDocument,
  getDocumenById,
}
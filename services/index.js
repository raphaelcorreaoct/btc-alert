const { addDoc, collection, getFirestore } = require("firebase/firestore");
const { firebaseApp } = require("../FirebaseStart");

const addNewValue = async (values) => {
  const db = getFirestore(firebaseApp);
  const appCollectionRef = collection(db, "CURRENCYS");
  return addDoc(appCollectionRef, values);
};

module.exports = {
  addNewValue,
};

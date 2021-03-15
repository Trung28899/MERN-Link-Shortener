import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyD-E9OnROwhZBobJxl0UfTNy5LSbj3_Vd0",
  authDomain: "rutgonn.firebaseapp.com",
  databaseURL: "https://rutgonn-default-rtdb.firebaseio.com",
  projectId: "rutgonn",
  storageBucket: "rutgonn.appspot.com",
  messagingSenderId: "532052697114",
  appId: "1:532052697114:web:429b166d880e419998f1a3",
  measurementId: "G-NEVW6KKREP",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.dataBase = firebase.database();
    this.storage = firebase.storage();
  }

  addLink = (accessLink, link) => {
    return this.dataBase.ref("links/" + accessLink).set({
      userID: accessLink,
      redirectTo: link,
    });
  };

  addLinkk = () => {
    return this.dataBase.ref("links/trung").set({
      userID: "trung",
      redirectTo: "trungtrinh",
    });
  };

  checkAccessLink = (accessLink) => {
    return this.dataBase.ref("links/" + accessLink).once("value");
  };
}

export default new Firebase();

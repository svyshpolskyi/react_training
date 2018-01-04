import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCYb2lGRWZgbJnkrlEizojDxv_5NlNlpfI",
  authDomain: "workers-list.firebaseapp.com",
  databaseURL: "https://workers-list.firebaseio.com",
  projectId: "workers-list",
  storageBucket: "workers-list.appspot.com",
  messagingSenderId: "246794185311"
};

firebase.initializeApp(config);

export default firebase;
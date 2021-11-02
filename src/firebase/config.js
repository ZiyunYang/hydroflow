import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {	
  apiKey: "AIzaSyAEvtR1KgWlS2krAY_GzqoOBq4Ta5QF53I",
  authDomain: "hydroflow-c1d51.firebaseapp.com",
  databaseURL: "https://hydroflow-1607856548952-default-rtdb.firebaseio.com/",
  projectId: "hydroflow-c1d51",
  storageBucket: "hydroflow-c1d51.appspot.com",
  messagingSenderId: "235098396418",
  appId: "1:235098396418:web:0c8467897223d057f0541b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

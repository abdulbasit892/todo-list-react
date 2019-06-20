import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDLdaWRrGqeqb_CAajB6cPzmFGNunMgIL4",
    authDomain: "todo-list-25296.firebaseapp.com",
    databaseURL: "https://todo-list-25296.firebaseio.com",
    projectId: "todo-list-25296",
    storageBucket: "todo-list-25296.appspot.com",
    messagingSenderId: "772991823291",
    appId: "1:772991823291:web:992d7afa572233c3"
};

const fire = () => firebase.initializeApp(config);

export default fire;
//Some service worker stuff for PWA
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service_worker.js').then(registration => {
        console.log("SW REgistered : ", registration);
    }).catch(error => {
        console.log("SW REgistration failed : ", error);
    });
}

//Firebase config stuff
var firebaseConfig = {
    apiKey: "AIzaSyBl3rOUaCsWyqLLYJ4e6inczY-6fNdVyCs",
    authDomain: "minedb31.firebaseapp.com",
    databaseURL: "https://minedb31.firebaseio.com",
    projectId: "minedb31",
    storageBucket: "minedb31.appspot.com",
    messagingSenderId: "312530864481",
    appId: "1:312530864481:web:3a35beccd48a2c0bfa1d20",
    measurementId: "G-YPPBFRGP6D"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Initialize variables and db and get references
const db_ref = firebase.database().ref(); 
// const firestore_ref = firebase.firestore();
// firestore_ref.settings({
//     cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
// });
// firestore_ref.enablePersistence().catch(function(err) {
//     console.log(err.code);
//     if (err.code == 'failed-precondition') {
//         // Multiple tabs open, persistence can only be enabled
//         // in one tab at a a time.
//         // ...
//     } else if (err.code == 'unimplemented') {
//         // The current browser does not support all of the
//         // features required to enable persistence
//         // ...
//     }
// });
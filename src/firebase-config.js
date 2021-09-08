 
import firebase from 'firebase'
 import 'firebase/auth';



const app =firebase.initializeApp( {
    apiKey: "AIzaSyB4w6Vx-eqgK5KHGAu8mk_6Ou0ouXfSdqg",
        authDomain: "gadgetos.firebaseapp.com",
        projectId: "gadgetos",
        storageBucket: "gadgetos.appspot.com",
        messagingSenderId: "818666291491",
        appId:"1:818666291491:web:f51f91c26a7d61342c0c96"
});
export const db = app.firestore();
// export const app = initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;
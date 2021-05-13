import firebase from 'firebase';
import firebaseApp from './firebase'
class AuthService{
    login(){
        const authProvider = new firebase.auth.GoogleAuthProvider();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout(){
        firebase.auth().signOut();
    }

    onAuthChange(onUserChanged){
        firebase.auth().onAuthStateChanged(user =>{
            onUserChanged(user);
        })
    }

}

export default AuthService;
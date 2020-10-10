import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  loggedIn = false;

  constructor(private router: Router, private storage: Storage) {}

  setLoggedInStatus(loggedInStatus)
  {
    this.storage.set('loggedInStatus', loggedInStatus);
    this.loggedIn = loggedInStatus;
  }

  signup(fname, lname, email, password)
  {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      firebase.firestore().collection("userCollection").add({
        uid: user.user.uid,
        firstName: fname,
        lastName: lname 
      });
    });
  }

  login(email, password)
  {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logOut()
  {
    firebase.auth().signOut().then(() => {
      this.setLoggedInStatus(false);
      this.router.navigateByUrl('authentication');
    });
  }

  currentUser()
  {
    return firebase.auth().currentUser;
  }
}

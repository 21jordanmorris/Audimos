import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  public loggedIn = false;

  constructor(private router: Router) 
  { 
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user)
      {
        // face id, touch id, etc.
      }
      else
      {
        this.router.navigateByUrl('authentication');
      }
    });
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
    return firebase.auth().signOut();
  }

  currentUser()
  {
    return firebase.auth().currentUser;
  }
}

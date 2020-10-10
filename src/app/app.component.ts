import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { Storage } from '@ionic/storage';
// import { UserService } from './services/user.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
    // private storage: Storage,
    // private userService: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyDPzNdohB7x4BcGrYXZHmI_Mbcn9nXMN3Y",
      authDomain: "audimos.firebaseapp.com",
      databaseURL: "https://audimos.firebaseio.com",
      projectId: "audimos",
      storageBucket: "audimos.appspot.com",
      messagingSenderId: "127856835600",
      appId: "1:127856835600:web:bc3a3c9edeefbbc912de95",
      measurementId: "G-KGW65FTWX7"
    });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigateByUrl('authentication');
    });
  }
}

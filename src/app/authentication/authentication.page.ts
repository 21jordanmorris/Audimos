import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { SignupPage } from '../signup/signup.page';

import { Storage } from '@ionic/storage';
import { UserService } from '../services/user.service';
import { TouchID } from '@ionic-native/touch-id/ngx';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit 
{
  constructor(public modalController: ModalController,
              private storage: Storage,
              private userService: UserService,
              private touchID: TouchID,
              private router: Router) { }

  async clickedLogin()
  {
    const modal = await this.modalController.create({
      component: LoginPage
    });
    return await modal.present();
  }

  async clickedSignup()
  {
    const modal = await this.modalController.create({
      component: SignupPage
    });
    return await modal.present();
  }

  async checkIfAuthenticated()
  {
    await this.storage.get("loggedInStatus").then((val) => {
      if (val != null)
      {
        this.userService.loggedIn = val;
      }
      else
      {
        this.userService.loggedIn = false;
      }
    });

    if(this.userService.loggedIn)
    {
      await this.touchID.isAvailable()
        .then(
          res => {
            this.touchID.verifyFingerprint("Scan your fingerprint").then(
              res => this.router.navigateByUrl(''),
              err => console.log("Error: ", err)
            );
          },
          err => console.log('TouchID is not available')
        );
    }
  }

  ngOnInit() 
  {
    this.checkIfAuthenticated();
  }
}

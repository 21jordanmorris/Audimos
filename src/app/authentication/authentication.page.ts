import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit 
{
  constructor(public modalController: ModalController) { }

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

  ngOnInit() {}
}

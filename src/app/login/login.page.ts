import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit 
{
  account = { email: '', password: ''}

  constructor(public modalController: ModalController,
              public toastController: ToastController,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {}

  dismiss()
  {
    this.modalController.dismiss();
  }

  verifyAndRoute()
  {
    if (this.account.email == "" || this.account.password == "")
      this.presentToastPWError("Invalid email or password. Did you forget your password?");
    else
    {
      this.userService.login(this.account.email, this.account.password).then(data => {
        this.dismiss();
        this.router.navigateByUrl('');
        this.userService.loggedIn = true;
      }).catch(error => {
        this.presentToastError(error.message);
      })
    }
  }

  async presentToastError(message)
  {
    const toast = await this.toastController.create({
      header: "Error",
      message: message,
      position: "top",
      duration: 5000,
    });
    toast.present();
  }

  async presentToastPWError(message)
  {
    const toast = await this.toastController.create({
      header: "Error",
      message: message,
      position: "top",
      duration: 10000,
      buttons: [
        {
          text: "Yes",
          handler: () => {
            console.log("Prompt forgot password page.");
          }
        }, {
          text: "No",
          handler: () => {
            this.account.password = "";
          }
        }
      ]
    });
    toast.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { ResetPasswordPage } from '../reset-password/reset-password.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit 
{
  account = { email: '', password: ''}

  constructor(public modalController: ModalController,
              private _modalController: ModalController,
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
      this.presentToastPWError("One or more fields are incomplete.");
    else
    {
      this.userService.login(this.account.email, this.account.password).then(data => {
        this.dismiss();
        this.router.navigateByUrl('');
        this.userService.setLoggedInStatus(true);
      }).catch(error => {
        if (error.code = "auth/wrong-password")
        {
          this.presentToastPWError("Invalid email or password. Did you forget your password?");
        }
        else 
        {
          this.presentToastError(error.message);
        }
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
          handler: async () => {
            const modal = this._modalController.create({
              component: ResetPasswordPage
            });
            return (await modal).present();
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

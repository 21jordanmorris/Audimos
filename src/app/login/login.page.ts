import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit 
{
  private email: string;
  private password: string;

  constructor(public modalController: ModalController,
              public toastController: ToastController,
              private router: Router) { }

  ngOnInit() {}

  dismiss()
  {
    this.modalController.dismiss();
  }

  verifyAndRoute()
  {
    if (this.email == "" || this.email == null || this.password == "" || this.password == null)
      this.presentToast();
    else
    {
      this.password = "";
      this.dismiss();
      this.router.navigateByUrl('');
    }
  }

  async presentToast()
  {
    const toast = await this.toastController.create({
      header: "Error",
      message: "Invalid email or password. Did you forget your password?",
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
            this.password = "";
          }
        }
      ]
    });
    toast.present();
  }
}

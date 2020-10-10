import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  account = {email: ''}
  constructor(public modalController: ModalController,
              public toastController: ToastController,
              private userService: UserService) { }

  ngOnInit() {}

  dismiss()
  {
    this.modalController.dismiss();
  }

  verifyAndReset()
  {
    this.userService.resetPassword(this.account.email)
      .then(() => {
        this.dismiss();
        this.presentToast("Email with password reset information sent");
      })
      .catch((error) => {
        this.presentToastHeader("Error", error.message);
      })
  }

  async presentToast(message)
  {
    const toast = await this.toastController.create({
      message: message,
      position: "top",
      duration: 5000,
    });
    toast.present();
  }

  async presentToastHeader(header, message)
  {
    const toast = await this.toastController.create({
      header: header,
      message: message,
      position: "top",
      duration: 5000,
    });
    toast.present();
  }
}

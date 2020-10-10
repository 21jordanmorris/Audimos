import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  account = {fname: '', lname: '', email: '', password: '', cpassword: ''};

  constructor(private userService: UserService,
              private modalController: ModalController,
              private toastController: ToastController,
              private router: Router) { }

  ngOnInit() {}

  dismiss()
  {
    this.modalController.dismiss();
  }

  async verifyAndRoute()
  {
    if (this.account.fname == '' || this.account.lname == '' || this.account.email == '' ||
        this.account.password == '' || this.account.cpassword == '')
      this.presentToastError("Not all fields are completed.");
    else if (this.account.password != this.account.cpassword)
      this.presentToastError("Passwords do not match.");
    else
    {
      this.userService.signup(this.account.password, this.account.lname, this.account.email, this.account.password).then(data => {
        this.dismiss();
        this.router.navigateByUrl('');
        this.userService.setLoggedInStatus(true);
      }).catch(error => {
        this.presentToastError(error.message);
      });
    }
  }

  async presentToastError(msg)
  {
    const toast = await this.toastController.create({
      header: "Error",
      message: msg,
      position: "top",
      duration: 5000,
    });
    toast.present();
  }

  async presentToast(msg)
  {
    const toast = await this.toastController.create({
      message: msg,
      position: "top",
      duration: 5000,
    });
    toast.present();
  }
}

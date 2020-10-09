import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private fname: string;
  private lname: string;
  private email: string;
  private password: string;
  private cpassword: string;

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
    if (this.fname == null || this.fname == "" ||
        this.lname == null || this.lname == "" ||
        this.email == null || this.email == "" ||
        this.password == null || this.password == "" ||
        this.cpassword == null || this.cpassword == "")
      this.presentToast("Not all fields are completed.");
    else if (this.password != this.cpassword)
      this.presentToast("Passwords do not match.");
    // else if (this.email already exists)
    //  this.presentToast("An account with that email already exists.");
    else
    {
      this.password = "";
      this.cpassword = "";
      this.dismiss();
      this.router.navigateByUrl('');
    }
  }

  async presentToast(msg: string)
  {
    const toast = await this.toastController.create({
      header: "Error",
      message: msg,
      position: "top",
      duration: 5000,
    });
    toast.present();
  }
}

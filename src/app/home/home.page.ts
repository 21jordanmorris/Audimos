import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  client_id = 'f7280625863a4986af8bf14c2bd2eccf';
  client_secret = '';
  redirectUrl = 'http://localhost:8100/authentication';
  scopes = ["streaming"];

  constructor(private modalController: ModalController) { }
  
  config = {
    clientId: "f7280625863a4986af8bf14c2bd2eccf",
    redirectUrl: "http://localhost:8100/authentication",
    scopes: ["streaming"] // see Spotify Dev console for all scopes
  }


  async ngOnInit() {}

  hostSpotify()
  {
    alert("Implement");
  }

}

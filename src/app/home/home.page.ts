import { Component, OnInit } from '@angular/core';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  access_token : string;
  expiresAt : number;

  constructor(private spotifyAuth: SpotifyAuth) { }
  
  ngOnInit() {}

  hostSpotify()
  {
    const config = {
      clientId: "f7280625863a4986af8bf14c2bd2eccf",
      redirectUrl: "audimos://callback",
      scopes: ["streaming"], // see Spotify Dev console for all scopes
      tokenExchangeUrl: "https://audimos-spotify-server.herokuapp.com/exchange",
      tokenRefreshUrl: "https://audimos-spotify-server.herokuapp.com/refresh",
    };

    this.spotifyAuth.authorize(config)
      .then(({ accessToken, expiresAt }) => {
        this.access_token = accessToken;
        this.expiresAt = expiresAt;

        alert(accessToken);
        alert(expiresAt);
      });
  }

}

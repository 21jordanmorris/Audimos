import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; 
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private safariViewController: SafariViewController) { }

  authorizeUser()
  {
    console.log("authorizing spotify account");

    let spotify_url = "https://accounts.spotify.com/authorize?" + 
              "response_type=code&" + 
              "client_id=f7280625863a4986af8bf14c2bd2eccf&" + 
              "redirect_uri=http%3A%2F%2Flocalhost%3A8100%2F&" +
              "scope=streaming&" + 
              "code_challenge=KADwyz1X~HIdcAG20lnXitK6k51xBP4pEMEZHmCneHD1JhrcHjE1P3yU_NjhBz4TdhV6acGo16PCd10xLwMJJ4uCutQZHw&" + 
              "code_challenge_method=S256";
    
    this.safariViewController.isAvailable()
      .then((available: boolean) => {
          if (available) {
    
            this.safariViewController.show({
              url: spotify_url,
              hidden: false,
              animated: false,
              transition: 'curl',
              enterReaderModeIfAvailable: false
            })
            .subscribe((result: any) => {
                if(result.event === 'opened') console.log('Opened');
                else if(result.event === 'loaded') console.log('Loaded');
                else if(result.event === 'closed') console.log('Closed');
              },
              (error: any) => console.error(error)
            );
    
          } else {
            // use fallback browser, example InAppBrowser
            console.log("No SVC");
          }
        }
      );
  }
}

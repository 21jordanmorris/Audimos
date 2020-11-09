import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TouchID } from '@ionic-native/touch-id/ngx';
import { IonicStorageModule } from '@ionic/storage';

// Spotify
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),
            HttpClientModule],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    TouchID,
    SpotifyAuth,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

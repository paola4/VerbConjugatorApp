import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Network } from '@awesome-cordova-plugins/network/ngx';
// import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    // imports: [AppRoutingModule, BrowserModule, IonicModule.forRoot(), HttpClientModule,
    //   IonicStorageModule.forRoot(), FormsModule, RouterModule],
    imports: [AppRoutingModule, BrowserModule, IonicModule.forRoot(), HttpClientModule, FormsModule, RouterModule],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Network
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

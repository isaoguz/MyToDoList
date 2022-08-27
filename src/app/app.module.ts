import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Modules
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

//Services
import { ApiService } from './services/api/api.service';
import { StorageService } from './services/storage/storage.service';
import { NotifyService } from './services/notify/notify.service';
import { UtilityService } from './services/utility/utility.service';
import { CameraService } from './services/camera/camera.service';
import { BrowserService } from './services/browser/browser.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
const modules = [HttpClientModule, IonicStorageModule.forRoot()];

const services = [ApiService, StorageService, NotifyService, UtilityService,CameraService,BrowserService,InAppBrowser,Camera];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ...modules],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ...services,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

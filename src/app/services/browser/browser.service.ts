import { Injectable } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor( private inappbrows:InAppBrowser) { }


  async openBrowser(){
 await this.inappbrows.create("https://www.google.com/");
  }
}

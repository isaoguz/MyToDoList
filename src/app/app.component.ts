import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api/api.service';
import { BrowserService } from './services/browser/browser.service';
import { CameraService } from './services/camera/camera.service';
import { NotifyService } from './services/notify/notify.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  leftMenu:Array<object>=[];
  leftMenu1:Array<object>=[];
  constructor(private _api: ApiService, private _notify: NotifyService, private router:Router,
    private _camera:CameraService, private _browser:BrowserService) {
    this.getir();
  }


  getir(){
    this._api.get('LeftMenu','').subscribe(
      (resp:any)=>{
        this.leftMenu=resp.pages;
        this.leftMenu1=resp.usefullItems;
        console.log(resp)
      
      },
      (err)=>{
        console.log(err)
      }
      )
  }


  openPage(left){
    if(left.url=="TodoList"){
      this.router.navigate(["/todo-list"])
    }
    else if(left.url=="AddTodo"){
      this.router.navigate(["/add-todo"])
    }
    else if(left.url=="Home"){
      this.router.navigate(["/home"])
    }
  }



  openNative(left){
    if(left.function=="OpenBrowser"){
      this._browser.openBrowser();
    }
    else if(left.function=="OpenCam"){
      this._camera.OpenCamera();
    }
  }


}

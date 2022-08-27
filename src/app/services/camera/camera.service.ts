import { Injectable } from '@angular/core';
import { Camera,CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera:Camera) { 
  }


    options : CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }



  OpenCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image)
     }, (err) => {
      console.log(err)
     });
  }


}

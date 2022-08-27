import { Injectable } from '@angular/core';
import {
  LoadingController,
  LoadingOptions,
  ToastController,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  loadingData: any;
  constructor(
    private loading: LoadingController,
    private toast: ToastController
  ) {}

  async show() {
    this.loadingData = await this.loading.create({
      message: null,
      spinner: 'bubbles',
      duration:2000
    });

    this.loadingData.present();
  }

  hide() {
    this.loadingData.dismiss();
  }

  async presentToast(
    message,
    color:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'medium'
      | 'dark',
    position: 'top' | 'bottom',
    duration?: number
  ) {
    const toast = await this.toast.create({
      color: color,
      message: message,
      position: position,
      duration: duration ? duration : 2000,
    });

    toast.present();
  }
}

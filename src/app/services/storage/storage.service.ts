import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {
    this.storage.create();
  }

  get(key) {
    return this.storage.get(key);
  }

  set(key, value) {
    return this.storage.set(key, value);
  }
}

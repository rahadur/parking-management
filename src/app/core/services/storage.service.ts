import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  setItem(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item))
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      return null;
    }
  }

  clear(): void {
    localStorage.clear();
  }
}

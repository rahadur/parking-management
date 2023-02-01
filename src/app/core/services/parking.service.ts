import {Injectable} from '@angular/core';
import {Parking} from "@core/models/parking";
import {StorageService} from "@core/services/storage.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(
    private storage: StorageService
  ) {
  }

  fetchParkings(): Observable<Parking[]> {
    const parkings = this.storage.getItem('parkings') || [];
    return of(parkings)
  }

  saveParking(parking: Parking): Observable<boolean> {
    const parkings = this.storage.getItem('parkings') || [];
    const id = (Math.random() + 1).toString(36).substring(7).toString();
    parkings.push({...parking, id})
    this.storage.setItem('parkings', parkings);
    return of(true);
  }

  getParking(id: string): Observable<Parking> {
    const parkings = this.storage.getItem('parkings');
    const parking = parkings.find((p: Parking) => p.id === id);
    return of(parking);
  }

  updateParking(parking: Parking): Observable<boolean> {
    let parkings = this.storage.getItem('parkings');
    parkings = parkings.filter((p: Parking) => p.id !== parking.id);
    parkings.push({...parking});
    this.storage.setItem('parkings', parkings);
    return of(true);
  }
}

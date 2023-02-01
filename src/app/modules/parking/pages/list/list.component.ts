import { Component, OnInit } from '@angular/core';
import {ParkingService} from "@core/services/parking.service";
import {Observable} from "rxjs";
import {Parking} from "@core/models/parking";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  parkings$!: Observable<Parking[]>

  constructor(
    private parkingService: ParkingService
  ) { }

  ngOnInit(): void {
    this.parkings$ = this.parkingService.fetchParkings();
  }

}

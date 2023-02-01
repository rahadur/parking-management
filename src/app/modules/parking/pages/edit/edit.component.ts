import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ParkingService} from "@core/services/parking.service";
import {Observable} from "rxjs";
import {Parking} from "@core/models/parking";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  parking$!: Observable<Parking>;

  constructor(
    private route: ActivatedRoute,
    private parkingService: ParkingService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.parking$ = this.parkingService.getParking(id)
  }


  saveParking(parking: Parking): void {
    console.log(parking)
  }

}

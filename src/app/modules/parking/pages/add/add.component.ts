import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Parking} from "@core/models/parking";
import {ParkingService} from "@core/services/parking.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  parkingForm!: FormGroup;
  ownerPhoto: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private parkingService: ParkingService,

  ) {

    this.parkingForm = this.fb.group({
      vehicleLicenseNo: ['', [Validators.required]],
      vehicleType: ['', [Validators.required]],
      ownerName: ['', [Validators.required]],
      status: ['', [Validators.required]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: [''],
        zip: ['', [Validators.required]],
      }),
      entryDateTime: ['', [Validators.required]],
      exitDateTime: ['', [Validators.required]],
      parkingCharge: [{ value: '', disables: true}, [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  selectVehicleType(value: string): void {
    switch (value) {
      case 'car':
        this.parkingForm.patchValue({parkingCharge: 50});
        break;
      case 'microbus':
        this.parkingForm.patchValue({parkingCharge: 100});
        break;
      case 'truck':
        this.parkingForm.patchValue({parkingCharge: 300});
        break;
      default:
        this.parkingForm.patchValue({parkingCharge: 0});
        break;

    }
  }

  saveParking(parking: Parking): void {
    console.log(parking)
    if (parking) {
      this.parkingService.saveParking(parking).subscribe(save => {
        this.router.navigateByUrl('/admin/parking')
      })
    }
  }

}

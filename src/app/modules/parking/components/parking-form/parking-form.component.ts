import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Parking} from "@core/models/parking";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";

@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.scss']
})
export class ParkingFormComponent implements OnInit, AfterViewInit {

  @Input() parking!: Parking | null;

  @Output() onSubmit: EventEmitter<Parking> = new EventEmitter<Parking>();

  parkingForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.parkingForm = this.fb.group({
      vehicleLicenseNo: ['', [Validators.required]],
      vehicleType: ['', [Validators.required]],
      ownerName: ['', [Validators.required]],
      ownerPhone: ['', [Validators.required]],
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

  ngAfterViewInit() {
    if(this.parking) {
      this.parkingForm.patchValue({
        vehicleLicenseNo: this.parking.vehicleLicenseNo,
        vehicleType: this.parking.vehicleType,
        ownerName: this.parking.ownerName,
        ownerPhone: this.parking.ownerPhone,
        status: this.parking.status,
        address: this.parking.address,
        entryDateTime: this.parking.entryDateTime,
        exitDateTime: this.parking.exitDateTime,
        parkingCharge: this.parking.parkingCharge
      })
    }
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

  saveParking(): void {
    if (this.parkingForm.valid) {
      this.onSubmit.emit(this.parkingForm.value)
    }
  }

  formControl(name: string): FormControl {
    return this.parkingForm.get(name) as FormControl;
  }

  formGroup(name: string): FormGroup {
    return this.parkingForm.get('name') as FormGroup;
  }

}

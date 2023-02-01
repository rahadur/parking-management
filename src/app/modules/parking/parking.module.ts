import { NgModule } from '@angular/core';

import { SharedModule } from "@shared/shared.module";

import { ParkingRoutingModule } from "./parking-routing.module";
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { ParkingFormComponent } from './components/parking-form/parking-form.component';



@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EditComponent,
    ParkingFormComponent,
  ],
  imports: [
    SharedModule,
    ParkingRoutingModule
  ]
})
export class ParkingModule { }

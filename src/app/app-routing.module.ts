import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./layout/admin/admin.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'parking',
        loadChildren: () => import('./modules/parking/parking.module').then(m => m.ParkingModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admin/parking',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

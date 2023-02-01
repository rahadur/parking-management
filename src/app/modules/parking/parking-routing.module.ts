import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {ListComponent} from "./pages/list/list.component";
import {AddComponent} from "./pages/add/add.component";
import {EditComponent} from "./pages/edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule { }

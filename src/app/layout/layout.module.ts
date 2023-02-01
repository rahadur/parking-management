import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {AdminComponent} from "./admin/admin.component";
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [AdminComponent, ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }

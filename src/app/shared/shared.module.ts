import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { ngfModule } from "angular-file";



const SHARED_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ngfModule
]

@NgModule({
  declarations: [],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES]
})
export class SharedModule { }

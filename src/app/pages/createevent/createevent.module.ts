import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateeventRoutingModule } from './createevent-routing.module';
import { CreateeventComponent } from './createevent.component';
import { MaterialModule } from '../../material/material.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [CreateeventComponent],
  imports: [
    CommonModule,
    CreateeventRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class CreateeventModule { }

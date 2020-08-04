import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { MaterialModule } from '../../material/material.module';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class EventsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AroundmeRoutingModule } from './aroundme-routing.module';
import { AroundmeComponent } from './aroundme.component';


@NgModule({
  declarations: [AroundmeComponent],
  imports: [
    CommonModule,
    AroundmeRoutingModule
  ]
})
export class AroundmeModule { }

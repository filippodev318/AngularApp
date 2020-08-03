import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRegComponent } from './login-reg.component';

const routes: Routes = [{ path: '', component: LoginRegComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


const routes: Routes = [
  {path: 'home',loadChildren: () =>import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'events', loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule) },
  {path: 'aroundme', loadChildren: () => import('./pages/aroundme/aroundme.module').then(m => m.AroundmeModule) },
  { path: 'login_reg', loadChildren: () => import('./auth/login-reg/login-reg.module').then(m => m.LoginRegModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@angular-eBooks/ui-content';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GlobalLayoutComponent } from './global-layout/global-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/global',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    outlet: 'globalOutlet'
  },
  {
    path: 'global',
    component: GlobalLayoutComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    outlet: 'authOutlet'
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    outlet: 'authOutlet'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

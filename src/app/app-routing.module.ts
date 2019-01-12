import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@angular-eBooks/sys-utils';

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
    path: 'global',
    component: GlobalLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

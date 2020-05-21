import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoutComponent } from './pages/logout/logout.component';


const routes: Routes = [
{
  path:'login',
  component:LoginComponent,
},
{
  path: 'callback',
  component:CallbackComponent,
},
{
  path: 'dashboard',
  component:DashboardComponent,
},
{
  path: 'logout',
  component:LogoutComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

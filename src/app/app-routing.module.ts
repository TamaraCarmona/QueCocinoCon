import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthGuard } from './core/auth-guard.service';
import { RegisterComponent } from './pages/register/register.component';
import { AddrecipeComponent } from './pages/recipe/addrecipe/addrecipe.component';
import { CategoriesComponent } from './pages/recipe/categories/categories.component';
import { AddSearchComponent } from './pages/search/add-search/add-search.component';
import { FilterComponent } from './pages/search/filter/filter.component';
import { ResultComponent } from './pages/search/result/result.component';



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
  canActivate: [], 
  component:DashboardComponent,
},
{
  path: 'logout',
  component:LogoutComponent,
},
{
  path:'register', 
  component:RegisterComponent,
},
{
  path:'addrecipe',
  component:AddrecipeComponent,
},
{
  path:'categories',
  component:CategoriesComponent,
},
{
  path:'add-search',
  component:AddSearchComponent,
},
{
  path:'filter',
  component:FilterComponent,
},
{
  path:'result',
  component:ResultComponent,
},
{
  path: "**",
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

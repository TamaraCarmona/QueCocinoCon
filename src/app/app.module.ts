import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { AddrecipeComponent } from './pages/recipe/addrecipe/addrecipe.component';
import { CategoriesComponent } from './pages/recipe/categories/categories.component';
import { StepComponent } from './pages/recipe/step/step.component';
import { IngredientComponent } from './pages/recipe/ingredient/ingredient.component';
import { AddSearchComponent } from './pages/search/add-search/add-search.component';
import { FilterComponent } from './pages/search/filter/filter.component';
import { ResultComponent } from './pages/search/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent,
    DashboardComponent,
    LogoutComponent,
    RegisterComponent,
    AddrecipeComponent,   
    CategoriesComponent,
    StepComponent,
    IngredientComponent,
    AddSearchComponent,
    FilterComponent,
    ResultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

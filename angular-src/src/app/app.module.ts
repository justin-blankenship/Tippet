import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ShopsComponent } from './components/shops/shops.component';
import { AgmCoreModule } from '@agm/core';
import { FliesComponent } from './components/flies/flies.component';
import { KnotsComponent } from './components/knots/knots.component';
import { AboutComponent } from './components/about/about.component';
import { HandlingComponent } from './components/handling/handling.component';
import { CastingComponent } from './components/casting/casting.component';
import { TyingComponent } from './components/tying/tying.component';



const appRoutes: Routes = [
  {
    path:'', 
    component: HomeComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  { //protected route
    path:'profile',
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  { //protected route
    path:'shops',
    component: ShopsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'videos',
    component: FliesComponent
  },
  { 
    path:'knots',
    component: KnotsComponent
  },
  { 
    path:'about',
    component: AboutComponent
  },
  { 
    path:'handling',
    component: HandlingComponent
  },
  { 
    path:'casting',
    component: CastingComponent
  },
  { 
    path:'tying',
    component: TyingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,        
    ProfileComponent,
    ShopsComponent,
    FliesComponent,
    KnotsComponent,
    AboutComponent,
    HandlingComponent,
    CastingComponent,
    TyingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule, 
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0NXbFJAdU2ZXdu3wTATEORvjUbgFO9OU'
    })
  ],
  providers: [HttpClientModule, ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }

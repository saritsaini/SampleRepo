import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {UserService} from './user.service'
import { HttpClientModule } from '@angular/common/http';
const ROUTES: Routes = [
  { path: 'Login', component:LoginComponent},
  { path: 'Dashboard', loadChildren:'./mydashboard/mydashboard.module#MydashboardModule'}  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}

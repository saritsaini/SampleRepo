import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MydashboardComponent } from "./mydashboard.component";
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';
import { UsersComponent } from '../users/users.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { UserregistrationComponent } from '../userregistration/userregistration.component';
import {CommonModule} from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const ROUTES: Routes = [
   { path: '', component:MydashboardComponent},
];

@NgModule({
    imports: [ReactiveFormsModule,FormsModule,HttpClientModule,CommonModule,RouterModule.forChild(ROUTES)],
    declarations: [MydashboardComponent,FilterComponent,UsersComponent, UserdetailsComponent, UserregistrationComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MydashboardModule { }

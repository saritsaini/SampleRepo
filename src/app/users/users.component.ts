import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import * as mymodel from '../Model'

import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   userdata$:Observable<mymodel.Iuser[]>
   filterText:string
   filterBy:string
  constructor(private _UserService:UserService) { }
  
  ngOnInit() {
      this.userdata$=this._UserService.getUsers();
       this._UserService.getFilterText().subscribe(filter=> {
          this.filterText=filter;
       });
       this._UserService.getFilterBy().subscribe(filter=> {
          this.filterBy=filter;
       });
  }
  GetuserDetails(user: mymodel.Iuser): void
  {
     this._UserService.setUserDetails(user);
  } 

}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import * as mymodel from '../Model'

import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
   userDetails$: Observable<mymodel.Iuser>
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.userDetails$ =this._userService.getUserDetails();
  }

}

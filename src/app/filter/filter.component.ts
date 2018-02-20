import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import * as mymodel from '../Model'
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
   filterControl: FormControl;
   debounce: number = 400;
  constructor(private _userService:UserService) { }

  ngOnInit() {
   this.filterControl = new FormControl('');
   this.filterControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        console.log(query);
        this._userService.setFilterText(query);
      });
  }

}

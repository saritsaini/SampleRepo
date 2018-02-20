import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import * as mymodel from './Model'

import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'

import  'rxjs/add/operator/map'
import  'rxjs/add/operator/catch'


@Injectable()
export class UserService {
private userSubject: Subject<mymodel.Iuser>=new Subject<mymodel.Iuser>();
private filterTextSubject: Subject<string>=new Subject<string>();
private filterBySubject: Subject<string>=new Subject<string>();
constructor(private _http:HttpClient) {}

getUsers():Observable<mymodel.Iuser[]>
{
  return this._http.get('assets/Data/userdata.ts')
                        .catch(this.handleError);
}

// getDistincUserName():Observable<mymodel.Iuser[]>
// {
//   let pt$ =this._http.get<mymodel.Iuser[]>('assets/Data/userdata.ts');

//   return pt$.map(user => user.name)
//                         .distinct()
//                         .toArray();                       ;
// }

getDepartment():Observable<mymodel.Idepartment[]>
{
  return this._http.get('assets/Data/department.ts')
                        .catch(this.handleError);
}

getUserDetails(): Observable<mymodel.Iuser>
{
  return this.userSubject.asObservable();
}

setUserDetails(user: mymodel.Iuser)
{
  this.userSubject.next(user);
}

getFilterText(): Observable<string>
{
  return this.filterTextSubject.asObservable();
}

setFilterText(filtertext:any)
{
this.filterTextSubject.next(filtertext);
}

getFilterBy(): Observable<string>
{
  return this.filterBySubject.asObservable();
}

setFilterBy(filtertext:string)
{
this.filterBySubject.next(filtertext);
}


handleError(errorRes: Response)
{
return Observable.throw(errorRes.json() || "Server error")
}

}

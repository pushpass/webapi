import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class EmployeeserviceService {

  private _url: string = "apidata/employeedata.json"

  constructor(private _http:Http) { }
  getemployees(){

    return this._http.get(this._url)
    .pipe(map((response: Response) => response.json()));
  }
  

}

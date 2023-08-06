import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private MAIN_URL: String = "http://localhost:3000";
  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.MAIN_URL + '/employees', data);
  }

  getEmplyeeList(): Observable<any> {
    return this._http.get(this.MAIN_URL + '/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.MAIN_URL}/employees/${id}`);
  }
}

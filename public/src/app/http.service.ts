import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getTasks = () => this._http.get('/api/tasks');

  getTask = (str: string) => this._http.get('api/' + str);

  updateTask = (id: string, data: any) => this._http.put('api/tasks/' + id, data);

  deleteTask = (str: string) => this._http.delete('api/tasks/' + str);

  addTask = (data: any) => this._http.post('api/tasks/', data);


}


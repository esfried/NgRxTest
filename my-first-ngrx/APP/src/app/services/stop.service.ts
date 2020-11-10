import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
const httpOptions = { headers: httpHeaders };

@Injectable()
export class StopService {
  baseUrl:string = 'https://localhost:44328/api'

  constructor(private http: HttpClient) {
  }

  deleteStop(ID) {
    return this.http.delete(`${this.baseUrl}/stop/${ID}`);
  }

  getStops() {
    return this.http.get(`${this.baseUrl}/stop`);
  }

  postStop(item) {
    return this.http.post(`${this.baseUrl}/stop`, item, httpOptions);
  }
}

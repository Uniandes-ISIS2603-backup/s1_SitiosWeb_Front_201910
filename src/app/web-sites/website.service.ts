import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Website } from './website';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/s1_sitios-api/api";
const editorials = '/websites';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private http: HttpClient) { }

  getSites() : Observable<Website[]> {
    return this.http.get<Website[]>(API_URL + editorials);
  }
}

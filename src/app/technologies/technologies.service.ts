import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technologies } from './technologies';
import { Observable } from 'rxjs';
import { AppConstants } from '../appConstants'

const API_URL = AppConstants.baseURL;
const technologies = 'technologies';


@Injectable()
export class TechnologiesService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getTechnologies() : Observable<Technologies[]> {
        return this.http.get<Technologies[]>(API_URL + technologies);
    }
    
}
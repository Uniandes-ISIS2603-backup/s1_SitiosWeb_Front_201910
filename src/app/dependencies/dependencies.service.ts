import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dependencies } from './dependencies';
import { Observable } from 'rxjs';
import { AppConstants } from '../appConstants';
import { DependenciesDetail } from './dependencies-detail';

const API_URL = '/../../assets';//AppConstants.baseURL;
const dependencies = "/dependencias.json";//'/s1_sitios-api/api/dependencies';


@Injectable()
export class DependenciesService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    getDependencies(): Observable<Dependencies[]> {
        console.log(API_URL + Dependencies)
        return this.http.get<Dependencies[]>(API_URL + dependencies);
    }

    getDependencyDetail(depId): Observable<DependenciesDetail> {
        return this.http.get<DependenciesDetail>(API_URL + dependencies + '/' + depId);
    }
    createDependency(dep): Observable<Dependencies> {
        return this.http.post<Dependencies>(API_URL + dependencies, dep);
    }

    /**
     * Updates an user
    * @param user The editorial which will be update
    * @returns The confirmation of the user's update
    */
    updateDependency(depen): Observable<DependenciesDetail> {
        return this.http.put<DependenciesDetail>(API_URL + dependencies + '/' + depen.id, depen);
    }
}
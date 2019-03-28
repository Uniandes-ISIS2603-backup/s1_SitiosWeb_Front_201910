import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoWeb } from './estadoWeb';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/s1_sitios-api/api";
const estadosWeb = '/estadosWeb';

@Injectable({
  providedIn: 'root'
})
export class EstadosWebService {

  constructor(private http: HttpClient) { }

  getEstadosWeb() : Observable<EstadoWeb[]> {
    return this.http.get<EstadoWeb[]>(API_URL + estadosWeb);
  }
}

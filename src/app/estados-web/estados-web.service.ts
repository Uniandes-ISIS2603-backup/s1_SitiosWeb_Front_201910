import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoWeb } from './estadoWeb';
import { Observable } from 'rxjs';
import { AppConstants } from '../appConstants'

const API_URL = AppConstants.baseURL;
const estadosWeb = 'estadosWeb';

@Injectable({
  providedIn: 'root'
})
export class EstadosWebService {

  constructor(private http: HttpClient) { }

  getEstadosWeb() : Observable<EstadoWeb[]> {
    return this.http.get<EstadoWeb[]>(API_URL + estadosWeb);
  }

  getEstadosSitio(sitio:number) : Observable<EstadoWeb[]>
  {
    return this.http.get<EstadoWeb[]>(API_URL+`websites/${sitio}/states`);
  }

  getEstadoActual(sitio:number) : Observable<EstadoWeb>
  {
    return this.http.get<EstadoWeb>(API_URL+`websites/${sitio}/states/last`);
  }
}

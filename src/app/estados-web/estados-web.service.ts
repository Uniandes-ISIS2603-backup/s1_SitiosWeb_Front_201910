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

  getStateBarValue() : number[] {

    let a = this.http.get<EstadoWeb[]>(API_URL + estadosWeb);
    let b :EstadoWeb[];
    let activos: number =1 ;
    let inavtivos: number =1;
    let falla: number =1;
    let otros: number =1;

    let promise = a.toPromise().then(value => {


      b = value
      b.forEach(estado => {
        switch (estado.estado) {
          case 'ACTIVO':
            activos++;
            break;
          case'INCATIVO':
            inavtivos++;
            break;
          case 'ENFALLA':
            falla++;
            break;
          case 'OTROS':
            otros++;
            break;
        }
      });
      let totales = activos + inavtivos + falla + otros;
      activos = activos / totales;
      inavtivos = inavtivos / totales;
      falla = falla / totales;
      otros = otros / totales;

    });
          let response = [activos, inavtivos, falla, otros];
          return response
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

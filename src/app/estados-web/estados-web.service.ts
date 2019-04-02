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

  getStateBarValue() : Promise<number[]> {

      let tempPromise= new Promise<number[]>(((resolve) => {

          let a = this.http.get<EstadoWeb[]>(API_URL + estadosWeb);
          let b :EstadoWeb[];
          let activos: number =0 ;
          let inavtivos: number =0;
          let falla: number =0;
          let otros: number =0;

          let promise = a.toPromise().then(value => {
              b = value
              b.forEach(estado => {
                  switch (estado.estado) {
                      case 'ACTIVO':
                          activos++;
                          break;
                      case'INACTIVO':
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
              activos = (activos / totales)*100;
              inavtivos = (inavtivos / totales)*100;
              falla = (falla / totales)*100;
              otros = (otros / totales)*100;
              let response = [activos, inavtivos, falla, otros];
              resolve(response);

          });
      }));
    return tempPromise;

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

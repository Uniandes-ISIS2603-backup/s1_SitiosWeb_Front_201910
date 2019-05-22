/**
 * This class represents an editorial of the BookStore.
 * It contains all the information relevant to the editorial.
 */
import {EstadoWeb} from "../estados-web/estadoWeb";

export class Website {

    audienciaEsperada: number;

    id: number;

    descripcion: string;

    fechaLanzamiento: string;

    imagen :string;

    nombre :string;

    proposito:string;

    url:string;

    state: EstadoWeb;

    categoriaSitio: string;

    tecnologiasDeDesarrollo: any[];

    sitiosRelacionados: any[];

    estadosWeb : any[];

    ticketsSitio: any[];

    solicitantes:any[];

    constructor(audienciaesperada: number, id: number, descripcion: string, fechaLanzamiento: string, imagen: string, nombre: string, proposito: string, url :string) {
        this.audienciaEsperada = audienciaesperada;
        this.id = id;
        this.descripcion = descripcion;
        this.fechaLanzamiento = fechaLanzamiento;
        this.imagen = imagen;
        this.nombre = nombre;
        this.proposito = proposito;
        this.url = url;
        this.categoriaSitio = "ACADEMICO";

        this.tecnologiasDeDesarrollo=[];

        this.sitiosRelacionados=[];

        this.estadosWeb =[];

        this.ticketsSitio=[];

        this.solicitantes=[];

    }

    public toString = () : string => {
        return `Sitio; ${this.nombre}`;
    }
}


/**
 * This class represents an editorial of the BookStore.
 * It contains all the information relevant to the editorial.
 */
export class Website {

    audienciaesperada: number;

    id: number;

    descripcion: string;

    fechaLanzamiento: string;

    imagen :string;

    nombre :string;

    proposito:string;


    constructor(audienciaesperada: number, id: number, descripcion: string, fechaLanzamiento: string, imagen: string, nombre: string, proposito: string) {
        this.audienciaesperada = audienciaesperada;
        this.id = id;
        this.descripcion = descripcion;
        this.fechaLanzamiento = fechaLanzamiento;
        this.imagen = imagen;
        this.nombre = nombre;
        this.proposito = proposito;
    }
}


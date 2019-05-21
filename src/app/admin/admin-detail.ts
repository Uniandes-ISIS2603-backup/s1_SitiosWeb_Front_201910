import { Dependencies } from "../dependencies/dependencies";

export class AdminDetail {

    id:number;

    nombre:string;

    email:string;

    password:string;

    telefono:number;

    nivel:number;

    nombreCargo:string;

    dependencia:Dependencies;

    //sitioWeb:SitioWeb;

    notificaciones:any[];
}

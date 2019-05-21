import { Dependencies } from "../dependencies/dependencies";
import { Website } from "../web-sites/website";

export class AdminDetail {

    id:number;

    nombre:string;

    email:string;

    password:string;

    telefono:number;

    nivel:number;

    nombreCargo:string;

    dependencia:Dependencies;

    notificaciones:any[];
}

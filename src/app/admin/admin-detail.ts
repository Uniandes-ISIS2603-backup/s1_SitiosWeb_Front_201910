import { Dependencies } from "../dependencies/dependencies";
import { Website } from "../web-sites/website";

export class AdminDetail {

    //identificador unico del administrador
    id:number;

    //nombre del administrador
    nombre:string;

    //correo electronico del administrador
    email:string;

    //contraseña del administrador
    password:string;

    //numero telefonico del administrador
    telefono:number;

    //nivel de jerarquia del administrador
    nivel:number;

    //nombre del cargo que ocupa el administrador
    nombreCargo:string;

    dependencia:Dependencies;

    notificaciones:any[];
}

export class AppConstants {
    public static get baseURL(): string {
        //IMPORTANT esta url se mantendra por los test y debe ser cambiada por localhost:8080 al momento de la entrega
        return "http://70e251ba.ngrok.io/s1_sitios-api/api/";
    }
}
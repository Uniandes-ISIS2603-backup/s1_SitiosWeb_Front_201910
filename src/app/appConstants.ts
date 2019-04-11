export class AppConstants {
    public static get baseURL(): string {
        //IMPORTANT esta url se mantendra por los test y debe ser cambiada por localhost:8080 al momento de la entrega
        //http://70e251ba.ngrok.io host termporal
        return "http://localhost:8080/s1_sitios-api/api/";
    }
}
import {Component, OnInit, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {EstadosWebService} from './estados-web/estados-web.service'
import {viewAttached} from "@angular/core/src/render3/instructions";


declare let $: any;
/**
 * The app component. This component is the base of CMSites-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;
    name: String;


    selectedIndex = 1;

    @ViewChild('LoginModal') loginModal : ElementRef;
    @ViewChild('RegisterModal') registerModal : ElementRef;
    @ViewChild('createEstadoWebModal') createEstadoWebModal : ElementRef;
    @ViewChild('loginComponent') logincomponent :ElementRef;
    @ViewChild('authSignUpComponent') registercomponent :ElementRef;

    @ViewChild('activo') barActivo :ElementRef;
    @ViewChild('inactivo') barInactivo :ElementRef;
    @ViewChild('falla') barDalla :ElementRef;
    @ViewChild('otros') barOtros :ElementRef;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "CMSites";
        this.authService.start();
        document.getElementById("DetailModal");
        this.setUserName();
        this.establecerBarra();
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService,private statesService:EstadosWebService) { }

    logout(): void {
        this.authService.logout()
    }

    selectTab(index: number): void {
        this.selectedIndex = index;
    }

    change():void
    {
        this.authService.printRole()
        this.authService.start()
    }

    showRegisterPane():void
    {
        $(this.registerModal.nativeElement).modal('show');

    }
    showLoginPane():void
    {
        $(this.loginModal.nativeElement).modal('show');
    }
    showCreateEstadoModal():void
    {
        $(this.createEstadoWebModal.nativeElement).modal('show');
    }
    setUserName():void
    {
        this.name = localStorage.getItem('name');

    }

    establecerBarra():void
    {
        this.statesService.getStatesValues().subscribe(value => {
            let strActivo:string;
            let strInactivo:string;
            let strFalla:string;
            let strOtro:string;

            strActivo=value.active+"%";
            strInactivo=value.inactive+"%";
            strFalla=value.onfailure+"%";
            strOtro=value.other+"%";


            document.getElementById("activo").style.cssText="width: "+strActivo
            document.getElementById("incativo").style.cssText="width: "+strInactivo
            document.getElementById("falla").style.cssText="width: "+strFalla
            document.getElementById("otros").style.cssText="width: "+strOtro

        });
    }

}
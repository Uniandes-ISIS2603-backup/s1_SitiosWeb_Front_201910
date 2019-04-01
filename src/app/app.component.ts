import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {AuthService} from './auth/auth.service';


declare let $: any;
/**
 * The app component. This component is the base of sXXX_ZZZ-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    @ViewChild('DetailModal')  modal : ElementRef;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "CMSites";
        this.authService.start();
        document.getElementById("DetailModal");
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService) { }

    logout(): void {
        this.authService.logout()
    }

    showSiteDetail():void
    {
        $(this.modal.nativeElement).modal('show');
        this.change();
    }

    change():void
    {
        this.authService.printRole()
        this.authService.start()
    }


}
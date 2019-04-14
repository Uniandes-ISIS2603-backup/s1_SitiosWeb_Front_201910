import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { TechnologiesService } from '../technologies.service';
import { MatTableDataSource } from '@angular/material';
import { TechnologyDetail } from '../technologies-detail';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
    selector: 'app-list-technologies',
    templateUrl: './technologies-list.component.html', 
    styleUrls: ['./technologies-list.component.css'],
    animations: [
      trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
      ],
     })
export class TechnologiesListComponent implements OnInit {

    @ViewChild('CreateTechModal') createTechModal : ElementRef;
    displayedColumns: string[] = ['id','name'];
    expandedElement: TechnologyDetail | null;
    /**
     * Constructor for the component
     * @param technologiesService The author's services provider
     */
    constructor(private technologiesService: TechnologiesService) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    technologies: any;
    techId: number;

    showCreateTechModal():void
    {
      console.log("hola");
        (this.createTechModal.nativeElement).modal('show');
    }
    /**
     * Asks the service to update the list of editorials
     */
    getTechnologies(): void {
        this.technologiesService.getTechnologies().subscribe(klk => this.technologies = new MatTableDataSource(klk));
    }
    getTechnologyDetail(id): void {
      this.techId = id;
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getTechnologies();
    }
      applyFilter(filterValue: string) {
    this.technologies.filter = filterValue.trim().toLowerCase();
  }
}
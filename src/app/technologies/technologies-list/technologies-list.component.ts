import { Component, OnInit } from '@angular/core';
import { Technologies } from '../technologies';
import { TechnologiesService } from '../technologies.service';
import {MatTableDataSource} from '@angular/material';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
    selector: 'list-technologies',
    templateUrl: './technologies-list.component.html', 
})
export class TechnologiesListComponent implements OnInit {
displayedColumns: string[] = ['id','name'];
    /**
     * Constructor for the component
     * @param technologiesService The author's services provider
     */
    constructor(private technologiesService: TechnologiesService) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    technologies: any;

    /**
     * Asks the service to update the list of editorials
     */
    getTechnologies(): void {
        this.technologiesService.getTechnologies().subscribe(editorials => this.technologies = new MatTableDataSource(editorials));
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
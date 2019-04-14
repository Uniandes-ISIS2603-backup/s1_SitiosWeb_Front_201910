import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../technologies.service';
import {MatTableDataSource} from '@angular/material';
import { TechnologyDetail } from '../technologies-detail';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
    selector: 'app-list-technologies',
    templateUrl: './technologies-list.component.html', 
    styleUrls: ['./technologies-list.component.css']
})
export class TechnologiesListComponent implements OnInit {
displayedColumns: string[] = ['id','name','detail'];
    /**
     * Constructor for the component
     * @param technologiesService The author's services provider
     */
    constructor(private technologiesService: TechnologiesService) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    technologies: any;
    bool: boolean = false;
    techId: number;

    /**
     * Asks the service to update the list of editorials
     */
    getTechnologies(): void {
        this.technologiesService.getTechnologies().subscribe(klk => this.technologies = new MatTableDataSource(klk));
    }
    getTechnologyDetail(id): void {
      console.log(id);
      this.techId = id;
      this.bool = !this.bool;
  
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
import { Component, OnInit } from '@angular/core';
import { DependenciesService } from '../dependencies.service';
import { Dependencies } from '../dependencies';

@Component({
  selector: 'app-dependencies-list',
  templateUrl: './dependencies-list.component.html',
  styleUrls: ['./dependencies-list.component.css']
})
export class DependenciesListComponent implements OnInit {

  depenId: number;
  dependencies: Dependencies[];
  expandir: boolean;
  constructor(private dependencyService: DependenciesService) { }

  getDependencies(): void {
    this.dependencyService.getDependencies()
      .subscribe(dependencies => {
        this.dependencies = dependencies;
      });
  }

  detail(id:number):void {
    this.depenId = id;
    this.expandir = !this.expandir;
  }

  ngOnInit() {
    this.getDependencies();
    this.depenId = -1;
    this.expandir = false;
  }

}

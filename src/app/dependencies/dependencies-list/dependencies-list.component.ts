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
  constructor(private dependencyService: DependenciesService) { }

  getDependencies(): void {
    this.dependencyService.getDependencies()
      .subscribe(dependencies => {
        this.dependencies = dependencies;
      });
  }

  ngOnInit() {
    this.getDependencies();
    this.depenId = -1;
  }

}

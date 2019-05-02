import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DependenciesService } from '../dependencies.service';
import { Dependencies } from '../dependencies';
import { DependenciesDetail } from '../dependencies-detail';

@Component({
  selector: 'app-dependencies-edit',
  templateUrl: './dependencies-edit.component.html',
  styleUrls: ['./dependencies-edit.component.css']
})
export class DependenciesEditComponent implements OnInit {

  constructor(private toastrService: ToastrService,
    private depenService: DependenciesService
  ) { }

  /**
 * The id of the admin that the user wants to edit
 * This is passed as a parameter by the parent component
 */
  @Input() depenId: number;

  /**
  * The output which tells the parent component
  * that the user no longer wants to create an editorial
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new admin
  */
  @Output() update = new EventEmitter();

  /**
  * The admin to edit
  */
  depen: DependenciesDetail;

  /**
   * Retrieves the information of the admin
   */
  getDependency(): void {
    this.depenService.getDependencyDetail(this.depenId)
      .subscribe(depen => {
        this.depen = depen;
      });
  }

  /**
  * Updates the admin's information
  */
  editDependency(): void {
    this.depenService.updateDependency(this.depen)
      .subscribe(() => {
        this.update.emit();
        this.toastrService.success("The Dependency's information was updated", "Dependency edition");
      });
  }

  /**
    * Informs the parent component that the user no longer wants to update the admin
    */
  cancelEdition(): void {
    this.cancel.emit();
  }

  /**
  * The function which initializes the component
  */
  ngOnInit() {
    this.depen = new DependenciesDetail();
    this.getDependency();
  }
}

import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../technologies.service';
import { ActivatedRoute } from '@angular/router';
import { TechnologyDetail } from '../technologies-detail';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class TechnologiesDetailComponent implements OnInit {

  constructor(
    private techService: TechnologiesService,
    private route: ActivatedRoute
  ) { }

  /**
  * The tech whose details we want to show
  */
  techDetail: TechnologyDetail;



  /**
  * The tech's id retrieved from the address
  */
  tech_id: number;

  getTechnologyDetail(): void {
    this.techService.getTechnologyDetail(this.tech_id)
      .subscribe(adminDetail => {
        this.techDetail = adminDetail
      });
  }


  ngOnInit() {
    this.tech_id = +this.route.snapshot.paramMap.get('id');
    this.techDetail = new TechnologyDetail();
    this.getTechnologyDetail();
  }

}

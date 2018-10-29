import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CommonserviceService } from './../../commonservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( private commonservice: CommonserviceService,
    private route: ActivatedRoute) {
  }
  product: any = [];

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.viewDetails(id);
  }

  viewDetails(id) {
    this.product = this.commonservice.getProductDetails(id);
  }
}

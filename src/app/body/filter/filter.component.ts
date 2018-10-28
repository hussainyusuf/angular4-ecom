import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from './../../commonservice.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  category = 0;
  constructor(
		private service: CommonserviceService
  	) { }

  ngOnInit() {
  }

  filterByCategory(val){
    this.category = val;
  	this.service.filterCategory(val);
  }

}

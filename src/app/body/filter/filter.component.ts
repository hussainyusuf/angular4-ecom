import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from './../../commonservice.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(
		private service: CommonserviceService
  	) { }

  ngOnInit() {
  }

  filterByCategory(val){
  	this.service.filterCategory(val);
  }

}

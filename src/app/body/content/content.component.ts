import { Component, OnInit, Input  } from '@angular/core';
import { CommonserviceService } from './../../commonservice.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	// @Input() searchTerm: String;
	apiData: any = []; 
	display = "none";
	constructor(
		private commonservice: CommonserviceService
	) { }

	ngOnInit() {
		this.getAllData();		
	}
	
	getAllData(){
		this.commonservice.getProducts().subscribe(data => {
	    	this.apiData = data;
	    });
	}

	viewDetails(data){
		this.display = "block";
		this.commonservice.changeCurrentProduct(data);
	}
}

import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from './../commonservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
	searchTerm: string;
	testString: string;
	constructor(
		private service: CommonserviceService
		) { 
	}

	ngOnInit() {
		this.testString = "Test data";
	}

	public onSearch(searchTerm: string): void {
		this.service.filter(searchTerm);
	}
}

import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from './../../commonservice.service';
import { ContentComponent } from './../content/content.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  product: any = [];
	display = "none";
  
  constructor(
		private commonservice: CommonserviceService,
		private contentcomponent: ContentComponent,
  	) { }

  ngOnInit() {
  	this.getCurrentProduct();
  }

  getCurrentProduct() {
  	this.commonservice.getProduct().subscribe(data => {
      this.product = data;
      if(this.product!==undefined){
        console.log("modal current product....",this.product);

      }
    });
  }

	closeModal(){
		this.contentcomponent.display = "none";
	}


}

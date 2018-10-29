import { Component, OnInit, Input, HostListener  } from '@angular/core';
import {Router} from '@angular/router';
import { CommonserviceService } from './../../commonservice.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  apiData: any = [];
  data: any = [];
  display = 'none';
  elements = [1];
  count = 0;
  limit = 5;
  constructor(
  private commonservice: CommonserviceService,
  private router: Router
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  @HostListener('window:scroll', [])onScroll(): void {
    if (this.bottomReached()) {
      this.data = this.apiData.slice(this.count, this.limit);
      this.limit = this.limit + 5;
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

  getAllData() {
    this.commonservice.getProducts().subscribe(data => {
      this.apiData = data;
      this.data = this.apiData.slice(this.count, this.limit);
      this.limit = this.limit + 5;
    });
  }

  viewDetails(data) {
    this.display = 'block';
    this.commonservice.changeCurrentProduct(data);
  }

  viewDetailedPage(id: Number) {
    this.router.navigate(['/products/details/' , id]);
  }
}

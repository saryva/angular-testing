import { ProductInfo } from './../../models/product-info.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  @Input() product: ProductInfo;
  starCount = 5;
  rating: number;

  constructor() { }

  ngOnInit() {
  }

  onRatingChanged(rating: number) {
    console.log(rating);
    this.rating = rating;
  }

}

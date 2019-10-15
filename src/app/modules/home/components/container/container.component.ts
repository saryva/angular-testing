import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '@appShared/models/product-info.model';

// Service
import { ProductService } from '@appCore/http/product/product.service';

// Mocks
import { products } from '@appCore/mocks/product-info.mock';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  products: ProductInfo[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(result => {
      if (result) {
        this.products = result;
      } else {
        this.products = [];
      }
    });
  }
}

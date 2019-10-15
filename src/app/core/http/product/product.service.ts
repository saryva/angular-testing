import { Injectable } from '@angular/core';
import { ProductInfo } from '@appShared/models/product-info.model';
import { Observable } from 'rxjs';

// Mocks
import { products } from '@appCore/mocks/product-info.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<ProductInfo[]> {
    return new Observable(observer => {
      observer.next(products);
      observer.complete();
    });
  }
}

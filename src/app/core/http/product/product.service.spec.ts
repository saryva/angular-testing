import { TestBed } from '@angular/core/testing';

// App
import { ProductService } from './product.service';

// Mocks
import { products } from '@appCore/mocks/product-info.mock';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('getProducts() should return data', () => {
    const service = new ProductService();

    service.getProducts().subscribe((res) => {
      expect(res).toEqual(products);
    });
  });
});

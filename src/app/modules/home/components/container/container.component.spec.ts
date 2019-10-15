import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

// Component
import { ContainerComponent } from './container.component';
import { ProductInfoComponent } from '@appShared/components/product-info/product-info.component';
import { RatingComponent } from '@appShared/components/rating/rating.component';

// Services
import { ProductService } from '@appCore/http/product/product.service';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

// Mocks
import { products } from '@appCore/mocks/product-info.mock';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let service: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent, ProductInfoComponent, RatingComponent],
      imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // beforeEach(() => {
  //   service = TestBed.get(ProductService);
  // });

  // it('product property should be equal to products', () => {
  //   spyOn(service, 'getProducts').and.returnValue(of(products));
  //   component.ngOnInit();
  //   expect(component.products).toBe(products);
  // });

  // it('product property should be null', () => {
  //   spyOn(service, 'getProducts').and.returnValue(of(null));
  //   component.ngOnInit();
  //   expect(component.products).toBeLessThanOrEqual(0);
  // });

  describe('ProductService', () => {
    beforeEach(() => {
      service = TestBed.get(ProductService);
    });

    it('product property should be equal to products', () => {
      spyOn(service, 'getProducts').and.returnValue(of(products));
      component.ngOnInit();
      expect(component.products).toBe(products);
    });

    it('product property should be null', () => {
      spyOn(service, 'getProducts').and.returnValue(of(null));
      component.ngOnInit();
      expect(component.products).toBeLessThanOrEqual(0);
    });
  });
});

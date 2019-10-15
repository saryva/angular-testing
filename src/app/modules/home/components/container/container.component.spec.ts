import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';

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
import { TitleCasePipe } from '@appShared/pipes/title-case.pipe';

// const translations = require('../../../../assets/i18n/es.json');

const translations: any = {
  titulo: 'titulo'
};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let service: ProductService;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent, ProductInfoComponent, RatingComponent, TitleCasePipe],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: FakeLoader }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    translate = TestBed.get(TranslateService);
    translate.setTranslation('es', translations);
    translate.use('es');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include the title of the page', () => {
    const title = fixture.nativeElement.querySelector('.app-container h1').textContent.trim();
    expect(title).toContain('titulo');
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

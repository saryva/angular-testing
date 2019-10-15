import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Component
import { ProductInfoComponent } from './product-info.component';
import { RatingComponent } from '../rating/rating.component';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// Mocks
import { products } from '@appCore/mocks/product-info.mock';
import { TitleCasePipe } from '@appShared/pipes/title-case.pipe';

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInfoComponent, RatingComponent, TitleCasePipe ],
      imports: [ MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    component.product = products[0];
    component.starCount = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a title', () => {
    const title = fixture.nativeElement.querySelector('.card mat-card-title').textContent.trim();
    expect(title).not.toBeNull();
  });

  it('title text should be', () => {
    const title = fixture.nativeElement.querySelector('.card mat-card-title').textContent.trim();
    expect(title.toLowerCase()).toBe(products[0].name.toLowerCase());
  });

  it('should show a description', () => {
    const description = fixture.nativeElement.querySelector('.card mat-card-content p').textContent.trim();
    expect(description).not.toBeNull();
  });

  it('description text should be', () => {
    const description = fixture.nativeElement.querySelector('.card mat-card-content p').textContent.trim();
    expect(description).toBe(products[0].description);
  });

  it('should show a image', () => {
    const image = fixture.nativeElement.querySelector('.card img').src;
    expect(image).toContain(products[0].imageUrl);
  });

  it('should be called with whatever the counter change event emits', () => {
    spyOn(component, 'onRatingChanged');
    const counter = fixture.debugElement.query(By.directive(RatingComponent));
    const cmp = counter.componentInstance;
    cmp.ratingChange.emit(1);
    expect(component.onRatingChanged).toHaveBeenCalledWith(1);
  });

  it('should change the rating', () => {
    component.rating = 1;
    component.onRatingChanged(2);
    expect(component.rating).toEqual(2);
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { RatingComponent } from './rating.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingComponent ],
      imports: [ MatButtonModule, MatIconModule, MatTooltipModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.rating = 2;
    component.starCount = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should set rating', () => {
    const rate = 3;
    component.rate(rate);

    expect(component.rating).toBe(rate);
  });

  it('star color shold be red', () => {
    component.rating = 1;
    const color = component.getColor();
    expect(color).toBe('#DD2C00');
  });

  it('star color shold be yellow', () => {
    component.rating = 3;
    const color = component.getColor();
    expect(color).toBe('#FFCA28');
  });

  it('star color shold be green', () => {
    component.rating = 4;
    const color = component.getColor();
    expect(color).toBe('#76FF03');
  });

  it('star color shold be grey', () => {
    component.rating = 6;
    const color = component.getColor();
    expect(color).toBe('#E0E0E0');
  });

  it('star click have to icon "star"', () => {
    const rate = 3;

    const iconInit = fixture.nativeElement.querySelector('#star_3 .mat-button-wrapper .mat-icon').textContent.trim();
    expect(iconInit).toBe('star_border');
    component.rate(rate);

    // spyOn(component, 'showIcon').and.callThrough();
    // spyOn(component, 'showIcon').and.returnValue('star');
    component.showIcon(rate);

    // Se detecta el cambio que se realiza en el icono de la estrella
    fixture.detectChanges();

    const iconFinish = fixture.nativeElement.querySelector('#star_3 .mat-button-wrapper .mat-icon').textContent.trim();
    expect(iconFinish).toBe('star');
  });

  // it('should not output duplicate values', () => {

  //   spyOn(component.ratingChange, 'emit');

  //   component.rating = 1;
  //   component.rate(1);

  //   expect(component.ratingChange.emit).not.toHaveBeenCalled();
  // });

  it('should emit on click', () => {
    // spy on event emitter

    spyOn(component.ratingChange, 'emit');

    // trigger the click
    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    component.rate(1);
    fixture.detectChanges();
    expect(component.ratingChange.emit).toHaveBeenCalledWith(1);
 });
});

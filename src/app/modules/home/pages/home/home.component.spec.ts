import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Component
import { HomeComponent } from './home.component';
import { MenuComponent } from '@appModules/home/components/menu/menu.component';
import { ContainerComponent } from '@appModules/home/components/container/container.component';
import { ProductInfoComponent } from '@appShared/components/product-info/product-info.component';
import { RatingComponent } from '@appShared/components/rating/rating.component';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, MenuComponent, ContainerComponent, ProductInfoComponent, RatingComponent ],
      imports: [ MatSidenavModule, MatIconModule, MatMenuModule,  MatCardModule, MatButtonModule, MatIconModule,
                MatTooltipModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

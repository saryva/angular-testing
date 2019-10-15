import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Component
import { MenuComponent } from './menu.component';

// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

// Mocks
import { menuItems } from '@appCore/mocks/menu-items.mock';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let buttonMenu;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [MatMenuModule, MatIconModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.items = menuItems;
    fixture.detectChanges();

    buttonMenu = fixture.nativeElement.querySelector('#userMenu');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('open the menu when clicking on the account button', async () => {
    buttonMenu.click();
    const menu = fixture.nativeElement.parentNode.querySelector('.mat-menu-panel');
    expect(menu).toBeTruthy();
  });

  it('first item text should be', () => {
    // Open menu
    buttonMenu.click();

    const description = fixture.nativeElement.parentNode.querySelector(
      '.cdk-overlay-container .cdk-overlay-connected-position-bounding-box .mat-menu-panel .mat-menu-content .mat-menu-item span'
    ).textContent.trim();

    expect(description).toBe(menuItems[0].description);
  });
});

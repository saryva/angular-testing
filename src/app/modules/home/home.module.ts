// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '@appShared/shared.module';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { ContainerComponent } from './components/container/container.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    TranslateModule
  ],
  declarations: [
    HomeComponent,
    MenuComponent,
    ContainerComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

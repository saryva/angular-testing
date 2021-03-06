// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

// App
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { RatingComponent } from './components/rating/rating.component';
import { TitleCasePipe } from './pipes/title-case.pipe';


@NgModule({
  declarations: [ProductInfoComponent, RatingComponent, TitleCasePipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    MatCardModule,
    RatingComponent,
    ProductInfoComponent,
    TitleCasePipe
  ]
})
export class SharedModule { }

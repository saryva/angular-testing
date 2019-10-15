import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

// http://embed.plnkr.co/Qi6tEdIyaRoGgSj2z4M9/
// https://stackblitz.com/edit/angular-material-star-rating-i2f93q
// https://medium.com/@mikeyny/creating-an-angular-ionic-rating-component-e616f3e11300
// https://stackblitz.com/edit/angular-material-star-rating-i2f93q?file=app%2Fstar-rating%2Fstar-rating.component.ts

enum COLORS {
  GREY = '#E0E0E0',
  GREEN = '#76FF03',
  YELLOW = '#FFCA28',
  RED = '#DD2C00'
}

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Input() starCount = 5;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  color: string;
  elements = [];

  constructor() {}

  ngOnInit() {

    for (let index = 0; index < this.starCount; index++) {
      this.elements.push(index);
    }
  }

  // range(n: number): any[] {
  //   return Array(n);
  // }

  getColor() {
      switch (this.rating) {
        case 1:
        case 2:
          return COLORS.RED;
        case 3:
          return COLORS.YELLOW;
        case 4:
        case 5:
          return COLORS.GREEN;
        default:
          return COLORS.GREY;
      }
    }
  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  rate(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(rating);
  }
}

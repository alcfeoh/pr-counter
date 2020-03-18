import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  allReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  totalAmount = this.allReviews.reduce((t,i) => t+i, 0);
  values = Array(15).fill().map((_, i) => (i+1) *8.25);

  addReview(amount: number) {
    this.allReviews.push(amount);
    this.totalAmount += amount;
    localStorage.setItem('reviews', JSON.stringify(this.allReviews));
  }

  clear() {
     localStorage.removeItem('reviews');
     this.allReviews = [];
     this.totalAmount = 0;
  }

}

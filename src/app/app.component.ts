import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  totalAmount = 0;
  allReviews = localStorage.getItem('reviews') || [];
  values = Array(15).fill().map((_, i) => (i+1) *8.25);

  addReview(amount: number) {
    this.totalAmount += amount; 
    this.allReviews.push(amount);
    localStorage.setItem('reviews', JSON.stringify(this.allReviews));
  }

}

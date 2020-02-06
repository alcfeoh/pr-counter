import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  totalAmount = 0;
  totalReviews = 0;
  values = [8.25, 8.25 * 2, 8.25 * 3, 8.25 * 4, 8.25 * 5];
}

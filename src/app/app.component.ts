import { Component } from '@angular/core';
import { AppState } from './shared';

@Component({
  selector: 'bc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byCOB';
  constructor(public s: AppState) {
  }
}

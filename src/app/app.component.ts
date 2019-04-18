import { Component } from '@angular/core';
import { AppState } from './shared';

@Component({
  selector: 'bycob-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byCOB';
  constructor(public s: AppState) {
  }
}

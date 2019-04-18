import { Component, OnInit } from '@angular/core';
import { AppState } from '../shared';

@Component({
  selector: 'bycob-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(public s: AppState) {
    s.signedIn = true;
   }

  public ngOnInit(): void {
  }

}

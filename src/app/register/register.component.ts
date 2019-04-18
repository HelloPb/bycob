import { Component, OnInit } from '@angular/core';
import { AppState } from '../shared';

@Component({
  selector: 'bycob-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public s: AppState) {
    s.signedIn = false;
  }

  public ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AppState } from '../shared';

@Component({
  selector: 'bc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public s: AppState) {
    s.signedIn = false;
   }

  public ngOnInit(): void {
  }

}

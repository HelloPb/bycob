import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppState {

  public signedIn = false;

  constructor() { }
}

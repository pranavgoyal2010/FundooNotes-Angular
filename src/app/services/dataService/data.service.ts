import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private drawerState = new BehaviorSubject(false);
  currDrawerState = this.drawerState.asObservable();

  constructor() { }

  changeDrawerState(state: boolean) {
    this.drawerState.next(state)
  }
}

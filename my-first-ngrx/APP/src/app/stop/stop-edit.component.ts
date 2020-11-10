import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../models/app-state';
import * as stopActions from '../actions/stop.actions'
import { Stop } from '../models/Stop';

@Component({
  selector: 'stop-edit',
  templateUrl: './stop-edit.component.html',
  styleUrls: ['./stop-edit.component.less']
})
export class StopEditComponent  {
  stops$ = new Observable<any>();
  @Input() item:Stop = null;
  @Output() itemChange = new EventEmitter();

  constructor(private store:Store<AppState>) {
    this.stops$ = this.store.select(state => state.stops);
  }

  save() {
    this.store.dispatch(new stopActions.SaveStopAction(this.item));
    this.item = null;
    this.itemChange.emit(this.item);
  }
}

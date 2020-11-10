import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../models/app-state';
import * as stopActions from '../actions/stop.actions'
import { Stop } from '../models/Stop';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StopListComponent implements OnInit {
  stops$ = new Observable<any>();

  selectedItem:Stop = null;

  constructor(private store:Store<AppState>) {
    this.stops$ = this.store.select(state => state.stops);
  }

  ngOnInit() {
    this.getStops();
  }

  getStops() {
    this.store.dispatch(new stopActions.LoadStopsAction());
  }

  deleteItem(item) {
    this.store.dispatch(new stopActions.DeleteStopAction(item.data.ID));
  }

  editItem(item) {
    this.selectedItem = new Stop().copyFrom(item.data);
  }
}

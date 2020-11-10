import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StopService } from '../services/stop.service';

import * as stopActions from '../actions/stop.actions'
import { map, mergeMap, catchError, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Stop } from '../models/Stop';

@Injectable()
export class StopEffects {
  constructor(
    private stopService: StopService,
    private actions$: Actions) {
  }

  deleteStop$ = createEffect(() => this.actions$.pipe(
    ofType(stopActions.DELETE_STOP),
    switchMap((action:any) => this.stopService.deleteStop(action.payload)
      .pipe(
        map((ID:number) => (new stopActions.DeleteStopSuccessAction(ID)),
        catchError(() => EMPTY)
      ))
  )))

  loadStops$ = createEffect(() => this.actions$.pipe(
    ofType(stopActions.LOAD_STOPS),
    switchMap(() => this.stopService.getStops()
      .pipe(
        map((items:Stop[]) => (new stopActions.LoadStopsSuccessAction(items)),
        catchError(() => EMPTY)
      ))
  )))


  saveStop$ = createEffect(() => this.actions$.pipe(
    ofType(stopActions.SAVE_STOP),
    switchMap((action:any) => this.stopService.postStop(action.payload)
      .pipe(
        map((items:Stop[]) => (new stopActions.SaveStopSuccessAction(items)),
        catchError(() => EMPTY)
      ))
  )))
}


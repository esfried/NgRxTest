import { Stop } from '../models/Stop';

export const DELETE_STOP = 'DELETE_STOP'
export const DELETE_STOP_SUCCESS = 'DELETE_STOP_SUCCESS'

export const LOAD_STOPS = 'LOAD_STOPS'
export const LOAD_STOPS_SUCCESS = 'LOAD_STOPS_SUCCESS'

export const SAVE_STOP = 'SAVE_STOP'
export const SAVE_STOP_SUCCESS = 'SAVE_STOP_SUCCESS'

export class DeleteStopAction {
  readonly type = DELETE_STOP;
  constructor(public payload: number) {
  }
}

export class DeleteStopSuccessAction {
  readonly type = DELETE_STOP_SUCCESS;
  constructor(public payload: number) {
  }
}

export class LoadStopsAction {
  readonly type = LOAD_STOPS;
  constructor() { }
}

export class LoadStopsSuccessAction {
  readonly type = LOAD_STOPS_SUCCESS;
  constructor(public payload: Stop[]) { }
}

export class SaveStopAction {
  readonly type = SAVE_STOP;
  constructor(public payload: Stop) {
  }
}

export class SaveStopSuccessAction {
  readonly type = SAVE_STOP_SUCCESS;
  constructor(public payload: Stop[]) { }
}

export type Action
  = DeleteStopAction
  | DeleteStopSuccessAction
  | LoadStopsAction
  | LoadStopsSuccessAction
  | SaveStopAction
  | SaveStopSuccessAction


import * as stopActions from './../actions/stop.actions'

export function stopReducer(state = [], action: stopActions.Action) {
  switch (action.type) {
    case stopActions.LOAD_STOPS_SUCCESS:
      return action.payload

    case stopActions.SAVE_STOP_SUCCESS:
      return action.payload

    case stopActions.DELETE_STOP_SUCCESS:
      return state.filter(stop => stop.ID !== action.payload);

    default:
      return state
  }
}

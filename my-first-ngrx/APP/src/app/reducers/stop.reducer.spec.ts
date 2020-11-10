import * as stopActions from './../actions/stop.actions';
import { stopReducer} from './stop.reducer';

describe('stopReducer',() => {
  describe('deleteStopAction',() => {
    it('should delete a stop',() => {
      const currentState = [
        { ID: 1, Name: 'Stop 1'},
        { ID: 2, Name: 'Stop 2'},
      ];

      const expectedResult = [
        { ID: 2, Name: 'Stop 2'},
      ];

      const action = new stopActions.DeleteStopSuccessAction(1);
      const result = stopReducer(currentState, action);

      expect(result).toEqual(expectedResult);
    })
  })
});

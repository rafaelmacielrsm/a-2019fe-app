import { combineReducers } from 'redux';
import C from './/constant';
import { IAction } from './actions';

export interface IState {
  isFetching: boolean,
}

const isFetching = ( state: boolean = true, action: IAction): boolean => {
  switch ( action.type ) {
  case C.FETCH:
    return true;
  case C.CANCEL_FETCH:
    return false;
  default:
    return state;
  }
};

export default combineReducers({
  isFetching,
});

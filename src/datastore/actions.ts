import C from './constant';
/**
 * Interface for classes that represent a redux action.
 *
 * @interface
 * @property {string} type Used to decide the state change
 * @property {any} [payload] Optional data that may be needed in state changes
 */
export interface IAction {
  type: string,
  payload?: any
}

/** Constructs a redux action to active the boolean isFetching */
const performFetch = (): IAction => ({
  type: C.FETCH,
});
/** Constructs a redux action to deactivate the boolean isFetching */
const cancelFetch = (): IAction => ({
  type: C.CANCEL_FETCH,
});

export {
  performFetch,
  cancelFetch,
};

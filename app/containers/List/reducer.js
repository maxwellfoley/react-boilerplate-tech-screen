import { fromJS } from 'immutable';

const initialState = fromJS({ items: [], message: '' });

function listReducer(state = initialState, action) {
  if (action.type === 'ADD_ITEM') {
    return state
      .set('items', state.get('items').push({ item: action.payload }))
      .set('message', `Successfully added new item to list: ${action.payload}`);
  }
  if (action.type === 'SET_ITEMS') {
    return state.set('items', fromJS(action.payload));
  }
  if (action.type === 'MESSAGE') {
    return state.set('message', `ERROR: ${action.payload}`);
  }
  return state;
}

export default listReducer;

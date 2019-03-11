import listReducer from '../reducer';

describe('listReducer', () => {
  it('returns the initial state', () => {
    expect(listReducer(undefined, {}).toJS()).toEqual({
      items: [],
      message: '',
    });
  });

  it('adds an item', () => {
    expect(
      listReducer(undefined, {
        type: 'ADD_ITEM',
        payload: 'hello',
      }).toJS(),
    ).toEqual({
      items: [{ item: 'hello' }],
      message: 'Successfully added new item to list: hello',
    });
  });
});

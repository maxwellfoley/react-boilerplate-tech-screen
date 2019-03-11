import { createSelector } from 'reselect';

/**
 * Select items in list
 */

const selectItems = state => state.get('list').get('items');

const selectItemsJS = createSelector(selectItems, items => items.toJS());

export { selectItems, selectItemsJS };

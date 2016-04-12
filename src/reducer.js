import {List, Map} from 'immutable';

const getNextEmptyItem = (items) => {
  return Map({
    id: items.map(item => item.get('id')).max() + 1,
    content: '',
    selected: true
  });
};

const clickItem = (state, action) => {
  const items = state.get('items');
  const index = items.findIndex(item => item.get('id') === action.item.get('id'));
  return state.updateIn(['items', index], item => item.set('selected', true));
};

const updateItem = (state, action) => {
  const items = state.get('items');
  const target = action.item;
  const index = items.findIndex(item => item.get('id') === target.get('id'));

  const newState = state.updateIn(['items', index], item => {
    return item.set('content', action.value);
  });

  return newState;
};

const updateNewItem = (state, action) => {
  return state.updateIn(['newItem'], (x) => x.set('content', action.value));
};

const createItem = (state, action) => {
  const items = state.get('items');

  return state.merge({
      newItem: getNextEmptyItem(items),
      items: items.push(action.item.set('selected', false))
  });
};

const deselectItem = (state, action) => {
  const items = state.get('items');
  const index = items.findIndex(item => item.get('id') === action.item.get('id'));

  return state.updateIn(['items', index], item => {
    return item.set('selected', false);
  });
};

/*
 *  item = {
 *    id: ...
 *    state: ...
 *    content: ...
 *    indent: ...
 *    type: ...
 *  }
 */

const setState = (state, action) => {
  const items = List([
    Map({
      id: 0,
      content: 'Hello World',
      selected: false
    }),
    Map({
      id: 1,
      content: 'Goodby Moon',
      selected: false
    })
  ]);
  return Map({
    newItem: getNextEmptyItem(items),
    items
  });
};



export default function(state, action) {
  switch(action.type) {
    case 'SELECT_ITEM':
        return clickItem(state, action);
    case 'DESELECT_ITEM':
        return deselectItem(state, action);
    case 'UPDATE_ITEM':
        return updateItem(state, action);
    case 'UPDATE_NEW_ITEM':
        return updateNewItem(state, action);
    case 'SET_STATE':
        return setState(state, action);
    case 'CREATE_ITEM':
        return createItem(state, action);
  }
  console.error("Undefined action: ", action);
  return state;
}

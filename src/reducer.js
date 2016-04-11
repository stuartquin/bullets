import {List, Map} from 'immutable';

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
  return Map({
    items: List([
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
    ])
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
    case 'SET_STATE':
        return setState(state, action);
  }

  return {
  }
}

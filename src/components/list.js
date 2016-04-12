import React from 'react';
import {connect} from 'react-redux';
import {BulletItem} from './bullet-item';
import {BulletInput} from './bullet-input';
import {BulletInputNew} from './bullet-input-new';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;

    return (
      <div>
        {items.map(item =>(
          <BulletItem
            key={item.id}
            onItemUpdated={this.props.onItemUpdated}
            onItemClicked={this.props.onItemClicked}
            onItemBlur={this.props.onItemBlur}
            item={item}/>
        ))}
        <div key={this.props.newItem.id}>
          <BulletInput
            item={this.props.newItem}
            onItemBlur={this.props.onNewItemBlur}
            onItemUpdated={this.props.onNewItemUpdated}
          />
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    newItem: state.get('newItem'),
    items: state.get('items')
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onNewItemUpdated: (item, value) => {
      dispatch({
        item,
        value,
        type: 'UPDATE_NEW_ITEM'
      });
    },

    onNewItemBlur: (item) => {
      dispatch({
        item,
        type: 'CREATE_ITEM'
      });
    },

    onItemUpdated: (item, value) => {
      dispatch({
        item,
        value,
        type: 'UPDATE_ITEM'
      });
    },

    onItemClicked: (item) => {
      dispatch({
        item,
        type: 'SELECT_ITEM'
      });
    },

    onItemBlur: (item) => {
      dispatch({
        item,
        type: 'DESELECT_ITEM'
      });
    }
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export {ListContainer};

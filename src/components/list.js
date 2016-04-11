import React from 'react';
import {connect} from 'react-redux';
import {BulletItem} from './bullet-item';
import {BulletInput} from './bullet-input';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;

    const newItem = {
      content: '',
      id: null
    }

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
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    items: state.get('items')
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
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

import React from 'react';
import {connect} from 'react-redux';
import {BulletItem} from './bullet-item';
import {BulletInput} from './bullet-input';
import {BulletInputNew} from './bullet-input-new';


const style = {
  fontFamily: 'Verdana, Geneva, sans-serif'
};

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;

    return (
      <div style={style}>
        {items.map(item =>(
          <BulletItem
            key={item.get('id')}
            onItemUpdated={this.props.onItemUpdated}
            onItemClicked={this.props.onItemClicked}
            onItemBlur={this.props.onItemBlur}
            onSpecialKey={this.props.onSpecialKey}
            item={item}/>
        ))}
      </div>

    );
  }
}

const getSpecialKeyType = (item, keyCode) => {
  if (keyCode === 13) {
    return 'INSERT_AFTER';
  }
  if (keyCode === 8 && item.get('content').length === 0) {
    return 'REMOVE_ITEM';
  }
};

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
    },

    onSpecialKey: (item, keyCode) => {
      const type = getSpecialKeyType(item, keyCode)
      if (type) {
        dispatch({item, type});
      }
    }
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export {ListContainer};

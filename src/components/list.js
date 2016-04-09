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
      <ul>
        {items.map(item =>(
          <li key={item.get('id')}>
            <BulletItem
              onItemUpdated={this.props.onItemUpdated}
              onItemClicked={this.props.onItemClicked}
              item={item}/>
          </li>
        ))}
      </ul>
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
        type: 'UPDATED'
      });
    },

    onItemClicked: (item) => {
      dispatch({
        item,
        type: 'CLICK'
      });
    }
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export {ListContainer};

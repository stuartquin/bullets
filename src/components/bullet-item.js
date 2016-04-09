import React from 'react';
import {BulletInput} from './bullet-input';

const BulletItem = (props) => {
  const item = props.item;

  if (item.get('selected')) {
    return (
      <BulletInput
        item={item}
        onItemUpdated={(value) => props.onItemUpdated(item, value)} />
    );
  } else {
    return (
      <a onClick={() => props.onItemClicked(item)}>
      {item.get('content')}
      </a>
    );
  }
};

export {BulletItem};

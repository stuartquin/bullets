import React from 'react';
import {BulletInput} from './bullet-input';

const BulletItem = (props) => {
  const item = props.item;

  if (item.get('selected')) {
    return (
      <div key={item.id}>
        <BulletInput
          item={item}
          onItemBlur={props.onItemBlur}
          onItemUpdated={props.onItemUpdated} />
      </div>
    );
  } else {
    return (
      <div key={item.id}
        onClick={() => props.onItemClicked(item)}>
        {item.get('content')}
      </div>
    );
  }
};

export {BulletItem};

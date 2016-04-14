import React from 'react';
import {BulletInput} from './bullet-input';

const style = {
  minHeight: '30px',
  minWidth: '500px'
};

const BulletItem = (props) => {
  const item = props.item;

  if (item.get('selected')) {
    return (
      <div style={style}>
        <BulletInput
          item={item}
          onSpecialKey={props.onSpecialKey}
          onItemBlur={props.onItemBlur}
          onItemUpdated={props.onItemUpdated} />
      </div>
    );
  } else {
    return (
      <div style={style} onClick={() => props.onItemClicked(item)}>
        {item.get('content')}
      </div>
    );
  }
};

export {BulletItem};

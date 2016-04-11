import React from 'react';

const BulletInput = (props) => {
  return (
    <input
      value={props.item.get('content')}
      onBlur={(event) => {
        props.onItemBlur(props.item);
      }}
      onChange={(event) => {
        props.onItemUpdated(props.item, event.target.value);
      }} />
  );
};

export {BulletInput};

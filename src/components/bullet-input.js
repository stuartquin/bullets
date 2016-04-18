import React from 'react';
require('../sass/bullet-input.scss');

const BulletInput = (props) => {
  return (
    <input
      autoFocus
      className='bullet-input'
      value={props.item.get('content')}
      onBlur={(event) => {
         props.onItemBlur(props.item);
      }}
      onKeyUp={(event) => {
        if (event.keyCode === 13 || event.keyCode === 8) {
          props.onSpecialKey(props.item, event.keyCode);
        }
      }}
      onChange={(event) => {
        props.onItemUpdated(props.item, event.target.value);
      }} />
  );
};

export {BulletInput};

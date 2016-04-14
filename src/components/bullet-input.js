import React from 'react';

const style = {
  minHeight: '30px',
  width: '100%',
  backgroundColor: '#f8f5ec',

  fontFamily: 'Verdana, Geneva, sans-serif',
  fontSize: '16px',

  border: 'none',

  padding: '4px'
};

const BulletInput = (props) => {
  return (
    <input
      style={style}
      autoFocus
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

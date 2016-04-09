import React from 'react';

const BulletInput = (props) => {
  return (
    <div
      contentEditable={true}
      onKeyPress={(event) => {
        if (event.which === 13) {
          props.onItemUpdated(event.target.innerText);
        }
      }}>
      {props.item.get('content')}
    </div>
  );
};

export {BulletInput};

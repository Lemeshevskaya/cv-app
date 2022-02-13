import React from 'react';
import '../accets/styles/modules/_button.scss';

export default function Button({text, icon}) {
  return (
    <button className='button-main'>
      <span className='button-main__icon'>
        {icon}
      </span>
      <span className='button-main__text'>
        {text}
      </span>
    </button>
  );
}
 
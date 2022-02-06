import React from 'react';
import '../accets/styles/modules/_button.scss';

export default function Button({text, icon}) {
  return <>
    <button className='button'>
      <span className='button__icon'>
        {icon}
      </span>
      <span className='button__text'>
        {text}
      </span>
    </button>
  </>;
}
 
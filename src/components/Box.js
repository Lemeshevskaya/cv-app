import React from 'react';
import '../accets/styles/modules/_box.scss'

export default function Box(props) {
  return (
    <div className='box'>
      <h2 className='box__title'>
        {props.title}
      </h2>
      <p className='box__text'>
        {props.content}
      </p>
      {props.children}
    </div>
  );
}

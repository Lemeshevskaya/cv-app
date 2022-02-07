import React from 'react';
import '../accets/styles/modules/_box.scss'

export default function Box({title, content}) {
  return (
    <div className='box'>
      <h2 className='box__title'>
        {title}
      </h2>
      <p className='box__text'>
        {content}
      </p>
    </div>
  );
}

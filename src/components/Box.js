import React from 'react';
import Info from './Info';
import '../accets/styles/modules/_box.scss'

export default function Box(props) {
  return (
    <div className='box'>
      <h2 className='box__title'>
        {props.title}
      </h2>
      <Info data = {props.content}/>
      {props.children}
    </div>
  );
}

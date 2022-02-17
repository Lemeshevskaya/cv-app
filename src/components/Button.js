import React from 'react';
import '../assets/styles/modules/_button.scss';

export default function Button({text, icon}) {
  
  return (
    <button className='button-main'>
      {icon && 
        <span className='button-main__icon'>
          {icon}
        </span>
      }
      {text && 
        <span className='button-main__text'>
          {text}
        </span>
      }
    </button>
  );
}
 
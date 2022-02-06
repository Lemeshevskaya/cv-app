import React from 'react';
import '../accets/styles/modules/_photoBox.scss'

export default function PhotoBox({name, title, description, avatar}) {
  return <div className='photoBox'>
    <div className='photoBox__img-box'>
      <img className='photoBox__img' src={avatar} alt="photo_user" />
    </div>
    <h1 className='photoBox__main'>{name}</h1>
    <h2 className='photoBox__title'>{title}</h2>
    <p className='photoBox__text'>{description}</p>
  </div>;
}

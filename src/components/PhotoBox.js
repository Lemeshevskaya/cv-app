import React from 'react';
import '../assets/styles/modules/_photoBox.scss'

export function PhotoBox({name, title, description, avatar}) {
  
  return (
    <div className='photoBox'>
      <div className = {!description ? 'photoBox__img-box photoBox__img-box_menu' : 'photoBox__img-box'}>
        <img className = 'photoBox__img' src={avatar} alt="photo_user" />
      </div>
      <h1 className = {!description ? 'photoBox__main photoBox__main_menu' : 'photoBox__main'}>
        {name}
      </h1>
      <h2 className='photoBox__title'>
        {title}
      </h2>
      <p className='photoBox__text'>
        {description}
      </p>
    </div>
  )
}

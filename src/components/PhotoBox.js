import React, { useState, useEffect }from 'react';
import '../accets/styles/modules/_photoBox.scss'

export default function PhotoBox({name, title, description, avatar}) {
  const [viewPhotoBox, setViewPhotoBox] = useState(false);

  const showPhoto = () => {
    if (window.innerWidth < 600) {
      setViewPhotoBox('bar');
    } else {
      setViewPhotoBox(false);
    }
  };

  useEffect(() => {
    showPhoto();
  }, []);

  window.addEventListener('resize', showPhoto);

  console.log(viewPhotoBox);
  const photoBox = () => {
    if (viewPhotoBox === 'bar' && !description) {
      return (
        <div className = 'photoBox__img-box photoBox__img-box_bar'>
          <img className='photoBox__img' src={avatar} alt="photo_user" />
        </div>
      )
    } else if (!description) {
      return (
        <>
          <div className = 'photoBox__img-box photoBox__img-box_menu'>
            <img className='photoBox__img' src={avatar} alt="photo_user" />
          </div>
          <h1 className='photoBox__main photoBox__main_menu'>{name}</h1>
        </>
      )
    } else {
      return (
        <>
          <div className = 'photoBox__img-box'>
            <img className='photoBox__img' src={avatar} alt="photo_user" />
          </div>
          <h1 className='photoBox__main'>{name}</h1>
        </>
      )
    }
  }

  return (
  <div className='photoBox'>
    {photoBox()}
    <h2 className='photoBox__title'>{title}</h2>
    <p className='photoBox__text'>{description}</p>
  </div>
  )
}

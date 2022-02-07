import React, { useState } from 'react';
import '../accets/styles/modules/_panel.scss'
import PhotoBox from './PhotoBox';
import Navigation from './Navigation';
import Button from './Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default function Panel() {
  const[click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <section className={click ? 'panel' : 'panel panel_non-active'}>
      <div className={click ? 'panel__nav' : 'panel__nav panel__nav_non-active'}>
        <button className='panel__icon' onClick={handleClick}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <PhotoBox name="John Doe" avatar="http://avatars0.githubusercontent.com/u/246180?v=4"/>
        <Navigation/>
        <Link to = "/">
          <Button icon = { < FontAwesomeIcon icon = "chevron-left" /> } text = 'Go back'/>
        </Link >
      </div>
    </section>
  ); 
}

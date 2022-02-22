import React from 'react';
import '../assets/styles/modules/_panel.scss'
import { PhotoBox, Navigation, Button } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { showAction, hideAction } from '../features/panel/panelSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Panel() {
  const dispatch = useDispatch();
  const visibility = useSelector(state => state.visibility.show);

  return (
    <section className={visibility ? 'panel' : 'panel panel_non-active'}>
      <div className='panel__nav'>
        <button className='panel__icon' onClick = {visibility ? () => dispatch(hideAction()) : () => dispatch(showAction())}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <PhotoBox name="John Doe" avatar="http://avatars0.githubusercontent.com/u/246180?v=4"/>
        <Navigation />
        <Link className='panel__button' to = "/">
          <Button icon = { < FontAwesomeIcon icon = "chevron-left" /> } text = 'Go back'/>
        </Link >
      </div>
    </section>
  ); 
}

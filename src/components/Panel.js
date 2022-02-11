import React from 'react';
import '../accets/styles/modules/_panel.scss'
import PhotoBox from './PhotoBox';
import Navigation from './Navigation';
import Button from './Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { showAction, hideAction } from '../actions/visibilityAction';
import { useSelector, useDispatch } from 'react-redux';

export default function Panel(props) {
  const dispatch = useDispatch();
  const visibility = useSelector(state => state.visibility.show);

  return (
    <div className={visibility ? 'panel__try' : 'panel__try panel__try_non-active'}>
      <section className={visibility ? 'panel' : 'panel panel_non-active'}>
        <button className='panel__icon' onClick = {visibility ? () => dispatch(hideAction()) : () => dispatch(showAction())}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <PhotoBox name="John Doe" avatar="http://avatars0.githubusercontent.com/u/246180?v=4"/>
        <Navigation educationRef = {props.education} expertiseRef = {props.expertise} aboutRef = {props.about}/>
        <Link className='panel__button' to = "/">
          <Button icon = { < FontAwesomeIcon icon = "chevron-left" /> } text = 'Go back'/>
        </Link >
      </section>
  </div>
   
  ); 
}

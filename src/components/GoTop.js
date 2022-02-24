import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from './components';

import '../assets/styles/modules/_goTop.scss';

export function GoTop() {

  const [ showGoTop, setShowGoTop ] = useState( false )

  const handleVisibleButton = () => {
      setShowGoTop( window.pageYOffset > 50 )
  }

  const handleScrollUp = () => {
      window.scrollTo( { top: 0, behavior: 'smooth' } )
  }

  useEffect( () => {
      window.addEventListener( 'scroll', handleVisibleButton )
  }, [] )

  return (
    <div className={ showGoTop ? 'go-top' : 'go-top__hidden' } onClick={ handleScrollUp }>
      <Button icon = { < FontAwesomeIcon icon = "chevron-left" rotation={90} /> } /> 
    </div>
  )
}

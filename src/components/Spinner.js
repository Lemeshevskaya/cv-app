import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../assets/styles/modules/_spinner.scss'

export default function Spinner() {
  return (
    <div className='spinner'>
      < FontAwesomeIcon className = "icon" icon = "sync-alt"  />
    </div>
  )
}

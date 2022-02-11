import React, { useState, useRef } from 'react';
import '../accets/styles/modules/_portfolio.scss'
import card1 from '../accets/images/card_1.png';
import card3 from '../accets/images/card_3.png';

export default function Portfolio() {

  const [activelink, setActivelink] = useState('all');
  
  const handleClick = (item) => {
    setActivelink(item);
  };

  return (
  <div className ='portfolio'>
    <ul className ='portfolio__tabs'>
      <li onClick = {() => handleClick('all')} className = {activelink === 'all' ? 'active' : ''}>
        <span>all</span>
      </li>
      <li onClick = {() => handleClick('ui')} className = {activelink === 'ui' ? 'active' : ''}>
        <span>ui</span>
      </li>
      <li onClick = {() => handleClick('code')} className = {activelink === 'code' ? 'active' : ''}>
        <span>code</span>
      </li>
    </ul>
    <ul className ='portfolio__filter-container'>
      <li className ='portfolio__item ui'>
        <img src = {card1}  alt ="card" />
        <div className ="portfolio__info">
          <h3>Some text</h3>
          <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
          </p>
          <a href="http//github.com"> View source</a>
        </div>
      </li>
      <li className ='portfolio__item code'>
        <img src = {card3} alt = "card" />
        <div className = "portfolio__info">
          <h3>Some text</h3>
          <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
          </p>
          <a href="http//github.com"> View source</a>
        </div>
      </li>
      <li className ='portfolio__item ui'>
        <img src = {card1} alt ="card" />
        <div className = "portfolio__info">
          <h3>Some text</h3>
          <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
          </p>
          <a href ="http//github.com"> View source</a>
        </div>
      </li>
      <li className ='portfolio__item code'>
        <img src = {card3} alt ="card" />
        <div className = "portfolio__info">
          <h3>Some text</h3>
          <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
          </p>
          <a href="http//github.com"> View source</a>
        </div>
      </li>
    </ul>
  </div>
  )
}

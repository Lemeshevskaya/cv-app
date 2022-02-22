import React from 'react';
import '../assets/styles/modules/_navigation.scss'
import { navigationLink } from '../data/dataNavigation';

export function Navigation() {

  const handleClick = (key) => {
    console.log (document.querySelector(`#${key}`))
      document.querySelector(`#${key}`).scrollIntoView();
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationLink.map((item) => (
          <li key = {item.id} className= "navigation__item">
          <button className= 'navigation__link'
            onClick = {() => handleClick(item.link)}>
            {item.icon}
            <span className = 'navigation__text'>
              {item.name}
            </span>
          </button>
        </li>
        ))}
      </ul>
    </nav>
  );
}

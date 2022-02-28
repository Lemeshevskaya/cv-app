import React from 'react';

import { navigationLink } from '../data/dataNavigation';

import '../assets/styles/modules/_navigation.scss'

export function Navigation() {

  const navigationData = Object.values(navigationLink);

  const handleClick = (key) => {
    document.querySelector(`#${key}`).scrollIntoView();
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationData.map((item) => (
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

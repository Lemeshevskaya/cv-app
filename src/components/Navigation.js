import React from 'react';
import { Link } from 'react-router-dom';
import User from '../accets/images/icons/User.svg';
import Hat from '../accets/images/icons/Education.svg';
import Skills from '../accets/images/icons/Skills.svg';
import Portfolio from '../accets/images/icons/Portfolio.svg';
import Vector from '../accets/images/icons/Vector.svg';
import Feedbacks from '../accets/images/icons/Feedbacks.svg';
import Experience from '../accets/images/icons/Experience.svg';
/* eslint-disable */

export default function Navigation() {
  return <div>
    <nav className="navigation">
        <ul className="navigation__list">
          <li>
            <Link className="navigation__item" to="/about-me">
            <img className='' src={User} alt="User" />
              About me
            </Link>
          </li>
          <li>
            <Link className="navigation__item" to="/education">
            <img src={Hat} alt="Hat" />
              Education
            </Link>
          </li>
          <li>
            <Link className="navigation__item" to="/experience">
            <img src={Experience} alt="pen" />
            Experience
            </Link>
          </li>
          <li>
            <Link className="navigation__item" to="/skills">
            <img src={Skills} alt="Diamond" />
              Skills
              </Link>
              </li>
          <li>
            <Link className="navigation__item" to="/portfolio">
            <img src={Portfolio} alt="Bag" />
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="navigation__item" to="/contacts">
            <img src={Vector} alt="array" />
              Contacts
            </Link>
          </li>
          <li>
            <Link className="navigation__item" to="/feedbacks">
            <img src={Feedbacks} alt="message" />
              Feedbacks
            </Link>
          </li>
        </ul>
      </nav>
  </div>;
}

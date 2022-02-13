import React, { useEffect, useState } from 'react';
import '../accets/styles/modules/_navigation.scss'
import { ReactComponent as UserIcon} from '../accets/images/icons/user.svg';
import { ReactComponent as EducationIcon} from '../accets/images/icons//education.svg';
import { ReactComponent as ExperienceIcon} from '../accets/images/icons/experience.svg';
import { ReactComponent as SkillsIcon} from '../accets/images/icons/skills.svg';
import { ReactComponent as PortfolioIcon} from '../accets/images/icons/portfolio.svg';
import { ReactComponent as FeedbacksIcon} from '../accets/images/icons/feedbacks.svg';
import { ReactComponent as ContactsIcon} from '../accets/images/icons/contacts.svg';

export default function Navigation({aboutRef, educationRef, expertiseRef, portfolioRef, contactsRef}) {
  const [collapse, setCollapse] = useState(false);

  const showNavigation = () => {
    if (window.innerWidth <= 600) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };
  const classNavLink = !collapse ? 'navigation__link': 'navigation__link navigation__link_non-active';
  const classText = !collapse ? 'navigation__text': 'navigation__text_non-active';

  useEffect(() => {
    showNavigation();
  }, []);

  window.addEventListener('resize', showNavigation);

  return <>
    <nav className="navigation">
    <ul className="navigation__list">
          <li className="navigation__item">
            <button className= 'navigation__link'
            onClick = {() => {
              aboutRef.current.scrollIntoView()}}>
              <UserIcon/>
              <span className = {classText}>
                About me
              </span>
            </button>
          </li>
          <li className="navigation__item">
            <button  className = {classNavLink}
            onClick = {() => {
              educationRef.current.scrollIntoView();
            }}>
              <EducationIcon/>
              <span className = {classText}>
                Education
              </span>
            </button>
          </li>
          <li className="navigation__item">
            <button className = {classNavLink} 
            onClick = {() => {
              expertiseRef.current.scrollIntoView();
            }}>
              <ExperienceIcon/>
              <span className = {classText}>
                Experience
              </span>
            </button>
          </li>
          <li className="navigation__item">
            <button className = {classNavLink} 
              onClick = {() => {
                expertiseRef.current.scrollIntoView();
              }}>
              <SkillsIcon/>
              <span className = {classText}>
                Skills
              </span>
            </button>
          </li>
          <li className="navigation__item">
            <button className = {classNavLink} 
              onClick = {() => {
                portfolioRef.current.scrollIntoView();
              }}>
                <PortfolioIcon/>
                <span className = {classText}>
                  Portfolio
                </span> 
            </button>
          </li>
          <li className="navigation__item">
            <button className = {classNavLink} 
              onClick = {() => {
                contactsRef.current.scrollIntoView();
              }}>
              <ContactsIcon/>
              <span className = {classText}>
                Contacts
              </span>
            </button>
          </li>
          <li className="navigation__item">
            <button className = {classNavLink} 
              onClick = {() => {
                expertiseRef.current.scrollIntoView();
              }}>
              <FeedbacksIcon/>
              <span className = {classText}>
                Feedbacks
              </span>
            </button>
          </li>
        </ul>
      </nav>
  </>;
}

import React from 'react';
import '../assets/styles/modules/_navigation.scss'
import { ReactComponent as UserIcon} from '../assets/images/icons/user.svg';
import { ReactComponent as EducationIcon} from '../assets/images/icons//education.svg';
import { ReactComponent as ExperienceIcon} from '../assets/images/icons/experience.svg';
import { ReactComponent as SkillsIcon} from '../assets/images/icons/skills.svg';
import { ReactComponent as PortfolioIcon} from '../assets/images/icons/portfolio.svg';
import { ReactComponent as FeedbacksIcon} from '../assets/images/icons/feedbacks.svg';
import { ReactComponent as ContactsIcon} from '../assets/images/icons/contacts.svg';

export default function Navigation({data}) {

  const navData = [
    {
      name: "About me",
      link: 'about', 
      icon: <UserIcon/>,
      id: 1
    },
    {
      name: "Education",
      link: 'education', 
      icon: <EducationIcon/>,
      id: 2
    },
    {
      name: "Experience",
      link: 'experience', 
      icon: <ExperienceIcon/>,
      id: 3
    },
    {
      name: "Skills",
      link: 'skills', 
      icon: <SkillsIcon/>,
      id: 4
    },
    {
      name: "Portfolio",
      link: 'portfolio', 
      icon: <PortfolioIcon/>,
      id: 5
    },
    {
      name: "Contacts",
      link: 'contacts', 
      icon: <ContactsIcon/>,
      id: 6
    },
    {
      name: "Feedbacks",
      link: 'feedback', 
      icon: <FeedbacksIcon/>,
      id: 7
    }
  ];

  const handleClick = (key) => {
    if (data.hasOwnProperty(key)) {
      data[key].current.scrollIntoView();
    }
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navData.map((item) => (
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

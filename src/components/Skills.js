import React from 'react';
import FormSkills from './FormSkills';

import '../assets/styles/modules/_skills.scss'

export default function Skills(props) {

  const tabs = [
    {'tab': 'Beginner'},
    {'tab': 'Proficient'},
    {'tab': 'Expert'},
    {'tab': 'Master'},
  ]
  
  return (
    <>
    <FormSkills/>
      <ul className='slills__list'>
        <li className='skills__item'>
          <span className='skills__text'>
            React
          </span>
        </li>
        <li className='skills__item'>
          <span className='skills__text'>
            CSS
          </span>
        </li>
      </ul>
      <ul className='skills__tabs'>
        { tabs.map((item) => (
          <li key = {item.tab} className='skills__tab'>
            <span>
              {item.tab}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

import React from 'react'

import '../assets/styles/modules/_skills.scss'

export default function Skills({data}) {

  const tabs = [
    {'tab': 'Beginner'},
    {'tab': 'Proficient'},
    {'tab': 'Expert'},
    {'tab': 'Master'},
  ]
  
  return (
    <>
      <ul className='slills__list'>
        {
          data.map((skill) => (
            <li key= {skill.name} className='skills__item' style= {{width: ` ${skill.range}%`}}>
              <span className='skills__text'>
                {skill.name}
              </span>
            </li>
          ))
        }
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

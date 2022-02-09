import React from 'react';
import '../accets/styles/modules/_expertise.scss'

export default function Expertise({data}) {

  const dataExpertise = data.map((item, i) => ({id: i, event: item}));

  return (
    <div className='expertise'>
      <ul className='expertise-list'>
        {dataExpertise.map((dataexp) => (
            <li className='expertise-list__item' key = {dataexp.id}>
              <div className='expertise-list__date'>
                <h3>
                  {dataexp.event.info.company}
                </h3>
                <span>
                  {dataexp.event.date}
                </span>
              </div>
              <div className='expertise-list__info'>
                <h3>
                  {dataexp.event.info.job}
                </h3>
                <p>
                  {dataexp.event.info.description}
                </p>
              </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

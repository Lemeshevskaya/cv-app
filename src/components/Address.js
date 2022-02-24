import React from 'react';

import '../assets/styles/modules/_address.scss';

export function Address({ data }) {

  return (
    <address className='contacts'>
      {data.map((item) => (
        <dl className='contacts__item' key = {item.linkName}>
          <dt className='contacts__icon'>
            {item.icon}
          </dt>
          <dd className='contacts__content'>
            {item.name && 
              <strong className='contacts__title'>
                {item.name}
              </strong>
            }
            <a className='contacts__link' href = {item.link}>
              {item.linkName}
            </a>
          </dd>
        </dl>
      ))}
    </address>
  )
}

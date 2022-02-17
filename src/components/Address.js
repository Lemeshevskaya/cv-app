import React from 'react';
import '../assets/styles/modules/_address.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Address() {

  const dataAddress = [
    {
      icon: <FontAwesomeIcon icon="phone" flip="horizontal" />,
      linkName: '500 342 242',
      link: 'tel:+500 342 242',
    },
    {
      icon: <FontAwesomeIcon icon="envelope" />,
      linkName: 'office@kamsolutions.pl',
      link: 'mailto:office@kamsolutions.pl'
    },
    {
      icon: <FontAwesomeIcon icon={['fab', 'twitter']}/>,
      name: 'Twitter',
      linkName: 'https://twitter.com/wordpress',
      link: 'https://twitter.com/wordpress'
    },
    {
      icon: <FontAwesomeIcon icon= {['fab', 'facebook-f']} />,
      name: 'Facebook',
      linkName: 'https://facebook.com/facebook',
      link: 'https://facebook.com/facebook'
    },
    {
      icon: <FontAwesomeIcon icon= {['fab','skype']} />,
      name: 'Skype',
      linkName: 'kamsolutions.pl',
      link: 'skype:kamsolutions.pl'
    },
  ];

  return (
    <address className='contacts'>
      {dataAddress.map((item) => (
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

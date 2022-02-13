import React from 'react';
import '../accets/styles/modules/_adress.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Adress() {
  return (
    <address className='contacts'>
      <dl className='contacts__item'>
        <dt className='contacts__icon'>
          <FontAwesomeIcon icon="phone" />
        </dt>
        <dd className='contacts__content'>
          <a className='contacts__link contacts__title' href="tel:+500 342 242">
            500 342 242
          </a>
        </dd>
      </dl>
      <dl className='contacts__item'>
        <dt className='contacts__icon'>
          <FontAwesomeIcon icon="envelope" />
        </dt>
        <dd className='contacts__content'>
          <a className='contacts__link contacts__title' href="mailto:office@kamsolutions.pl">
            office@kamsolutions.pl
          </a>
        </dd>
      </dl>
      <dl className='contacts__item'>
        <dt className='contacts__icon'>
          <FontAwesomeIcon icon={['fab', 'twitter']}/>
        </dt>
        <dd className='contacts__content'>
          <strong className='contacts__title'>
            Twitter
          </strong>
          <a className='contacts__link' href="https://twitter.com/wordpress">
            https://twitter.com/wordpress
          </a>
        </dd>
      </dl>
      <dl className='contacts__item'>
        <dt className='contacts__icon'>
          <FontAwesomeIcon icon= {['fab', 'facebook-f']} />
        </dt>
        <dd className='contacts__content'>
          <strong className='contacts__title'>
            Facebook
          </strong>
          <a className='contacts__link' href="https://facebook.com/facebook">
              https://facebook.com/facebook
            </a>
        </dd>
      </dl>
      <dl className='contacts__item'>
        <dt className='contacts__icon'>
          <FontAwesomeIcon icon= {['fab','skype']} />
        </dt>
        <dd className='contacts__content'>
          <strong className='contacts__title'>
            Skype
          </strong>
          <a className='contacts__link' href="skype:kamsolutions.pl">
            kamsolutions.pl
          </a>
        </dd>
      </dl>
    </address>
  )
}

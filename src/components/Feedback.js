import React from 'react';

import { Info } from './components';

import '../assets/styles/modules/_feedback.scss';


export function Feedback({data}) {

  const dataFeedbacks = data.map((item, i) => ({id: i, item: item}));

  return (
    <ul className='feedback'>
      {dataFeedbacks.map((feedback) => (
        <li className='feedback__item' key = {feedback.id}>
          <div className = 'feedback__text'>
            <Info data = {feedback.item.feedback}/>
          </div>
          <div className='feedback__reporter'>
            <img className='feedback__photo' src = {feedback.item.reporter.photoUrl} alt="reporter" />
            <cite className='feedback__caption'>
              {`${feedback.item.reporter.name}, `}
              <a className='feedback__link' href = {feedback.item.reporter.citeUrl}>
                {feedback.item.reporter.citeUrl}
              </a>
            </cite>
          </div>
        </li>
      ))} 
    </ul>
  )
}

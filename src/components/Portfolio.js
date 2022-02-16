import React, { useState, useEffect } from 'react';
import Info from './Info';
import '../accets/styles/modules/_portfolio.scss'

export default function Portfolio({data}) {

  const [activelink, setActivelink] = useState('all');
  const [filterWorks, setFilterWorks] = useState(data);

  const tabs = [
    {link: 'all'},
    {link: 'ui'},
    {link: 'code'}
  ];

  useEffect(() => {
    let result;
    if (activelink === 'all') {
      result = data;
    }
    else {
      result = data.filter((work) => {
        return work.type === activelink;
      })
    }
    setFilterWorks(result);
  }, [activelink]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className ='portfolio'>
      <ul className ='portfolio__tabs'>
        { tabs.map((tab) => (
          <li 
          onClick = {() => {setActivelink(tab.link)}}
          className = {activelink === tab.link ? 'portfolio__link portfolio__link_active' : 'portfolio__link'}>
            <span>
              {tab.link}
            </span>
          </li>
        ))}
      </ul>
      <ul className ='portfolio__filter-container'>
        { filterWorks.map((work) => (
          <li key = {work.id}  className ={`portfolio__item ${work.type}`}>
          <img src = {work.img}  alt ="card" />
          <div className ="portfolio__info">
            <h3 className='portfolio__title'>
              {work.title}
            </h3>
            <Info data = {work.text}/>
            <a className='portfolio__sourse' href="http//github.com"> View source</a>
          </div>
        </li>
        ))}
      </ul>
    </div>
  )
}

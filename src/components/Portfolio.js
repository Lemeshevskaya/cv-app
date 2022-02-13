import React, { useState, useEffect } from 'react';
import Info from './Info';
import '../accets/styles/modules/_portfolio.scss'

export default function Portfolio({data}) {

  const [activelink, setActivelink] = useState('all');
  const [filterWorks, setFilterWorks] = useState(data);

  const tabs = {
    1: 'all',
    2: 'ui',
    3: 'code'
  };
  const classLink = ((tab) => {
    return `portfolio__link ${activelink === tab ? 'portfolio__link_active' : ''}`
  });

  useEffect(() => {
    let result;
    if(activelink !== tabs[1]) {
      result = data.filter((work) => {
        return work.type === activelink;
      })
    } else {
      result = data;
    }
    setFilterWorks(result);
  }, [activelink]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className ='portfolio'>
      <ul className ='portfolio__tabs'>
        <li 
        onClick = {() => {setActivelink(tabs[1])}} 
        className = {classLink(tabs[1])}>
          <span>
            all
          </span>
        </li>
        <li 
        onClick = {() => {setActivelink(tabs[2])}} 
        className = {classLink(tabs[2])}>
          <span>
            ui
          </span>
        </li>
        <li 
        onClick = {() => {setActivelink(tabs[3])}} 
        className = {classLink(tabs[3])}>
          <span>
            code
          </span>
        </li>
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

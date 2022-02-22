import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEducations } from '../features/education/educationSlice';
import { getSkills } from '../features/skills/skillsSlice'

import { Panel, Box, TimeLine, Expertise, Portfolio, Address, Feedback, GoTop, Spinner, Skills, FormSkills  } from '../components/components';

import { feedback, portfolio, experience, about, navigationLink } from '../data/data';

import '../assets/styles/pages/_inner.scss';

export default function Inner() {

  console.log(feedback);
  const dispatch = useDispatch();
  const visibility = useSelector(state => state.visibility.show);
  const educationsData = useSelector(state => state.education.educations.educations);
  const loadingEducation = useSelector(state => state.education.status);
  const skillsData = useSelector(state => state.skills.skills);

  useEffect(() => {
    dispatch(getEducations());
    dispatch(getSkills());
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
  <div className='inner'>
    <Panel/>
    <main className={visibility ? 'inner__main inner__main_non-active' : 'inner__main inner__main_active'}>
      <section id = {navigationLink[0].link}>
        <Box title='About me' content= { about } />
      </section>
      <section id = {navigationLink[1].link}>
        <Box title='Education'>
          {loadingEducation 
          ? <Spinner/>
          : <TimeLine data = { educationsData } />}
        </Box>
      </section>
      <section id = {navigationLink[2].link}>
        <Box title='Experience'>
          <Expertise data={experience} />
        </Box>
      </section>
      <section id = {navigationLink[3].link}>
        <Box title='Skills'>
          <FormSkills/>
          <Skills  data = {skillsData}/>
        </Box>
      </section>
      <section id = {navigationLink[4].link}>
        <Box title='Portfolio'>
          <Portfolio data = {portfolio} />
        </Box>
      </section>
      <section id = {navigationLink[5].link}>
        <Box title = 'Contacts'>
          <Address/>
        </Box>
      </section>
      <section id = {navigationLink[6].link}>
          <Box title = 'Feedback'>
            <Feedback data={feedback} />
          </Box>
      </section>
      <GoTop/>
    </main>
  </div>
)}

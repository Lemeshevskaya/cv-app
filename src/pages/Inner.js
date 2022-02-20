import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEducations } from '../features/education/educationSlice'

import Panel from '../components/Panel';
import Box from '../components/Box';
import TimeLine from '../components/TimeLine';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Address from '../components/Address';
import Feedback from '../components/Feedback';
import GoTop from '../components/GoTop';
import Spinner from '../components/Spinner';

import card1 from '../assets/images/card_1.png';
import card3 from '../assets/images/card_3.png';

import '../assets/styles/pages/_inner.scss';

export default function Inner() {

  const dispatch = useDispatch();
  const visibility = useSelector(state => state.visibility.show);
  const educationsData = useSelector(state => state.education.educations.educations);
  const loadingEducation = useSelector(state => state.education.status);

  const educationRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const portfolioRef = useRef();
  const contactsRef = useRef();
  const feedbackRef = useRef();

  useEffect(() => {
    dispatch(getEducations());
  }, [dispatch])

  return (
  <div className='inner'>
    <Panel 
      education = {educationRef} 
      about = {aboutRef} 
      experience = {experienceRef} 
      portfolio = {portfolioRef} 
      contacts = {contactsRef}
      feedback = {feedbackRef}/>
    <main className={visibility ? 'inner__main inner__main_non-active' : 'inner__main inner__main_active'}>
      <section ref = {aboutRef}>
        <Box title='About me' content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque' />
      </section>
      <section ref={educationRef}>
        <Box title='Education'>
          {loadingEducation 
          ? <Spinner/>
          : <TimeLine data = { educationsData } />}
        </Box>
      </section>
      <section ref = {experienceRef}>
        <Box title='Experience'>
          <Expertise data={[ { date: '2013-2014', info: { company: 'Google', job: 'Front-end developer / php programmer', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil' } }, { date: '2012', info: { company: 'Twitter', job: 'Web developer', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' } } ]} />
        </Box>
      </section>
      <section ref =  {portfolioRef}>
        <Box title='Portfolio'>
          <Portfolio data = {[{
            id: 1,
            type: 'ui',
            img: card1,
            title: 'Some text',
            text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis'
          },
          {
            id: 2,
            type: 'code',
            img: card3,
            title: 'Some text',
            text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis'
          },
          {
            id: 3,
            type: 'ui',
            img: card1,
            title: 'Some text',
            text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis'
          },
          {
            id: 4,
            type: 'code',
            img: card3,
            title: 'Some text',
            text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis'
          },{
            id: 5,
            type: 'code',
            img: card3,
            title: 'Some text',
            text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis'
          }
          ]} />
        </Box>
      </section>
      <section ref = {contactsRef}>
        <Box title = 'Contacts'>
          <Address/>
        </Box>
      </section>
      <section ref = {feedbackRef}>
          <Box title = 'Feedback'>
            <Feedback data={[ {feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ', reporter: { photoUrl: 'http://avatars0.githubusercontent.com/u/246180?v=4"', name: 'John Doe', citeUrl: 'https://www.citeexample.com' } }, {feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ', reporter: { photoUrl: 'http://avatars0.githubusercontent.com/u/246180?v=4"', name: 'John Doe', citeUrl: 'https://www.citeexample.com' } } ]} />
          </Box>
      </section>
      <GoTop/>
    </main>
  </div>
)}

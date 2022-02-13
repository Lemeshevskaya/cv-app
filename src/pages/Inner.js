import React, { useRef } from 'react';
import '../accets/styles/pages/_inner.scss';
import Panel from '../components/Panel';
import Box from '../components/Box';
import TimeLine from '../components/TimeLine';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Adress from '../components/Adress';
import card1 from '../accets/images/card_1.png';
import card3 from '../accets/images/card_3.png';
import { useSelector } from 'react-redux';

export default function Inner() {

  const visibility = useSelector(state => state.visibility.show);

  const educationRef = useRef();
  const aboutRef = useRef();
  const expertiseRef = useRef();
  const portfolioRef = useRef();
  const contactsRef = useRef();

  return (
  <div className='inner'>
    <Panel 
    education = {educationRef} 
    about = {aboutRef} 
    expertise = {expertiseRef} 
    portfolio = {portfolioRef} 
    contacts = {contactsRef}/>
    <main className={visibility ? 'inner__main inner__main_non-active' : 'inner__main inner__main_active'}>
      <section ref = {aboutRef}>
        <Box title='About me' content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque' />
      </section>
      <section id='education' ref={educationRef}>
        <Box title='Education'>
          <TimeLine data={[
            {
              "date": 2001,
              "title": "Title 0",
              "text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n"
            },
            {
              "date": 2000,
              "title": "Title 1",
              "text": "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n"
            },
            {
              "date": 2012,
              "title": "Title 2",
              "text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n"
            }
          ]} />
        </Box>
      </section>
      <section ref = {expertiseRef}>
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
          <Adress/>
        </Box>
      </section>
    </main>
  </div>
)}

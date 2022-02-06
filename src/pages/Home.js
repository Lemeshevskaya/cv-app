import React from 'react';
import PhotoBox from '../components/PhotoBox';
import Button from '../components/Button';
import '../accets/styles/pages/_home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return <section className='home'>
    <PhotoBox name="John Doe" title="Programmer. Creative. Innovator" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque" avatar="http://avatars0.githubusercontent.com/u/246180?v=4" />
    <Link to = "/inner">
      <Button text= 'Know more'/>
    </Link>
  </section>;
}

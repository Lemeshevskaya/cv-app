import { Button } from '../components/Button';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import {  BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

test('Button - render button', () => {
  render(
  <Router>
    <Provider store= {store}>
      <Button disabled={true}/>
    </Provider>
  </Router>);
  expect(screen.getByRole('button')).toBeDisabled();
})

test('Button - render text', () => {
  render(
  <Router>
    <Provider store= {store}>
      <Button text = 'Submit' />
    </Provider>
  </Router>);
  expect(screen.getByText('Submit')).toBeInTheDocument();
})

test('Button - render icon', () => {
  render(
  <Router>
    <Provider store= {store}>
      <Button icon = { <FontAwesomeIcon icon={faCoffee} title="icon"/> }/>
    </Provider>
  </Router>);
  expect(screen.getByTitle('icon')).toBeInTheDocument();
})



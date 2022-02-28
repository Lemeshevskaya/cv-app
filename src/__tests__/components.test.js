import { Button, FormSkills, Skills, Portfolio, Panel } from '../components/components';
import { render, screen,  waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

//Button

test('Button - render button', () => {
  render(
    <Button disabled={true}/>
  );

  expect(screen.getByRole('button')).toBeDisabled();
})

test('Button - render text', () => {
  render(
    <Button text = 'Submit' />
  );

  expect(screen.getByText('Submit')).toBeInTheDocument();
})

test('Button - render icon', () => {
  render(
    <Button icon = { <FontAwesomeIcon icon={faCoffee} title="icon"/> }/>
  );

  expect(screen.getByTitle('icon')).toBeInTheDocument();
})

// FormSkills

test('FormSkills - button', () => {
  render(
    <Router>
      <Provider store= {store}>
        <FormSkills/>
      </Provider>
    </Router>
  );

  expect(screen.getByRole('button')).toBeDisabled();
})

test('FormSkills - validation', async () => {
  render(
    <Router>
      <Provider store= {store}>
        <FormSkills/>
      </Provider>
    </Router>
  );
  const inputRange = screen.getByPlaceholderText('Enter skill range');
  const inputName = screen.getByPlaceholderText('Enter skill name');
  userEvent.type(inputName, 'css');
  userEvent.type(inputRange, '50');

  await waitFor(() =>
    expect(screen.getByRole('button')).not.toBeDisabled()
  )
})

test('FormSkills - validation empty name value', async () => {
  render(
    <Router>
      <Provider store= {store}>
        <FormSkills/>
      </Provider>
    </Router>
    );
    const inputRange = screen.getByPlaceholderText('Enter skill range');
    const inputName = screen.getByPlaceholderText('Enter skill name');
    userEvent.type(inputName, '');
    userEvent.type(inputRange, '10');

    await screen.findByText('Skill name is a required field');
    expect(screen.getByText('Skill name is a required field')).toBeInTheDocument()
  })

  test('FormSkills - validation range value empty', async () => {
    render(
      <Router>
        <Provider store= {store}>
          <FormSkills/>
        </Provider>
      </Router>
      );
      const inputRange = screen.getByPlaceholderText('Enter skill range');
      const inputName = screen.getByPlaceholderText('Enter skill name');
      userEvent.type(inputName, 'css');
      userEvent.type(inputRange, '');
  
      await screen.findByText('Skill range is a required field');
      expect(screen.getByText('Skill range is a required field')).toBeInTheDocument()    
    })

    test('FormSkills - validation range value', async () => {
      render(
        <Router>
          <Provider store= {store}>
            <FormSkills/>
          </Provider>
        </Router>
        );
        const inputRange = screen.getByPlaceholderText('Enter skill range');
        const inputName = screen.getByPlaceholderText('Enter skill name');
        userEvent.type(inputName, 'css');
        userEvent.type(inputRange, 'v');
    
        await screen.findByText('Skill range must be a `number` type');
        expect(screen.getByText('Skill range must be a `number` type')).toBeInTheDocument()    
      })

      test('FormSkills - submit', async () => {
        let submit = jest.fn();
    
        render(
          <Router>
            <Provider store= {store}>
              <FormSkills onSubmit={submit}/>
            </Provider>
          </Router>
          );
          const inputRange = screen.getByPlaceholderText('Enter skill range');
          const inputName = screen.getByPlaceholderText('Enter skill name');
          userEvent.type(inputName, 'css');
          userEvent.type(inputRange, '50');

          userEvent.click(screen.getByText('Add skill'));
          
          await waitFor(() => 
            expect(submit).toHaveBeenCalledTimes(1)
          )
        })

        test('FormSkills - submit value', async () => {
          let submit = jest.fn();
      
          render(
            <Router>
              <Provider store= {store}>
                <FormSkills onSubmit={submit}/>
              </Provider>
            </Router>
            );
            const inputRange = screen.getByPlaceholderText('Enter skill range');
            const inputName = screen.getByPlaceholderText('Enter skill name');
            userEvent.type(inputName, 'css');
            userEvent.type(inputRange, '50');
  
            userEvent.click(screen.getByText('Add skill'));
            
            await waitFor(() => 
              expect(submit).toHaveBeenCalledWith({
                name: 'css',
                range: '50'
              }),
            )
          })

          //Skill

          test('Skill - render', () => {
            const data = [
              {
                name: 'html',
                range: '90'
              }
            ];

            render(
              <Skills data={data}/>
            );
          
            expect(screen.getByText('html')).toBeInTheDocument();
          })

          //Portfolio

          test('Portfolio - render component', () => {
            const data = [
              {
                id: 1,
                type: 'ui',
                img: 'image',
                title: 'ui example',
                text: 'Donec pede justo, fringilla vel, aliquet nec'
              },
              {
                id: 2,
                type: 'code',
                img: 'image',
                title: 'code example',
                text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget'
              },
            ]

            render(
              <Portfolio data={data}/>
            );
            userEvent.click(screen.getByTestId('ui'));
          
            expect(screen.getAllByRole('heading', {level:3})).toHaveLength(1);
          })

          //Panel

          test('Panel - render component', () => {
            render(
              <Router>
              <Provider store= {store}>
                <Panel/>
              </Provider>
            </Router>
            );
          
            expect(screen.getAllByRole('button')).toHaveLength(9);
          })


          
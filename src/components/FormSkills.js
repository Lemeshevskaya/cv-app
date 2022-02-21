import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux'; 
import { postSkills } from '../features/skills/skillsSlice'

import Button from './Button';

import '../assets/styles/modules/_formSkill.scss'

// A custom validation function. This must return an object

const validate = values => {
  const errors = {};
  const fromSkill = 10;
  const toSkill = 100;
  if (!values.name) {
    errors.name = 'Skill name is a required field';
  };
  if (!values.range) {
    errors.range = 'Skill range is a required field';
  } else if (!Number(values.range)) {
    errors.range = 'Skill range must be a `number` type';
  } else if (values.range < fromSkill) {
    errors.range = `Skill range must be greater than or equal to ${fromSkill}`;
  } else if (values.range > toSkill) {
    errors.range = `Skill range must be less than or equal to ${toSkill}`;
  }

  return errors;
};

export default function FormSkills() {

  const dispatch = useDispatch();
  //const loadingSkills = useSelector(state => state.skills.status);
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      range: ''
    },
    validate,
    onSubmit: values => {
      let skill = {
        name: values.name,
        range: values.range
      };
      let skills = [];
      skills.push(skill);
      if (localStorage.getItem('skill')) {
        skills = JSON.parse(localStorage.getItem('skill'));
        skills.push(skill);
      }
      localStorage.setItem('skill', JSON.stringify(skills));
      dispatch(postSkills(skill));
      formik.values.name = '';
      formik.values.range = '';
    },
  });

  return (
    <div className='skills__form'>
      <form className='skills__form-items' onSubmit={formik.handleSubmit}>
        <div className='skills__form-item'>
          <label className='skills__lable' htmlFor="name">Skill name</label>
          <input
            className= {`skills__field ${formik.errors.name ? 'skills__error-input': ''}`}
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value= {formik.values.name}
            placeholder= 'Enter skill name'
          />
          {formik.errors.name ? <div className='skills__error'>{formik.errors.name}</div> : null}
        </div>
        
        <div className='skills__form-item'>
          <label className='skills__lable' htmlFor="range">Skill range</label>
          <input
            className= {`skills__field ${formik.errors.range ? 'skills__error-input': ''}`}
            id="range"
            name="range"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.range}
            placeholder= 'Enter skill range'
          />
          {formik.errors.range ? <div className='skills__error'>{formik.errors.range}</div> : null}
        </div>
        <Button text = 'Add skill' disabled={!(formik.isValid && formik.dirty)}/>
      </form>
    </div>
  );
};
import React from 'react';
import '../assets/styles/modules/_info.scss'

export function Info({data}) {
  return (
    <p className='info'>
      {data}
    </p>
  )
}

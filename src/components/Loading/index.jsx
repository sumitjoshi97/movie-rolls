import React from 'react'

import './styles.scss'

const Loading = () => (
  <div className='loading'>
    <div className='spinner-container'>
      <div className='spinner'>
        <div className='double-bounce1' />
        <div className='double-bounce2' />
      </div>
    </div>
  </div>
)
export default Loading

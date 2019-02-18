import React, { Component } from 'react'

import Header from '../../components/Header'
import Hero from '../../components/Hero'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
        <Hero />
      </div>
    )
  }
}

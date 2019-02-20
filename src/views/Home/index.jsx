import React, { Component } from 'react'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Nav from '../../components/Nav'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
        <Hero />
        <Nav />
      </div>
    )
  }
}

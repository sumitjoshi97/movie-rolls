import React, { Component } from 'react'
import Slider from 'react-slick'
import ListItem from './ListItem'
import './styles.scss'

export default class List extends Component {
  render() {
    const settings = {
      arrows: true,
      speed: 100,
      slidesToShow: 4,
      slidesToScroll: 1
    }
    return (
      <div className='list'>
        <h2 className='list__header'>list</h2>
        <Slider {...settings}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </Slider>
      </div>
    )
  }
}

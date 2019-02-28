import React, { Component } from 'react'
import Slider from 'react-slick'
import ListItem from './ListItem'
import './styles.scss'

const sliderOptions = {
      arrows: true,
  dots: false,
  speed: 400,
  slidesToShow: 8,
  swipeToSlide: true,
  infinite: false
}

export default class List extends PureComponent {
  renderList = () => {
    const { type, items } = this.props

        return items.map(item => (
          <ListItem
            key={item.id}
            type={type}
            pageId={item.id}
            name={item.title}
            rating={item.vote_average}
            poster={item.poster_path}
          />
        ))
    }

  render() {
    const { name } = this.props
    return (
      <div className='list'>
        <h2 className='list__header'>{name}</h2>
        <Slider {...sliderOptions}>{this.renderList()}</Slider>
      </div>
    )
  }
}

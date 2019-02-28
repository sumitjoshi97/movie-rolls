import React, { PureComponent } from 'react'
import Slider from 'react-slick'

import ListItem from './ListItem'
import CastItem from './CastItem'
import VideoItem from './VideoItem'

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

    switch (type) {
      case 'cast':
        return items.map(item => (
          <CastItem
            key={item.id}
            name={item.name}
            poster={item.profile_path}
            role={item.character}
          />
        ))

      case 'video':
        return items.map(item => (
          <VideoItem
            key={item.id}
            name={item.name}
            video={item.key}
            category={item.type}
          />
        ))

      //for movies / tv shows
      default:
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

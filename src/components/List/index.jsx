import React, { PureComponent } from 'react'
import Slider from 'react-slick'

import ListItem from './ListItem'
import CastItem from './CastItem'
import VideoItem from './VideoItem'
import NextArrow from '../Arrows/Next'
import PrevArrow from '../Arrows/Prev'

import './styles.scss'

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
            key={type + item.id}
            type={type}
            pageId={item.id || item.pageId}
            name={item.name || item.title}
            poster={item.poster_path || item.poster}
          />
        ))
    }
  }

  render() {
    const sliderOptions = {
      arrows: true,
      dots: false,
      speed: 400,
      slidesToShow: this.props.type === 'video' ? 4 : 7,
      swipeToSlide: true,
      infinite: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: this.props.type === 'video' ? 3 : 6
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: this.props.type === 'video' ? 3 : 5
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: this.props.type === 'video' ? 2 : 5
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: this.props.type === 'video' ? 1 : 4
          }
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: this.props.type === 'video' ? 1 : 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: this.props.type === 'video' ? 1 : 2
          }
        }
      ]
    }

    return (
      <div className='list'>
        <h2 className='list__header'>{this.props.name}</h2>
        <Slider {...sliderOptions}>{this.renderList()}</Slider>
      </div>
    )
  }
}

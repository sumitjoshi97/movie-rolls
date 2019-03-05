import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class VideoItem extends PureComponent {
  static propTypes = {
    video: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string
  }

  render() {
    const { video, name, category } = this.props

    return (
      <div className='list-item'>
        <iframe
          className='list-item__video'
          title='1'
          width='180'
          src={`https://www.youtube.com/embed/${video}`}
        />
        <div className='list-item__name'>{name}</div>
        <div className='list-item__name__sub'>{category}</div>
      </div>
    )
  }
}

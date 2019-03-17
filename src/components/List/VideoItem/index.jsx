import React from 'react'
import PropTypes from 'prop-types'

const VideoItem = ({ video, name, category }) => (
  <div className='list-item'>
    <iframe
      className='list-item__video'
      title='1'
      width='280'
      src={`https://www.youtube.com/embed/${video}`}
    />
    <div className='list-item__name'>{name}</div>
    <div className='list-item__name__sub'>{category}</div>
  </div>
)

VideoItem.propTypes = {
  video: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string
}

export default VideoItem

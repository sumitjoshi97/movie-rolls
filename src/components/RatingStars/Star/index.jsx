import React, { Component } from 'react'
import MdStar from 'react-ionicons/lib/MdStar'
import MdStarOutline from 'react-ionicons/lib/MdStarOutline'
import MdStarHalf from 'react-ionicons/lib/MdStarHalf'
import './styles.scss'

export default class Star extends Component {
  renderStar = starType => {
    switch (starType) {
      case 'half':
        return <MdStarHalf {...options} />
      case 'blank':
        return <MdStarOutline {...options} />
      default:
        return <MdStar {...options} />
    }
  }

  render() {
    return this.renderStar(this.props.type)
  }
}

const options = {
  color: '#ff0000'
}
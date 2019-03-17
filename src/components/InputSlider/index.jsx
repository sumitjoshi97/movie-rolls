import React from 'react'
import InputRange from 'react-input-range'
import PropTypes from 'prop-types'

import 'react-input-range/lib/css/index.css'
import './styles.scss'

const InputSlider = ({ value, ...props }) => (
  <InputRange
    draggableTrack
    maxValue={10}
    minValue={0}
    onChange={value => props.handleRatings(value)}
    value={value}
  />
)

InputSlider.propTypes = {
  value: PropTypes.object,
  handleRatings: PropTypes.func
}

export default InputSlider

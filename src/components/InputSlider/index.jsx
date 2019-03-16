import React from 'react'
import InputRange from 'react-input-range'

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

export default InputSlider

import React from 'react'
import { shallow } from 'enzyme'

import RatingStars from './index'
import Star from './Star'

describe('rating star component unit test', () => {
  const stars = 5

  const props = { stars }

  const ratingStarsWrapper = shallow(<RatingStars {...props} />)

  test('should render properly', () => {
    expect(ratingStarsWrapper).toMatchSnapshot()
  })

  test('should render `5 stars`', () => {
    expect(ratingStarsWrapper.find(Star)).toHaveLength(5)
  })

  test('should render full `2 stars`', () => {
    expect(ratingStarsWrapper.find({ type: 'full' }).find(Star)).toHaveLength(2)
  })
  test('should render a `half star`', () => {
    expect(ratingStarsWrapper.find({ type: 'half' }).find(Star)).toHaveLength(1)
  })

  test('should render empty `2 stars`', () => {
    expect(ratingStarsWrapper.find({ type: 'blank' }).find(Star)).toHaveLength(
      2
    )
  })
})

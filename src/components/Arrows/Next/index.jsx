import React from 'react'
import IosArrowForward from 'react-ionicons/lib/IosArrowForward'

const NextArrow = ({ className, style, onClick }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    <IosArrowForward
      color={className.includes('slick-disabled') ? '#727272' : '#fff'}
      fontSize='24px'
    />
  </div>
)

export default NextArrow

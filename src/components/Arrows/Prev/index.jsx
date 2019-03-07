import React from 'react'
import IosArrowBack from 'react-ionicons/lib/IosArrowBack'

const PrevArrow = ({ className, style, onClick }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    <IosArrowBack
      color={
        className.includes('slick-disabled')
          ? 'rgba(255, 255, 255, 0.3)'
          : '#fff'
      }
      fontSize='24px'
    />
  </div>
)

export default PrevArrow

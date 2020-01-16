import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { clearError } from '../../actions'

import './styles.scss'

const ErrorTooltip = props => {
  useEffect(() => {
    setTimeout(() => {
      props.clearError()
    }, 2000)
    return () => clearTimeout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className='error-tooltip'>Something went wrong!! Try Again</div>
}

export default connect(null, { clearError })(ErrorTooltip)

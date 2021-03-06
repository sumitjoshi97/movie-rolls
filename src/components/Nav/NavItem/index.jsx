import React from 'react'
import PropTypes from 'prop-types'

const NavItem = ({ index, name, type, isActive, ...props }) => {
  const style = {
    active: {
      borderBottom: '0.5rem solid #ff1e1e'
    },
    inActive: {
      borderBottom: '0.5rem solid transparent'
    }
  }

  return (
    <div
      className={`nav-item ${type}`}
      style={isActive ? style.active : style.inActive}
      onClick={() => {
        props.setActive(index)
        props.handleNav(type)
      }}
    >
      {name}
    </div>
  )
}

NavItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  isActive: PropTypes.bool,
  setActive: PropTypes.func,
  handleNav: PropTypes.func
}

export default NavItem

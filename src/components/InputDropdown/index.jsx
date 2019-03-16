import React, { PureComponent } from 'react'
import IosArrowDown from 'react-ionicons/lib/IosArrowDown'

import './styles.scss'

export default class InputDropdown extends PureComponent {
  state = {
    isActive: false
  }

  toggleList = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  handleOption = (name, option) => {
    this.props.handleDropdown(name, option)
    this.toggleList()
  }

  render() {
    return (
      <div className='input-dropdown'>
        <div className='input-dropdown__header' onClick={this.toggleList}>
          <span>{this.props.value.label}</span>
          <IosArrowDown fontSize='18px' color='#ff0000' />
        </div>

        {this.state.isActive && (
          <ul className='input-dropdown__list'>
            {this.props.options.map(option => (
              <li
                className='input-dropdown__list__option'
                key={option.value}
                onClick={() => this.handleOption(this.props.name, option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

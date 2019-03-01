import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from '../../views/Auth'

export default class Layout extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/profile/auth' component={Auth} />
      </Switch>
    )
  }
}

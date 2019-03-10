import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from '../components/Layout'
import HeaderLayout from '../components/HeaderLayout'

import * as actions from '../actions'

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser()
  }

  fetchLists = () => {
    if (this.props.userId) {
      this.props.fetchList('watch', this.props.userId)
      this.props.fetchList('favorite', this.props.userId)
    }
  }

  render() {
    return (
      <div className='app'>
        {this.fetchLists()}
        <Router>
          <Switch>
            <Route path='/profile' component={Layout} />
            <Route path='/' component={HeaderLayout} />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.userId
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(actions.fetchUser()),
  fetchList: (type, userId) => dispatch(actions.fetchList(type, userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

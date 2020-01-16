import React, { Component, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import ErrorTooltip from '../components/ErrorTooltip'
import Layout from '../hocs/Layout'
import Loading from '../components/Loading'

import routes from './routes'
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
        {this.props.isError && <ErrorTooltip />}
        <Layout>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                render={() => (
                  <Suspense fallback={<Loading />}>
                    <route.component />
                  </Suspense>
                )}
              />
            ))}
          </Switch>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isError: state.error.isError,
  userId: state.auth.userId,
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(actions.fetchUser()),
  fetchList: (type, userId) => dispatch(actions.fetchList(type, userId)),
  clearError: () => dispatch(actions.clearError()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

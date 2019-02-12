import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { store, persistor } from './store'

import AppContainer from './components/app/AppContainer'
import HomeContainer from './components/home/HomeContainer'

const routes = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <AppContainer>
          <Switch>
            {/* <Route path='/login' component={LoginContainer} exact /> */}
            <Route path='/' component={HomeContainer} exact />
            {/* <AuthorizedRoute path='/' component={HomeContainer} exact /> */}
            { /* fallback, should be the last entry */}
            <Redirect from='*' to='/' />
          </Switch>
        </AppContainer>
      </Router>
    </PersistGate>
  </Provider>
)

export default routes

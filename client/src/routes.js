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

import AuthorizedRoute from './pages/authorizedRoute/AuthorizedRoute'
import AppContainer from './pages/app/AppContainer'
import BookListContainer from './pages/bookList/BookListContainer'
import BookFormContainer from './pages/bookForm/BookFormContainer'
import SigninContainer from './pages/signin/SigninContainer'

const routes = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <AppContainer>
          <Switch>
            <Route path='/signin' component={SigninContainer} exact />
            <AuthorizedRoute path='/' component={BookListContainer} exact />
            <AuthorizedRoute path='/books/:id' component={BookFormContainer} exact />
            <Redirect from='*' to='/' />
          </Switch>
        </AppContainer>
      </Router>
    </PersistGate>
  </Provider>
)

export default routes

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

import AppContainer from './pages/app/AppContainer'
import BookListContainer from './pages/bookList/BookListContainer'
import BookFormContainer from './pages/bookForm/BookFormContainer'
import SigninContainer from './pages/signin/SigninContainer'
import SignupContainer from './pages/signup/SignupContainer'

const routes = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <AppContainer>
          <Switch>
            {/* <Route path='/login' component={LoginContainer} exact /> */}
            <Route path='/' component={BookListContainer} exact />
            <Route path='/books/:id' component={BookFormContainer} exact />
            <Route path='/signin' component={SigninContainer} exact />
            <Route path='/signup' component={SignupContainer} exact />
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

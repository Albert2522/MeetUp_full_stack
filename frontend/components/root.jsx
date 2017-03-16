import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import UserPage from './user_form/user_form';
import HomeForm from './home_form/home_form';
import CreateEventFormContainer from './create_event_form/create_event_form_container';
import SearchForm from './search_form/search_form';


const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  const _redirectIfLoggedOUT = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeForm} />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/user" component={UserPage} />
          <Route path="/create_event" component={CreateEventFormContainer} onEnter={_redirectIfLoggedOUT}/>
          <Route path="/search_form" component={SearchForm} onEnter={_redirectIfLoggedOUT}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

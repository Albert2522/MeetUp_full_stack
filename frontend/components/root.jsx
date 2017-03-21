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
import ChangePasswordForm from './user_form/change_password_form';
import CreateGroupForm from './create_group_form/create_group_form';
import ShowGroupPage from './show_group_page/show_group_page';
import ShowEventPage from './show_event_page/show_event_page';


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
          <Route path="/user/:userId" component={UserPage}>
            <Route path="change_password" component={ChangePasswordForm} />
            <Route path="create_group" component={CreateGroupForm} />
          </Route>
          <Route path="/groups/:groupId" component={ShowGroupPage} />
          <Route path="/events/:eventId" component={ShowEventPage} />
          <Route path="/create_event" component={CreateEventFormContainer} onEnter={_redirectIfLoggedOUT}/>
          <Route path="/search_form" component={SearchForm} onEnter={_redirectIfLoggedOUT}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import AppButtons from './app_buttons';
import SearchComponent from './search_form/search_form';

const searchForm = () => {
  console.log("Search");
};

const App = ({ children }) => (
  <div className="app-container">

      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-logo-container">
            <a href="#"><img className="navbar-logo" src={window.logo} alt="Events" /></a>
          </div>
          <AppButtons />
        </nav>
      </div>

      <div className="children-container">
        { children }
      </div>

      <div className="footer">
        <ul className="list">
          <li>Home</li>
          <li>About Me</li>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  );


export default App;

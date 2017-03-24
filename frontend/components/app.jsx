import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import AppButtons from './app_buttons';
import SearchComponent from './search_form/search_form';


const App = ({ children }) => (
  <div className="app-container">

      <div className="navbar-container">
          <AppButtons />
      </div>

      <div className="children-container">
        { children }
      </div>

      <div className="footer">
        <ul className="list">
          <li><Link style={{color: "white"}} to={`/`}>Home</Link></li>
          <li><a href="https://github.com/Albert2522/MeetUp_full_stack" style={{color: "white"}} target="_blank">Github</a></li>
        </ul>
      </div>
    </div>
  );


export default App;

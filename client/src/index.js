import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './pages/App';
import Splash from './pages/Splash';
import ProtectedRoute from './ProtectedRoute';

import Context from './context';
import reducer from './reducer';

import 'mapbox-gl/dist/mapbox-gl.css';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  // get the initial state from Context
  const initialState = useContext(Context);
  // grab state and dispatch function from useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      {/* The values available when creating context, is only use to initiate the reducer's state, but only state and dispatch are passed down to the Context consumers */}
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <ProtectedRoute exact path="/" component={App} />
          <Route path="/login" component={Splash} />
        </Switch>
      </Context.Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

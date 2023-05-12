import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CanvassingForm from './CanvassingForm';
import CanvassingNotes from './CanvassingNotes';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/canvassing-form">Canvassing Form</Link>
            </li>
            <li>
              <Link to="/canvassing-notes">Canvassing Notes</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/canvassing-form" component={CanvassingForm} />
          <Route path="/canvassing-notes" component={CanvassingNotes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

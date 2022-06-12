import {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import { getAll as getAllTodos } from './api/todo-service.api';
import {About} from './pages/About';
import {Contacts} from './pages/Contacts';
import {NotFound} from './pages/NotFound';
import './App.css';

function App() {

  useEffect(() => {
    getAllTodos().then((all) => console.log(all));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className="App">
            <h1>Home Page</h1>
            <nav>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/about">About</Link></li>
            </nav>
          </div>
        </Route>
        <Route path='/contacts' component={Contacts} />
        <Route path='/about' component={About} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

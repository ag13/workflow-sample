import React from 'react'
import './App.css'
import { Route, HashRouter } from 'react-router-dom'
import { Home } from './Home'
import { Workflow } from './workflow'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { WorkFlowHome } from './workflow-table/WorkFlowHome';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Route exact path="/" component={Home} />
        <Route exact path="/workflows/" component={WorkFlowHome} />
        <Route exact path="/workflows/create" component={Workflow} />
      </HashRouter>
    </div>
  );
}

export default App;

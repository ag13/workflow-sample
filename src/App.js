import React from 'react'
import './App.css'
import { Route, HashRouter } from 'react-router-dom'
import { WorkflowCreation, ViewWorkflow } from './workflow'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { WorkFlowHome } from './workflow-table/WorkFlowHome'
import { Home } from './Home'

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Route exact path="/" component={Home} />
        <Route exact path="/workflows/" component={WorkFlowHome} />
        <Route exact path="/workflows/create" component={WorkflowCreation} />
        <Route exact path="/workflows/view/:workflowId" component={ViewWorkflow} />
      </HashRouter>
    </div>
  );
}

export default App;
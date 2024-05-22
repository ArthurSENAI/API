import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';

function App() {
  return (
    <Router>
      <div>
        <h1>API Frontend</h1>
        <Switch>
          <Route exact path="/" component={ListItems} />
          <Route path="/add" component={AddItem} />
          <Route path="/edit/:id" component={EditItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Vip from './pages/vip';
import AddUser from './pages/addUser';
import AddProduct from './pages/addProduct';
import Table from './pages/table';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/vip"}>
            <Vip />
          </Route>
          <Route exact path={"/addUser"}>
            <AddUser />
          </Route>
          <Route exact path={"/addProduct"}>
            <AddProduct />
          </Route>
          <Route exact path={"/table"}>
            <Table />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';


import { Provider } from 'react-redux'
import store from './Redux/Store';
import NavBar from './components/NavBar';
import ShowUsers from './components/ShowUsers';
import Login from './components/Login';
import UserDetailes from'./components/UserDetailes'
import { Route, Switch } from 'react-router-dom';




function App() {
  return (
    <>
      <NavBar></NavBar>
      <Provider store={store}>
        <Switch>

          <Route component={Login} path="/regisret"></Route>
          <Route component={UserDetailes} path="/userDetailes"></Route>
          <Route component={ShowUsers} path="/showAll"></Route>
            
        </Switch>

      </Provider>
    </>
      );
}

      export default App;

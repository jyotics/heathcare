import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { Route,Switch } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact><Login /></Route>
        <ProtectedRoute path='/profile' component={Profile}/>
        </Switch>
    


    </div>
  );
}

export default App;

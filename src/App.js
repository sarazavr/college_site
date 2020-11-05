import './App.css';
import { About } from './modules/about';
import SignIn from './modules/auth/components/SignIn';
import SignUp from './modules/auth/components/SignUp';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter> 
      <Switch>

      <Route path='/sign-in' component={SignIn} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/' component={About} />
      <Redirect to = '/' />

     
      </Switch>
    </BrowserRouter>
  )

}

export default App;

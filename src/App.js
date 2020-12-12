import './App.css';
import { About } from './modules/about';
import SignIn from './modules/auth/components/SignIn';
import SignUp from './modules/auth/components/SignUp';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignUpContainer from './modules/auth/containers/SignUpContainer';
import SignInContainer from './modules/auth/containers/SignInContainer';
import AuthContainer from './modules/auth/containers/AuthContainer';


function App() {
  return (
    <BrowserRouter> 
      <Switch>

      <Route path='/sign-in' component={SignInContainer} />
      <Route path='/sign-up' component={SignUpContainer} />
      <Route path= '/auth' component={AuthContainer} />
      <Route path='/' component={About} />
      <Redirect to = '/' />

     
      </Switch>
    </BrowserRouter>
  )

}

export default App;

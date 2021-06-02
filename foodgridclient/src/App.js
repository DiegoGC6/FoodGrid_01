import '../src/components/containers.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import AddItem from './components/AddItem'
import UserRegistration from './components/AddUser'
import ListItems from './components/ListItems'
import Home from './screens/Home'
import OurChat from './screens/OurChat'
import LoggedIn from './screens/LoggedIn'
import AboutUs from './components/AboutUs'
import Technologies from './components/Technologies'
import SignOut from './components/SignOut'



function App() {
  return (
    <>
      <Router >
          <Switch>
            <Route path='/' exact component={Home} /> 
            <Route path='/loggedIn' exact component={LoggedIn} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={UserRegistration} />
            <Route path='/listitems' exact component={ListItems} />
            <Route path='/additem' exact component={AddItem} />
            <Route path='/chat' exact component={OurChat} />
            <Route path='/aboutus' exact component={AboutUs} />
            <Route path='/technologies' exact component={Technologies} />
            <Route path='/signout' exact component={SignOut} />
          </Switch >
      </Router> 
    </>
  )
}

export default App

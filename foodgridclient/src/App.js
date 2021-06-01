import '../src/components/containers.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import AddItem from './components/AddItem'
import UserRegistration from './components/AddUser'
import ListItems from './components/ListItems'
import Home from './screens/Home'
import OurChat from './screens/OurChat'
import LoggedIn from './screens/LoggedIn'



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
          </Switch >
      </Router> 
    </>
  )
}

export default App

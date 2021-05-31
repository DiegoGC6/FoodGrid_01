import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//import axios from "axios";
import Login from './components/Login'
import AddItem from './components/AddItem'
import UserRegistration from './components/AddUser'
import ListItems from './components/ListItems'
import Home from './screens/Home'
import Header from './components/Header'
import OurChat from './screens/OurChat'
import LoggedIn from './screens/LoggedIn'

function App() {
  return (
    <>
      <Router >
        <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/loggedIn' exact component={LoggedIn} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={UserRegistration} />
            <Route path='/listitems' exact component={ListItems} />
            <Route path='/additem' exact component={AddItem} />
            <Route path='/chat' exact component={OurChat} />
          </Switch>
      </Router>
    </>
  )
}

export default App

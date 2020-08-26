import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase';
import { loginUser } from './redux/action/action'

function App() {
 const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log("authuser inside useEffect", user)
  //   debugger
  //   const unSubscribe = auth.onAuthStateChanged = (authUser) => {
     
  //     if (authUser) {
       
  //       dispatch(loginUser(authUser))
  //     } else {
  //       dispatch(loginUser(null))
  //     }
  //   }
  //   return () => {
  //     unSubscribe()
  //   }
  // }, [])

  // console.log("authuser", user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

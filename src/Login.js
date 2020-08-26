import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './assets/css/Login.css'
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import { loginUser } from './redux/action/action'


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth)
            dispatch(loginUser(auth))
            history.push("/")
        })
        .catch(e => alert(e.message),
            dispatch(loginUser(null))
        )
    }

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push("/")
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>email</h5>
                    <input type="text" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
                    <h5>password</h5>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                </form>
                <p>message</p>
                <button onClick={register} className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login

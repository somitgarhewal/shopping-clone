import React from 'react'
import './assets/css/Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from './firebase'
import {loginUser} from './redux/action/action' 

function Header() {
    const basket = useSelector(state => state.basket)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const login = () => {
        if (user) {
           
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to='/'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={user ? "/account" : "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user && user.user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Your Account' : 'Signin'}</span>
                    </div>
                </Link>
                <Link to={!user && "/login"} className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">return &</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>
                <Link to={!user && "/login"} className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header

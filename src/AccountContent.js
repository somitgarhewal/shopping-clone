import React from 'react'
import './assets/css/AccountContent.css'

const AccountContent = (props) => {
    return (
        <div className="accountcontent">
            <img className="accountcontent__image" src={props.image} />
            <div className="accountcontent__right">
            <h3>
                {props.title}
            </h3>
            <span>
                {props.description}
            </span>
            </div>
          
        </div>
    )
}

export default AccountContent

import React from 'react'
import './assets/css/AccountExtraContent.css'

function AccountExtraContent({ title, content }) {
    return (
        <div className="accountExtraContent">
            <h4  className="accountExtraContent__title">{title}</h4>
            {content && content.map((item) =>
                <a href="#" className="accountExtraContent__content">{item}</a>)
            }
        </div>
    )
}

export default AccountExtraContent

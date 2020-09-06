import React from 'react'

import './header.css'

const Header = () => (
    <header className="header">
        <h1 className="header__logo">
            <img src="/images/logo.png" alt="Github search" />
            <span>Github Searcher</span>
        </h1>
        <p className="header__caption">Search users or repositories</p>
    </header>
)

export default Header

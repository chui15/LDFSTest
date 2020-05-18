import React from 'react'

import logo from '../assets/images/demlogo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>DEM LDFS Score Test</h1>
        <p>Take this test to see how LDFS you are (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
    </header>
)

export default Header

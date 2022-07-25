import React, {Link}from 'react-router-dom'

function Navbar() {
    return (
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    )
}

export default Navbar
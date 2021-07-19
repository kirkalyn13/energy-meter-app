import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <header className='header'>
            <div className="container-title">
            <div className="img">
            <img className="logo" src="emeter_logo.png" width="100" height="100" alt="logo" margin="20px"/>
            </div>
            <h1 className='title'>Energy Meter Monitor</h1>
            </div>
          <div className="container-nav">
            <nav>
                <Link to="/">
                    DC BATTERY
                </Link>
                <Link to="/ac">
                    AC POWER
                </Link>
            </nav>
        </div>
        </header>
        </>
    )
}

export default Header
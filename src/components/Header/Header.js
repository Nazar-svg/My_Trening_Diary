import React from 'react'
import classes from './Header.module.css'
import logo from '../../imagen/triathlon.svg'
import Navigation from '../Navigation/Navigation'

const Header = props => {
    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <div className={classes.headerInner}>
                    <div className={classes.Logo}>
                        <img src={logo} alt="logo" />
                        <div className={classes.labelLogo}>Trening <br />Diary</div>
                    </div>
                 <Navigation />
                </div>
            </div>
        </header>
    )
}
export default Header
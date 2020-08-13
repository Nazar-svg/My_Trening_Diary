import React from 'react'
import classes from './Header.module.css'
import logo from '../../imagen/triathlon.svg'


const Header = props => {
    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <div className={classes.headerInner}>
                    <div className={classes.Logo}>
                        <img src={logo} alt="logo" />
                        <div className={classes.labelLogo}>Trening <br />Diary</div>
                    </div>

                    <nav className={classes.headerNav}>
                        <a className={classes.navLink}>cycling training</a>
                        <a className={classes.navLink}>travel</a>
                        <a className={classes.navLink}>POWER TRAINING</a>
                        <a className={classes.navLink}>RUN training</a>
                        <a className={classes.navLink}>Photo</a>
                    </nav>

                    {/* <button className="burger" type="button">
                <span className="burger__item">menu</span>
            </button> */}
                </div>
            </div>
        </header>
    )
}
export default Header
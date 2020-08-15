import React, { Component } from 'react'
import classes from './Navigation.module.css'

class Navigation extends Component {
    render() {
        return (
               <nav className={classes.headerNav}>
                        <a className={classes.navLink}>cycling training</a>
                        <a className={classes.navLink}>travel</a>
                        <a className={classes.navLink}>POWER TRAINING</a>
                        <a className={classes.navLink}>RUN training</a>
                        <a className={classes.navLink}>Photo</a>
                    </nav>
        )
    }

}

export default Navigation
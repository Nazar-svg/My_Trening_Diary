import React, { Component } from 'react'
import classes from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const links = [
    { to: '/cycling', label: 'Вело Треніровки', exact: false },
    { to: '/travel', label: 'Подорожі', exact: false }
]

class Navigation extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <NavLink
                    className={classes.navLink}
                    to={link.to}
                    key={index}
                    exact={link.exact}
                    activeClassName={classes.active}
                    >
                    {link.label}
                </NavLink>
            )
        })
    }
    render() {
        return (
            <>
                <nav className={classes.headerNav}>
                    <ul>
                        <li>
                            {this.renderLinks()}
                        </li>
                    </ul>
                </nav>
            </>
        )
    }

}

export default Navigation
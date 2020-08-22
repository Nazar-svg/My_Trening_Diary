import React, { Component } from 'react'
import classes from './MenuCycling.module.css'

class MenuCycling extends Component {
    render() {
        return (
            <div className={classes.MenuCycling}>
            <div className={classes.menuList}>
                <h2>Distanse</h2>
            </div>
          </div> 
        )
    }
}

export default MenuCycling
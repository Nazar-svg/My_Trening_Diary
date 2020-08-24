import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './MenuCycling.module.css'

class MenuCycling extends Component {
    render() {
        return (
            <div className={classes.MenuCycling}>
            <div className={classes.menuList}>
            <input type="text" className="form-control" placeholder="date of arrival"/>
            <input type="text" className="form-control" placeholder="location"/>
            <input type="text" className="form-control" placeholder="time"/>
            <input type="text" className="form-control" placeholder="distanse"/>
                <button type="button" className="btn btn-primary" >Внести</button>
            </div>
          </div> 
        )
    }
}

export default MenuCycling
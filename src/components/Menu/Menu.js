import React from 'react'
import classes from './Menu.module.css'

const Menu = props => {
    return(
        <div className={classes.Menu}>
        <div className={classes.menuList}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div> 
    )
}
export default Menu
import React, { Component } from 'react'
import classes from './Photo.module.css'

class Photo extends Component {
    render() {
        return (
            <div>
               <h1 className={classes.Photo}>ФОТОГРАФІЇ</h1> 
            </div>
        )
    }
}
export default Photo
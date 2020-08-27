import React, { Component } from 'react'
import classes from './Cycling.module.css'
import Table from '../../components/Table/Table'

class Cycling extends Component {
    render() {
        return (
            <div className={classes.Cycling}>
               
                <div className={classes.table}>
                    <Table />
                </div>

            </div>
        )
    }
}
export default Cycling
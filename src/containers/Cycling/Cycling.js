import React, { Component } from 'react'
import classes from './Cycling.module.css'
import MenuCycling from '../../components/Menu/MenuCycling/MenuCycling'
import Table from '../../components/Table/Table'

class Cycling extends Component {
    render() {
        return (
            <div className={classes.Cycling}>
                <MenuCycling />
                <div className={classes.table}>
                    <Table />
                </div>

            </div>
        )
    }
}
export default Cycling
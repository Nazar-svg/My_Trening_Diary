import React, { Component } from 'react'
import './Table.module.css'
import MenuCycling from '../Menu/MenuCycling/MenuCycling'

class Table extends Component {
    state = {
        dataHeader: "ДАТА",
        locationHeader: "ЛОКАЦІЯ",
        timeHeader: "ЧАС",
        distanseHeader: "ДИСТАНЦІЯ",
        tableItems: [
            { data: "24.09.2020", location: 'калуш-журавно', time: '1год 30хв 15сек', distanse: '40km' },
        ]
    }

    addNewDataTable = (item) => {
        console.log(item)
     this.setState({
       ...this.state, 
       tableItems: [...this.state.tableItems, item]
     })
    }
    renderTableItem() {
        return this.state.tableItems.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.data}</td>
                    <td>{item.location}</td>
                    <td>{item.time}</td>
                    <td>{item.distanse}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <> 
             <MenuCycling 
              addNewDataTable={this.addNewDataTable}
             />
            <table>
                <thead>
                    <tr>
                        <td>{this.state.dataHeader}</td>
                        <td>{this.state.locationHeader}</td>
                        <td>{this.state.timeHeader}</td>
                        <td>{this.state.distanseHeader}</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableItem()}
                </tbody>
            </table>
            </>
        )
    }
}
export default Table
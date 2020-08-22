import React, { Component } from 'react'
import './Table.module.css'

class Table extends Component {
    state = {
        tableItems: [
            { data: "15.09.2020", location: 'калуш-журавно', time: '1год 30хв', distanse: '40km' },
            { data: "15.09.2020", location: 'калуш-журавно', time: '1год 30хв', distanse: '40km' },
            { data: "15.09.2020", location: 'калуш-журавно', time: '1год 30хв', distanse: '40km' },
            { data: "15.09.2020", location: 'калуш-журавно', time: '1год 30хв', distanse: '40km' }

        ]
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
            <table>
                <thead>
                    <tr>
                        <td>дата</td>
                        <td>локація</td>
                        <td>ЧАС</td>
                        <td>ВІДСТАНЬ</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableItem()}
                </tbody>
            </table>
        )
    }
}
export default Table
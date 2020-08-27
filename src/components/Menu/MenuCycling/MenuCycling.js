import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './MenuCycling.module.css'

class MenuCycling extends Component {
    state = { data: '', location: '', time: '', distanse: '' };
    
   getDate = ({target}) => {
        console.dir(target);
        this.setState({
            ...this.state, [target.id]: target.value
        });
    };
   render() {
    return (
        <div className={classes.MenuCycling}>
            <div className={classes.menuList}>
                <input
                    type="text"
                    value={this.state.data}
                    className="form-control"
                    placeholder="date of arrival"
                    id="data"
                    onChange={event => this.setState({...this.state, data: event.target.value})}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="location"
                    id="location"
                    onChange={this.getDate}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="time"
                    id="time"
                    onChange={this.getDate}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="distanse"
                    id="distanse"
                    onChange={this.getDate}
                />


                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.props.addNewDataTable(this.state)}
                >
                    Внести
                </button>
            </div>
        </div>
    )
   }
    
}


export default MenuCycling
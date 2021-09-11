import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description:response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
            })
            .catch(err => console.log(err))
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/updateTodo/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/')     
    }

    render() {
        return (
            <div>
            <h3 align="center">UPDATE TODO</h3>
            <form className="form update" onSubmit={this.onSubmit}>
                <label>DESCRIPTION </label>
                <input  type="text" className="form-control" value={this.state.todo_description}
                    onChange={this.onChangeTodoDescription} />
                <label>RESPONSIBLE </label>
                <input type="text" className="form-control"value={this.state.todo_responsible}
                    onChange={this.onChangeTodoResponsible}/>
                <label>PRIORITY </label>
                <div className="priority-inputs">
                        <div className="">
                            <input  className="" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className=""> LOW</label>
                        </div>
                        <div className="">
                            <input  className="" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.todo_priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className=""> MEDIUM</label>
                        </div>
                        <div className="">
                            <input  className="" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.todo_priority==='High'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className=""> HIGH</label>
                        </div>
                    </div>
                    <input  className="form-check-input" id="completedCheckbox" type="checkbox" name="completedCheckbox"
                    onChange={this.onChangeTodoCompleted} checked={this.state.todo_completed} value={this.state.todo_completed}/>
                    <label className="form-check-label" htmlFor="completedCheckbox"> COMPLETED</label>    
                    <input type="submit" value="UPDATE TODO" className="btn btn-primary" />
                {/* <div className=""> 
                    <label>Description: </label>
                    <input  type="text" className="form-control" value={this.state.todo_description}
                    onChange={this.onChangeTodoDescription} />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text" className="form-control"value={this.state.todo_responsible}
                    onChange={this.onChangeTodoResponsible}/>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" type="radio" name="priorityOptions" id="priorityLow" 
                        value="Low" checked={this.state.todo_priority==='Low'} onChange={this.onChangeTodoPriority}/>
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" type="radio" name="priorityOptions" id="priorityMedium" 
                        value="Medium" checked={this.state.todo_priority==='Medium'} onChange={this.onChangeTodoPriority}/>
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" type="radio" name="priorityOptions" id="priorityHigh" 
                        value="High" checked={this.state.todo_priority==='High'} onChange={this.onChangeTodoPriority} />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input  className="form-check-input" id="completedCheckbox" type="checkbox" name="completedCheckbox"
                    onChange={this.onChangeTodoCompleted} checked={this.state.todo_completed} value={this.state.todo_completed}/>
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>                        
                </div>

                <br />

                <div className="form-group">
                    <input type="submit" value="Update Todo" className="btn btn-primary" />
                </div> */}
            </form>
        </div>
        )
    }
}
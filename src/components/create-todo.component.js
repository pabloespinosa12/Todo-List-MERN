import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props){
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description : '',
            todo_responsible : '',
            todo_priority : '',
            todo_completed : false
        }
    }

    onChangeTodoDescription(e){
        this.setState({
            todo_description : e.target.value
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible : e.target.value
        });
    }

    onChangeTodoPriority(e){
        this.setState({
            todo_priority : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }
        
        //axios is like a way of using fetch in an object-oriented way 
        axios.post('http://localhost:4000/todos/addTodo', newTodo)
            .then(res => {
                console.log(res.data);
                this.setState({ todo_description : '',
                todo_responsible : '',
                todo_priority : '',
                todo_completed : false});
            });
    }
    render() {
        return (
            <div className="create-container">
                <h3>ADD TODO:</h3>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" className="" placeholder="DESCRIPTION" value={ this.state.todo_description } onChange={this.onChangeTodoDescription}></input>
                    <input type="text" className="" placeholder="RESPONSIBLE" value={ this.state.todo_responsible } onChange={this.onChangeTodoResponsible}></input>
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
                    <input type="submit" value="CREATE TODO" className="btn btn-primary" />
                    {/* <div className="">
                        <label>Description:</label>
                        <input type="text" className="" value={ this.state.todo_description } onChange={this.onChangeTodoDescription}></input>
                    </div>

                    <div className="">
                        <label>Responsible:</label>
                        <input type="text" className="" value={ this.state.todo_responsible } onChange={this.onChangeTodoResponsible}></input>
                    </div>

                    <div className="">
                        <div className="">
                            <input  className="" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="">Low</label>
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
                            <label className="">Medium</label>
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
                            <label className="">High</label>
                        </div>
                    </div>

                    <div className="">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div> */}
                </form>
            </div>
        )
    }
}
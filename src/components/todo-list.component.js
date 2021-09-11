import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Todo component
const Todo = props => (
    <tr className="table-row">
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>
            <Link className="link" to={'/edit/' + props.todo._id}>Edit</Link>
        </td>
    </tr>
)


export default class TodosList extends Component {
    
    constructor(props){
        super(props);
        this.state = { todos: [] };
    }
    
    componentDidMount() {//This method is executed when component is alredy placed at DOM 
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(err => console.log(err)); //TODO: improve this 
    }

    componentDidUpdate(){ //This solve my problem of refreshing but gives a warning/error on client console CHECK
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(err => console.log(err)); //TODO: improve this 
    }

    todoList(){
        return this.state.todos.map((currentTodo,i) => {
            return <Todo todo={currentTodo} key={i}/>;
        });
    }

    render() {
        return (
            <div className="todoList-container">
                <h3>TODO'S LIST</h3>
                <table style={{ marginTop: 20 }} >
                    <thead className="table-row">
                        <tr className="table-head">
                            <th>DESCRIPTION</th>
                            <th>RESPONSIBLE</th>
                            <th>PRIORITY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    
                    <tbody className="table-body">
                        { this.todoList() }
                    </tbody>
                    
                </table>
            </div>
        )
    }
}
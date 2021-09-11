const  todoModel = require('../models/todo.model');

exports.getTodos = (req,res) => {
    todoModel.find((err,todos) => {
        if(err) console.log(err) //TODO: handle this better
        else res.json(todos);
    });
};

exports.getTodoById = (req,res) => {
    let id = req.params.id;
    todoModel.findById(id, (err,todo) => {
        if(err) console.log(err) //TODO: handle this better
        else res.json(todo);
    });
};

exports.createTodo = (req,res) => {
    let todo = new todoModel(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'todo added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
};

exports.updateTodo = (req,res) => {
    let id = req.params.id;
    todoModel.findById(id, (err,todo) => {
        if(err) console.log(err) //TODO: handle this better
        else{
            if(!todo){
                res.status(404).send('Data is not found');
            }else{
                todo.todo_description = req.body.todo_description;
                todo.todo_responsible = req.body.todo_responsible;
                todo.todo_priority = req.body.todo_priority;
                todo.todo_completed = req.body.todo_completed;

                todo.save()
                    .then(todo => {
                        res.status(200).json({ 'todo': 'todo updated successfully' });
                    })
                    .catch((err) =>{
                        res.status(400).send("Update not possible");
                    })
            }
        }
    })
};
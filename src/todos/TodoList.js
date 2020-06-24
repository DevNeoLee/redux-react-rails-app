import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodo } from './actions';


const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed}) => (
    <div className="list-wrapper">
        <NewTodoForm />
        
        {todos.map(todo => <TodoListItem 
            todo={todo} 
            key={todos.indexOf(todo)} 
            onRemovePressed={onRemovePressed} 
            onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

const mapStateToProps = state => ({
     todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

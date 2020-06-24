import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo } from './actions';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [{ text: 'hello'}] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

const mapStateToProps = state => ({
     todos: state.todos,
});

const mapDispatchToProps = dipatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

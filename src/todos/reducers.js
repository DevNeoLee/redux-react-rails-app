import { CREATE_TODO, REMOVE_TODO, MARK_TODO } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        if (newTodo.text.length != 0) {
            return state.concat(newTodo);
        }
            
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    case MARK_TODO: {
        const { text } = payload;
        return state.map(todo => {
            if (todo.text === text) {
                return { ...todo, isCompleted: true };
            }
            return todo;
        });
    }
    default: 
        return state;
    }
}
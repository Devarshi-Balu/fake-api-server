type Todo = {
    title: string,
    description: string,
    id: number,
    completed: boolean,
    userId: number
}

const todos: Todo[] = require('../../todos.json');

const getRandomTodos: () => Todo[] = () => {
    const data = todos.slice();
    data.sort(() => (0.5 - Math.random()));
    return data.slice(0, 10);
}

const getAllTodos: () => Todo[] = () => {
    return todos;
}

const getTodoById: (id: number) => Todo = (id) => {
    const todo = todos.filter((todo) => (todo.id == id));
    return todo[0];
}


export {
    getRandomTodos,
    getAllTodos,
    getTodoById
}


import { Hono } from 'hono'
const router = new Hono();

import { getRandomTodos, getAllTodos, getTodoById } from '../funcs/Todos_Funcs'



router.get('/', (c: any) => {
    return c.text(`
        go to these routes to get the todos data

        1. "./todos/all"    - get all the todos 
        2. "./todos/random" - get some random set of todos 
        3. "./todos/:id"    - get a todo by its id 
    `);
})

router.get('/all', (c: any) => {
    return c.json({
        todos: getAllTodos()
    })
})

router.get('/random', (c: any) => {
    return c.json({
        todos: getRandomTodos()
    });
})


router.get('/:id', (c: any) => {
    const id = c.req.param('id');
    return c.json({
        todo: getTodoById(id),
    })
})



export {
    router
}

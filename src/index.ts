import { Hono } from 'hono'
import { router } from './routes/todo_routes'

const intro: string = `Hello, this is Devarshi Balu

Kindly go to these routes to access fake data for you application development 

1. "./todos" - fake todos
`

const app = new Hono()

app.route('/todos', router);

app.get('/', async (c) => {
  return c.text(intro);
})

export default app

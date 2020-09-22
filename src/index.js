const express = require('express');
const { uuid , isUuid} = require('uuidv4')

const app = express();
app.use(express.json())

const tasks = [];

function logRequest( request, response, next){
  const { method, url } = request;
  
  const logLabel = `[${method.toUpperCase()}] in URL : ${url}. ${(Date.now().toLocaleString('EN-US'))}`;

  console.log(logLabel);

  return next();
}

function validateTaskId(request, response, next){
  const { id } = request.params;

  if(!isUuid(id)){
    return response.status(400).json({error: 'Invalid task ID.'});
  }

  return next()
}

app.use(logRequest);

app.get('/tasks', (request,response) => {
  const { category } = request.query;

  const results = category 
  ? tasks.filter(task => task.category.includes(category))
  : tasks;

  return response.json(results);
})

app.post('/tasks', (request, response) => {
  const {category = "noCategory", description} = request.body;

  const task = {id: uuid(), category , description, finish: false};

  tasks.push(task)

  return response.json(task);
})

app.put('/tasks/:id', validateTaskId, (request, response) => {
  const { id } = request.params;

  const taskIndex = tasks.findIndex(task=> task.id === id);

  if ( taskIndex < 0){
    return response.status(400).json({error:"Task not found!"} )
  }

  tasks[taskIndex].finish = true; 

  return response.json(tasks[taskIndex]);
})

app.delete('/tasks/:id',validateTaskId, (request, response) => {
  const { id } = request.params;

  const taskIndex = tasks.findIndex(task => task.id === id);

  if ( taskIndex < 0){
    return response.status(400).json({error:"Task not found!"} )
  }

  tasks.splice(taskIndex,1);

  return response.status(204).json({msg: `Task com id ${id} foi deletado com sucesso!`});
})

app.listen(3333, () => {
  console.log('📦 Back-end Started!')
})
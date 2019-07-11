const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/tasks', controllers.getTasks)
    .post('/api/tasks', controllers.addTask)
    .get('/api/tasks/:id', controllers.getTask)
    .put('/api/tasks/:id', controllers.updateTask)
    .delete('/api/tasks/:id', controllers.deleteTask)
};

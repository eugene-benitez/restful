const Task = require('./models');

module.exports = {

  //* Get All Tasks
  getTasks: (req, res) => {
    Task.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  //* Add One Task
  addTask: (req, res) => {
    Task.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  //* Get One Task
  getTask: (req, res) => {
    Task.findOne({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  //* Update One Task
  updateTask: (req, res) => {
    Task.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  //* Delete One
  deleteTask: (req, res) => {
    Task.findByIdAndRemove({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }

}

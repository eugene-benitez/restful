const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

var TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title field is required."]
  },
  description: { type: String, default: '' },
  completed: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Task', TaskSchema);

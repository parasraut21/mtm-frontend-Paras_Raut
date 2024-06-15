
const Task = require('../models/Task');


exports.createTask = async (req, res) => {
  try {
    const { text, description } = req.body;
    const newTask = new Task({
      text,
      description
    });

    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


exports.updateTask = async (req, res) => {
  try {
    const { text, description } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, { text, description }, { new: true });
    res.json(updatedTask);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};



exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

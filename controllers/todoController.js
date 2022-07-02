const todos = require("../model/todoModel");

exports.getAllTodos = async (req, res) => {
  try {
    const todo = await todos.find({});
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = await req?.body;
    if (!req.body.title) {
      res.status(400).text("Please add a title");
    }
    const todo = await todos.create({
      title: title,
      description: description,
    });
    res.status(200).json({ message: "Todo added", todo });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const id = await todos.findById(req.params.id);
    if (!id) {
      res.status(400);
      throw new Error("Todo not found");
    }
    const updateTodo = await todos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Todo updated", updateTodo });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const id = await todos.findById(req.params.id);
    if (!id) {
      res.status(400);
      throw new Error("Todo not found");
    }

    await id.remove();
    res.status(200).json({ message: `Goal ${id} deleted`});
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

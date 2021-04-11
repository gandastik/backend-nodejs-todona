const express = require("express");
const router = express.Router();
const controllers = require("./controllers");
const { TaskModel } = require("./models");

router.get("/tasks", (req, res) => controllers.getTasksController(req, res));

router.get("/tasks/:id", async (req, res) => {
  const result = await TaskModel.findOne({ _id: req.params.id });
  res.send(result);
});

router.post("/task", (req, res) => controllers.createTaksController(req, res));

router.put("/task", (req, res) => controllers.updateTaskController(req, res));

router.delete("/task/:id", (req, res) =>
  controllers.deleteTaskController(req, res)
);

// router.get('/students', (req, res) => {
//    res.json(students);
// })

// router.get('/students/:id', (req, res) => {
//     res.json(students.find((students) => students.id === req.params.id));
// })

// router.post('/students', (req, res) => {
//     students.push(req.body);
//     res.status(201); //send status that it's created
//     res.json(req.body);
// })

// router.put('/students/:id', (req, res) => {
//     const updateIndex = students.findIndex((students) => students.id === req.params.id);
//     res.json(Object.assign(students[updateIndex], req.body));
// })

// router.delete('/students/:id', (req, res) => {
//     const delIndex = students.findIndex(students => students.id === req.params.id);
//     students.splice(delIndex, 1);
//     res.status(204).send();
// })

module.exports = router;

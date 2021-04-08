const { TaskModel } = require('../models');

module.exports = async function getTasksServices (isFinished) {
    const tasks = await TaskModel.find({isFinished: isFinished});
    return tasks;
}
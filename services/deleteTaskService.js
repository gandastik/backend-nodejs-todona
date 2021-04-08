const { TaskModel } = require('../models');

module.exports = async function deleteTaskSerivce(id) {
    return TaskModel.deleteOne({_id: id});
}
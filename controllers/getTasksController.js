const { getTasksServices } = require('../services');

module.exports =  async function getTasksController(req, res) {
    const result = await getTasksServices(req.query.isFinished)
    return res.send(result);
};
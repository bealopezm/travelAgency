const router = require('express').Router();
const Client = require('../../models/client.model');

router.get('/', async (req, res) => {
  try {
    const clients = await Client.getAll();
    res.send(clients);
  } catch (err) { res.json({ error: err.message }) }
});

router.post('/', async (req, res) => {
  try {
    const result = await Client.create(req.body);
    const newClient = await Client.getById(result.insertId);
    res.json(newClient);
  } catch (err) { res.json({ error: err.message }) }
});

router.put('/:clientId', async (req, res) => {
  try {
    const result = await Client.update(req.params.clientId, req.body)
    const clientUpdate = await Client.getById(req.params.clientId);
    res.json(clientUpdate);
  } catch (err) { res.json({ error: err.message }) }
});

router.delete('/:clientId', async (req, res) => {
  try {
    const result = await Client.deleteById(req.params.clientId)
    res.json(result);
  } catch (err) { res.json({ error: err.message }) }
});

module.exports = router;
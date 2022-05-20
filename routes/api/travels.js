const router = require('express').Router();

const Travel = require('../../models/travel.model');

router.get('/', async (req, res) => {
  try {
    const travels = await Travel.getAll();
    res.send(travels);
  } catch (err) { res.json({ error: err.message }) }
});

router.post('/', async (req, res) => {
  try {
    const result = await Travel.create(req.body);
    const newtravel = await Travel.getById(result.insertId);
    res.json(newtravel);
  } catch (err) { res.json({ error: err.message }) }
});

router.put('/:travelId', async (req, res) => {
  try {
    const result = await Travel.update(req.params.travelId, req.body)
    const travelUpdate = await Travel.getById(req.params.travelId);
    res.json(travelUpdate);
  } catch (err) { res.json({ error: err.message }) }
});

router.delete('/:travelId', async (req, res) => {
  try {
    const result = await Travel.deleteById(req.params.travelId)
    res.json(result);
  } catch (err) { res.json({ error: err.message }) }
});


module.exports = router;
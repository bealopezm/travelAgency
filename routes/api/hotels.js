const router = require('express').Router();

const Hotel = require('../../models/hotel.model');

router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.getAll();
    res.send(hotels);
  } catch (err) { res.json({ error: err.message }) }
});

router.post('/', async (req, res) => {
  try {
    const result = await Hotel.create(req.body);
    const newhotel = await Hotel.getById(result.insertId);
    res.json(newhotel);
  } catch (err) { res.json({ error: err.message }) }
});

router.put('/:hotelId', async (req, res) => {
  try {
    const result = await Hotel.update(req.params.hotelId, req.body)
    const hotelUpdate = await Hotel.getById(req.params.hotelId);
    res.json(hotelUpdate);
  } catch (err) { res.json({ error: err.message }) }
});

router.delete('/:hotelId', async (req, res) => {
  try {
    const result = await Hotel.deleteById(req.params.hotelId)
    res.json(result);
  } catch (err) { res.json({ error: err.message }) }
});

module.exports = router;
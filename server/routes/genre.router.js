const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT "genres".name, "movies_genres".id FROM "genres"
  JOIN "movies_genres"
  ON "genres".id = "movies_genres".genre_id
  JOIN "movies" 
  ON "movies".id = "movies_genres".movie_id
  WHERE "movies".id = ${id};`;

  pool.query(query)
    .then(result => {
      res.send(result.rows);
      console.log(result.rows);
    })
    .catch(err => {
      console.error('error in movie get', err);
      res.sendStatus(500)
    })
});

module.exports = router;
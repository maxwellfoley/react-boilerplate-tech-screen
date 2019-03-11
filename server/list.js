const express = require('express');
const router = express.Router();

const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb://127.0.0.1:27017';

router.get('/', (req, res) => {
  MongoClient.connect(
    mongoUrl,
    (err, client) => {
      if (err) {
        res.send({ success: false, message: 'Internal database error' });
        return;
      }
      const db = client.db('calorie-counter');
      db.collection('list')
        .find()
        .toArray()
        .then(obj => {
          res.send(obj);
        });
    },
  );
});

router.post('/', (req, res) => {
  MongoClient.connect(
    mongoUrl,
    (err, client) => {
      if (err) {
        res.send({ success: false, message: 'Internal database error' });
        return;
      }
      const db = client.db('calorie-counter');
      db.collection('list')
        .insertOne({
          item: req.body.item,
        })
        .then(response => {
          res.send({ success: true, data: response.ops[0] });
        })
        .catch(() => {
          res.send({ success: false, message: 'An unknown error occurred' });
        });
    },
  );
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.send('Landing link app page')
  res.render('index')
});

module.exports = router;

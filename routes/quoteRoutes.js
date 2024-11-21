const express = require('express');
const router = express.Router();
const QuoteController = require('../controller/quoteController');

router.get('/quote', QuoteController.getRandomQuote);
router.post('/quote', QuoteController.saveFavoriteQuote);
router.get('/favourites', QuoteController.getFavoriteQuotes);

module.exports = router;
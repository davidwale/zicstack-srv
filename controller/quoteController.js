const QuoteService = require('../service/quoteService');

class QuoteController {
  static async getRandomQuote(req, res) {
    try {
      const quote = await QuoteService.fetchRandomQuote();
      res.json(quote);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch random quote' });
    }
  }

  static async saveFavoriteQuote(req, res) {
    try {
      const { text, author } = req.body;
      
      if (!text || !author) {
        return res.status(400).json({ error: 'Quote text and author are required' });
      }

      const savedQuote = await QuoteService.saveFavoriteQuote({ text, author });
      res.status(201).json(savedQuote);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save quote' });
    }
  }

  static async getFavoriteQuotes(req, res) {
    try {
      const favorites = await QuoteService.getFavoriteQuotes();
      res.json(favorites);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch favorite quotes' });
    }
  }
}

module.exports = QuoteController;
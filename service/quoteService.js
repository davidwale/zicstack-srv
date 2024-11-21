const axios = require('axios');
const https = require('https');
const dotenv = require('dotenv');

dotenv.config();

const quoteUrl = process.env.QUOTE_URL;
class QuoteService {
  static favoriteQuotes = [];

  static async fetchRandomQuote() {
    try {
      const agent = new https.Agent({  
        rejectUnauthorized: false 
      });

      const response = await axios.get(`${quoteUrl}`, {
        httpsAgent: agent,
      });

      return {
        text: response.data.content,
        author: response.data.author
      };
    } catch (error) {
      console.error('API Fetch Error:', {
        message: error.message,
        code: error.code,
        status: error.response ? error.response.status : 'N/A',
        data: error.response ? error.response.data : 'No response data'
      });

      throw new Error(`Failed to fetch quote: ${error.message}`);
    }
  }

  static async saveFavoriteQuote(quote) {
    const newQuote = {
      id: Date.now(),
      text: quote.text,
      author: quote.author,
      savedAt: new Date().toISOString()
    };
    
    this.favoriteQuotes.push(newQuote);
    return newQuote;
  }

  static async getFavoriteQuotes() {
    return this.favoriteQuotes;
  }
}

module.exports = QuoteService;
const { getQuoteCollection } = require('../mongodb');
const logger = require('../logger').default;

exports.getRandomSingleQuote = async (condition = {}) => {
  try {
    const quotes = await getQuoteCollection();
    return quotes.aggregate([
      {
        $match: condition,
      },
      {
        $project: {
          _id: 0,
          __v: 0,
          category: 0,
        },
      },
      {
        $sample: { size: 1 },
      },
    ]).toArray();
  } catch (err) {
    logger.error('getRandomSingleQuote error', err);
    return undefined;
  }
};

const { getQuoteCollection } = require('../mongodb');

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
    console.log('getRandomSingleQuote error', err);
    return undefined;
  }
};

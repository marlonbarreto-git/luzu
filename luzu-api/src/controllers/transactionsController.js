const Service = require('../services/transactionService.js');

const createTransaction = async (req, res) => {
  const { ecommerceId, amount } = req.body;
  try {
    const transactionId = await Service.createTransaction(ecommerceId, amount);
    return res.json({ status: 201, transaction_id: transactionId });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
};

const processTransaction = async (req, res) => {
    const { transactionId, userId } = req.body;
    try {
      const { status } = await Service.processTransaction(transactionId, userId);
      res.json({
        status,
        message: `Transaction ${status}`,
      });
    } catch (err) {
      res.json({
        status: "error",
        message: err.message,
      });
    }
  };

module.exports = {
    createTransaction,
    processTransaction,
};
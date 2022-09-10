const { Router } = require("express");
const router = Router();
const { createTransaction, processTransaction } = require("../controllers/transactionsController");

router.post("/create-transaction", createTransaction);
router.post("/process-transaction", processTransaction);

module.exports = router;
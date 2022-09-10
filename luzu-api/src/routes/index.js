const { Router } = require("express");
const router = Router();
const { createTransaction, processTransaction, rejectTransaction } = require("../controllers/transactionsController");

router.post("/create-transaction", createTransaction);
router.post("/process-transaction", processTransaction);
router.post("/reject-transaction", rejectTransaction);

module.exports = router;
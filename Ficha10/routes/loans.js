var express = require('express');
var loanController = require('../controllers/loansController')

var router = express.Router();

/* GET users listing. */
router.get('/', loanController.getAllLoans);
router.get('/:id', loanController.getLoanByID);
router.delete('/:id', loanController.deleteLoanByID);
router.post('/', loanController.createLoan);
router.put('/:id', loanController.UpdateLoanByID);

module.exports = router;

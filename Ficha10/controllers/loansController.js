const loan = require('../sequelize').Loans;

exports.getAllLoans = (req, res, next) => {
    loan.findAll().then(results => {
        res.send(results);
    })
};

exports.getLoanByID = (req, res, next) => {
    loan.findByPK(req.params.id).then(results => {
        res.send(results);
    })
}
//CHANGE TO DELETE
exports.deleteLoanByID = (req, res, next) => {
    loan.findByPK(req.params.id).then(results => {
        res.send(results);
    })
}
//CHANGE TO PUT
exports.createLoan = (req, res, next) => {
    loan.findByPK(req.params.id).then(results => {
        res.send(results);
    })
}
//CHANGE TO POST
exports.UpdateLoanByID = (req, res, next) => {
    var details = req.body;
    loan.UpdateLoanByID(req.params.id, details).then(results => {
        res.send(results);
    })
}
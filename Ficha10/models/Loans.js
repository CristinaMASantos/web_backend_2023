module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Loans', {
        loan_date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        return_date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        }
        }
    )}
    
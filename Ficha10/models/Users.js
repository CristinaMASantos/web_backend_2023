module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        adress:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        }
    )}
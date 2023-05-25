module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Books', {
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        author_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        publication_date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        genre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        available_copies:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        }
    )}
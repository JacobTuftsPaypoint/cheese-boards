const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect:"sqlite",
    storage:"../Database/storage.sqlite"
})

class User extends Model{}
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    }
},{sequelize})

class Board extends Model{}
Board.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    rating:{
        type: DataTypes.STRING
    }
},{sequelize})

class Cheese extends Model{}
Cheese.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title:{
        type: DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    }
},{sequelize})

User.hasMany(Board)
Board.belongsToMany(User, {through:"BoardTable"})

Board.hasMany(Cheese)
Cheese.belongsToMany(Board, {through:"BoardTable"})

module.exports = {User,Board,Cheese}
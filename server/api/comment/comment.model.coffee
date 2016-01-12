'use strict';



module.exports = (sequelize, DataTypes) ->
    Comment = sequelize.define('Comment', {

        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        content: DataTypes.STRING,

        active: DataTypes.BOOLEAN,

        post_time:
            type: DataTypes.TIME


        like_count:
            type: DataTypes.INTEGER




    })

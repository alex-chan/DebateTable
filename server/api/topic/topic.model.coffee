'use strict';



module.exports = (sequelize, DataTypes) ->
    Topic = sequelize.define('Topic', {

        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,

#    description: DataTypes.STRING,

        post_time:
            type: DataTypes.TIME

        positive_title:
            type: DataTypes.STRING

        positive_count:
            type: DataTypes.INTEGER

        positive_count2:
            type: DataTypes.INTEGER


        negative_title:
            type: DataTypes.STRING

        negative_count:
            type: DataTypes.INTEGER

        negative_count2:
            type: DataTypes.INTEGER




    })

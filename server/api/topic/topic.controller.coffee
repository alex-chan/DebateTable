#/**
# * Using Rails-like standard naming convention for endpoints.
# * GET     /api/things              ->  index
#* POST    /api/things              ->  create
#* GET     /api/things/:id          ->  show
#* PUT     /api/things/:id          ->  update
#* DELETE  /api/things/:id          ->  destroy
#*/

'use strict';

#require "../thing/test"


sqldb = require '../../sqldb'
Topic = sqldb.Topic
#import {Topic} from '../../sqldb';

handleEntityNotFound = (res)->
    return (entity)->
        if !entity
            res.status(404).end()
            return null

        return entity;

respondWithResult = (res, statusCode)->
    statusCode = statusCode || 200;
    return (entity)->
        if (entity)
            res.status(statusCode).json(entity);



handleError = (res, statusCode) ->
    statusCode = statusCode || 500;
    return (err) ->
        res.status(statusCode).send(err)


#// Gets a list of Things
exports.index =  (req, res) ->
    return Topic.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res))



#// Gets a single Comment from the DB
exports.show =   (req, res) ->
    return Topic.find(
        where:
            _id: req.params.id
        )
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res))

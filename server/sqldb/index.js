/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Comment = db.sequelize.import('../api/comment/comment.model');
db.Topic = db.sequelize.import('../api/topic/topic.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');

export default db;

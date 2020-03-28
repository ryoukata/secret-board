'use strict';
const postsHandler = require('./posts-handler');
const uril = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/logout':
      uril.handleLogout(req, res);
      break;
    default:
      uril.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};
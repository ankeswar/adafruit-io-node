'use strict';

// generated by: https://github.com/adafruit/io-swagger-templates
// using the Adafruit IO Swagger docs: https://io.adafruit.com/api/docs/api.json
const Controller = require('../../controller'),
      Feed = require('../../models/Feed');

exports = module.exports = Object.assign({}, Controller);

module.exports.all = function all(req, res, next) {

  Feed.all()
    .then(exports.handleResponse.bind(this, res))
    .catch(exports.handleError.bind(this, res));

};

module.exports.create = function create(req, res, next) {

  const feed = req.swagger.params['feed'].value;

  Feed.create(feed)
    .then(exports.handleResponse.bind(this, res))
    .catch(exports.handleError.bind(this, res));

};

module.exports.get = function get(req, res, next) {

  const id = req.swagger.params['id'].value;

  Feed.get(id)
    .then(exports.handleResponse.bind(this, res))
    .catch(exports.handleError.bind(this, res));

};

module.exports.replace = function replace(req, res, next) {

  const id = req.swagger.params['id'].value,
        feed = req.swagger.params['feed'].value;

  Feed.replace(id, feed)
    .then(exports.handleResponse.bind(this, res))
    .catch(exports.handleError.bind(this, res));

};

module.exports.destroy = function destroy(req, res, next) {

  const id = req.swagger.params['id'].value;

  Feed.destroy(id)
    .then(exports.handleResponse.bind(this, res))
    .catch(exports.handleError.bind(this, res));

};

module.exports.update = function update(req, res, next) {

  const id = req.swagger.params['id'].value,
        feed = req.swagger.params['feed'].value;

  Feed.update(id, feed)
    .then(exports.handleResponse.bind(this, res))
    .catch(exports.handleError.bind(this, res));

};


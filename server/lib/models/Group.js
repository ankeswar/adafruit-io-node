'use strict';

// generated by: https://github.com/adafruit/io-swagger-templates
// using the Adafruit IO Swagger docs: https://io.adafruit.com/api/docs/api.json
const util = require('util'),
      Model = require('./Base');

class Group extends Model {

  constructor(properties) {
    super(properties);
  }

  static type() {
    return 'Group';
  }

  static fields() {
    return {
      id: {
        type: 'number'
      },
      name: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      feeds: {
        type: 'array',
        children: 'Feed'
      },
      created_at: {
        type: 'string'
      },
      updated_at: {
        type: 'string'
      }
    };
  }

}

exports = module.exports = Group;


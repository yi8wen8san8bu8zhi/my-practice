'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const index = require('./routers/index');
module.exports = app => {
  // const { router, controller } = app;
  // router.get('/', controller.home.index);

  index(app);

};

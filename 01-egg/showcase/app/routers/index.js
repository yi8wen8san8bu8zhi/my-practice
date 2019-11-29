'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/index', controller.index.index);
  router.get('/add/:data', controller.index.add);
  router.get('/del/:data', controller.index.del);
  router.get('/put/:data', controller.index.put);
  router.get('/sel/:data', controller.index.sel);
//   router.get('/indexDB', controller.index.indexDB);
//   router.get('/indexreads', controller.index.reads);
//   router.get('/indexread', controller.index.read);
//   router.get('/indexreadss', controller.index.readss);
//   router.get('/add', controller.index.add);
};

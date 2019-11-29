/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574986308818_3265';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //  启动配置路径，端口，主机名字文件
  config.cluster = {
    listen: {
      path: '',
      port: 8888,
      hostname: '',
    },
  };
  // 连接数据库配置文件
  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '911234',
      database: 'ceshi',
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
  };
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks', // 左边写成.html后缀，会自动渲染.html文件
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};


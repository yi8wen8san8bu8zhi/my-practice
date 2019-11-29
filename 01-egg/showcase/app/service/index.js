'use strict';
const Service = require('egg').Service;

class indexService extends Service {
  //  添加数据
  async add() {
    const data = this.ctx.params.data;
    // 表的名称test,数据库名称在config/config.default.js下已定义
    const result = await this.app.mysql.insert('indexs', {
      name: data,
    });
    console.log(result);
    if (result.serverStatus === 2) {
      return 'success';
    }
    return 'fail';

  }
  //   删除数据
  async del() {
    const data = this.ctx.params.data;
    const result = await this.app.mysql.delete('indexs', {
      id: data,
    });
    console.log(result);
    if (result.affectedRows === 1) {
      return 'success';
    }
    return false;
  }
  //   修改数据
  async put() {
    const data = this.ctx.params.data;
    const result = await this.app.mysql.update('indexs', {
      id: '12',
      name: data,
    });
    console.log(result);
    if (result.affectedRows === 1) {
      return 'success';
    }
    return false;
  }
  //   查询数据
  async sel() {
    const data = this.ctx.params.data;
    // console.log(data);
    const result = await this.app.mysql.select('indexs', {
      where: { name: data }, // 查询条件
      columns: [ 'id', 'name' ], // 查询的字段
      // orders: [], // 排序方式
    //   limit: 5,
    //   offset: 0, // 数据偏移量
    });
    console.log(result);
    if (result) {
      return {
        code: 'success',
        data: result,
      };
    }
    return false;
  }
}

module.exports = indexService;

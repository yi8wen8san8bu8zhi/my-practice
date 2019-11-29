'use strict';

const Controller = require('egg').Controller;

class index extends Controller {
  async index() {
    const title = '我是渲染上的数据';// 模板的数据
    await this.ctx.render('index', { title });
  }
  // 添加数据
  async add() {
    const data = this.ctx.params.data;
    const result = await this.service.index.add(data);
    this.ctx.body = result;
  }
  // 删除数据
  async del() {
    const data = this.ctx.params.data;
    const result = await this.service.index.del(data);
    this.ctx.body = result;
  }
  // 修改数据
  async put() {
    const data = this.ctx.params.data;
    const result = await this.service.index.put(data);
    this.ctx.body = result;
  }
  // 查询数据
  async sel() {
    const data = this.ctx.params.data;
    const result = await this.service.index.sel(data);
    // console.log(result);
    this.ctx.body = result;
  }
}
module.exports = index;

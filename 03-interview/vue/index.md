### 1. v-show 与 v-if 有什么区别
- **v-if是真正的条件渲染,如果条件为假,那么什么也不操作,页面没有这个与元素.当条件为真的时候,开始编译,动态的向DOM元素里添加元素**
- **v-show是不管条件真假,渲染页面的时候都会编译出来添加到DOM元素中,只是简单的基于CSS的display属性进行切换**
- **性能方面v-if更消耗性能,因为v-if在显示隐藏的过程中有DOM的添加删除,而v-show只是简单的操作CSS**
- **使用场景:频繁切换的使用v-show会比较节省性能.如果是子组件，每次切换子组件不执行生命周期，使用v-show，如果子组件需要重新执行生命周期，那么使用v-if才能触**
----
### 2. class与style如何动态绑定
- **class可以通过对象语法和数组语法进行动态绑定**
- 对象语法
```ruby
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
data: {
  isActive: true,
  hasError: false
}
```
- 数组语法
```ruby
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```
- **style也可以通过对象语法和数组语法进行动态绑定**
- 对象语法
```ruby
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}
```
- 数组语法
```ruby
<div v-bind:style="[styleColor, styleSize]"></div>

data: {
  styleColor: {
     color: 'red'
   },
  styleSize:{
     fontSize:'23px'
  }
}
```
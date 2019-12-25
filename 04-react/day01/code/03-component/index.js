/*
  通过函数的方式定义组件
  注意事项：
  1、函数名称必须首字母大写，为了区分DOM元素
  2、通过函数的参数可以传递组件的属性信息
  3、props中的数据是只读的
  4、单项数据流
*/



// 函数组件
function Message() {
    return <div>123</div>
}
// 函数组件嵌套
function Info(){
    return <span>我是被嵌套的组件</span>
}
function Pop(){
    return <span>我即将嵌套组件<Info/></span>
}
const element = (
    <div>
        {/* 调用方式 */}
        <Message />
        <Pop/>
    </div>

)

ReactDOM.render(
    element,
    document.getElementById("root")
)
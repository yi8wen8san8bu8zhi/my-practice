// 时间组件
function Clock(props) {
    console.log(props)
    return (
        <div>
            <h1>当前时间</h1>
            <h6>{props.data.toLocaleString()}</h6>
        </div>
    )
}

const element = (
    <div><Clock data={new Date()}/></div>
)

function tick() {
    element,
    ReactDOM.render(element, document.getElementById('root'))
}
// 每个一秒钟重新调用组件渲染页面
setInterval(tick, 1000)
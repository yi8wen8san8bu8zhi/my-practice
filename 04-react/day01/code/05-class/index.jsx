// 通过类的方式创建组件
// 注意点
/*
1,类的方式与函数方式创建组件的显著去吧,类可以包含状态
2,组件的状态初始化必须在构造函数中进行,如果要修改状态值必须在this.setState里面进行
 
组件中的数据只有两种
1,props
2,state
这两种数据都是从父组件向子组件传递,反之不可以(单向数据)
props是只读的
state是可读可修改的
*/
// extends是继承父类的函数
// React.Component是react提供的API
class Message extends React.Component {
    // 子组件通过props接收
    constructor(props) {
        console.log(props)
        super(props)
    }
    render() {
        let { pop } = this.props;
        return <div>{pop}</div>
    }
}
class Clock extends React.Component {
    // constructor是固定的,用来初始化数据
    constructor(props) {
        // super是显示需要调用的父类构造函数
        super(props)
        // state名字是固定的
        this.state = {
            date: new Date(),
            abc: "你好"
        }
    }
    // render名字也是固定的,是提供模板用的
    render() {
        return (
            <div>
                <div>现在的时间</div>
                {/* 父组件向子组件传值 */}
                <div><Message pop={this.state.abc} /></div>
                <div>{this.state.date.toLocaleString()}</div>
            </div>
        )
    }
    // 组件的生命周期钩子函数 ,DOM渲染完成后调用,
    componentDidMount() {
        this.tick()
    }
    // 定时更改时间函数,自定义的函数
    tick() {
        setInterval(() => {
            // 状态数据的修改,必须通过setState的方式来操作
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
}

const element = (
    // 调用类组件
    <div><Clock /></div>
)
// 渲染页面
ReactDOM.render(element, document.getElementById("root"))
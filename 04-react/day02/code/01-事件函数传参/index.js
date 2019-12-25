// react当中的事件绑定是驼峰式的
/*
事件函数传参
可以通过this.bind(this，实参列表)方式传递参数，可以得到事件对象（通过最后一个参数）
通过{(event)=>{this.handle(event,参数列表)}}方式传递参数，可以得到事件对象（建议通过最后一个实参传递）
事件对象本质上并不是原生的事件对象，而是react封装的事件对象，但是兼容不同的浏览器，并且基本符合原生事件对象的标子
*/ 

class Change extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "blue"
        }
        // 改变handleColor的this指向方法一
        // 通过bind方法改变函数内部this指向 
        // this.handleColor = this.handleColor.bind(this)
    }
    // handleColor(){
    //     // 默认情况下this是undefined,但是我们希望this是组件的实例对象
    //     console.log(this)
    // }
    // 改变handleColor的this指向方法二
    handleColor = (e,p) => {
        console.log(e,p.target,p.target.tagName)
        // console.log(this)
        // react里面所有的数据变更都要在setState里面进行操作
        // this.state.color = 'red'
        // let color = this.state.color;
        // console.log(color)
        // if (color == 'blue') {
        //     this.setState({
        //         color: 'red'
        //     })
        // } else if (color == 'red') {
        //     this.setState({
        //         color: 'blue'
        //     })
        // }
        this.setState({
            color:'red'
        })
    }
    handleJump = (e)=> {
        // react中可以通过e里面的方法阻止默认行为,不可以使用return false
        // 原生js中,事件函数中的return false 只能阻止默认行为,不能阻止冒泡
        // 在jquery中，事件函数中的return false既可以阻止冒泡行为，也可以阻止冒泡 
        e.preventDefault()//阻止默认行为
        // e.stopPropagation()//阻止冒泡
    }
    render() {
        // 行内样式
        const divStyle = {
            width: "100px",
            height: "100px",
            border: "1px solid red",
            backgroundColor: this.state.color
        }
        return (
            <div>
                <div style={divStyle}></div>
                <div style={{ width: '100px', height: '100px', border: "1px solid black" }}></div>
                {/* <button onClick={this.handleColor.bind(this,'hello','nihao')}>按钮</button> */}
                <button onClick={(e)=>{this.handleColor('123',e)}}>按钮</button>
                <a href='http://www.baidu.com' onClick={this.handleJump}>百度</a>
            </div >
        )
    }

}

const element = <div><Change /></div>
ReactDOM.render(
    element,
    document.getElementById('root')
)
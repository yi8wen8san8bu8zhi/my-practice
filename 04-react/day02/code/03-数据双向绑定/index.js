class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '123',
            list:[],
        }
    }
    // 输入框双向绑定
    handchange = (e) => {
        console.log(e.target.value)
        // this.state.value = e.target.value
        this.setState({
            value: e.target.value
        })
    }
    // 添加数据
    add = () => {
        this.setState({
            list:[...this.state.list,this.state.value],
            value:''
        })
    }
    // 删除数据
    del =(a)=>{
        // a是数据在数组中的下标
        this.state.list.splice(a,1);
        this.setState({
            list:this.state.list
        })
    }
    // 
    btn = ()=> {
        console.log(this.state.list)
    }
    render() {
        return (
            <div>
                <input onChange={this.handchange} type="text" value={this.state.value} />
                <button onClick={this.add}>添加</button>
                <button onClick={this.btn}>查看</button>
                <ul>
                    {
                        this.state.list.map((v,k)=> {
                            return <li key={k}>{v}----<button onClick={this.del.bind(this,k)}>删除</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


const element = <div><Clock /></div>
ReactDOM.render(
    element,
    document.getElementById("root")
)


class Login extends React.Component {
    render() {
        return (
            <div>
                登录
            </div>
        )
    }
}

class Register extends React.Component {
    render() {
        return (
            <div>
                注册
            </div>
        )
    }
}

function Swichs(flag) {
    if (flag.flag == true) {
        return <Login />
    } else {
        return <Register />
    }
}


class LoginRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
    }
    // 切换注册登录
    handle = (a, e) => {
        // console.log(a);
        // 阻止a标签跳转
        e.preventDefault()
        this.setState({ 
            flag: a
        })
    }
    btn = () => {
        console.log(this.state)
    }
    render() { 
        return (
            <div>
                <Swichs flag={this.state.flag} />
                <div>
                    <a href="" onClick={this.handle.bind(this, true)}>去登陆</a>
                    <a href="" onClick={this.handle.bind(this, false)}>去注册</a>
                    <button onClick={this.btn}>查看状态</button>
                </div>
            </div>
        )
    }
}



const element = <div><LoginRegister /></div>
ReactDOM.render(element, document.getElementById('root'))
let name = '苹果'
let attrs = {
    className: 'active',
    abchello: '123',
}
function foo() {
    return <div>你好</div>
}
// let status = false;
let status = true;

const element = (
    <div {...attrs}>
        <div>
            <ul>
                <li>{name}</li>
                <li>{1 + 1}</li>
                <li>{foo()}</li>
                <li>{foo() + ""}</li>
                <li>{foo() + "<div>哦</div>"}</li>
                <li>{status}</li>
                <li >{status==="true"? "正确":"错误"}</li>
            </ul>
        </div>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
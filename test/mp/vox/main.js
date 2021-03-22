function App(props) {
    const {msg} = this.props
    return ()=> {
        <div class='main'>
            {msg}
        </div>
    }
}

render(<App msg="hello,world"/>)

//基于vue实现小程序框架
export default {
    data: {
        msg: 'hello,vox'
    },
    created() {
        console.log(window)
        setTimeout(() => {
            this.setData({
                msg: 'setData'
            })
        }, 1000);
    }
}

export default ()=> {
    return '<div>{{msg}}</div>'
}

// dxml fxml
// dxss fxss
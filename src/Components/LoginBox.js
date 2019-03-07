import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import  '../Components/LoginBox.css';
class LoginBox extends Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            password:''
        };
    }
    login=()=>{
        let url=`/SZ_YingJi.Service/BaseService.svc/Login?user=${this.state.user}&password=${this.state.password}`;
        axios({
            url,
        })
        .then(response=>{
            let data = JSON.parse(response.data);
            if(data.requestSuccess){
                this.props.setToken(data.token);
            }
            else{
                alert(data.message);
            }
        })
    }
    copyToken=()=>{
        this.tokenPanel.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
        alert("复制成功");
    }
    test=()=>{
        axios({
            url:'/Yingji-Service/WaterControlService.svc/GetSpecificTyphoonPath?tfbh=201828',
            // headers:{
            //     token:'Faitj+K8JRRXpCbDMO+l4e/e55biob8BoB5JTZfTMbhzHn2yEi+MUTFuL4jBFDIRRSpp08V8G0aaJ6lF7toDtc/kulOWLc3Q1ugQdtW1ROgfkXwTDtrMs/7eEqWJDtOGF8EWCaoinlOxfuKpKQHxXvxwrt0CBi3Ce+IC5wbg7SM=',
            // }
        })
        .then(response=>{
            console.log(response.data);
            let data = JSON.parse(response.data);
            console.log(data);
        });
        //console.log(xmlstring);
        // axios({
        //     url:'/Yingji-Service/WaterControlService.svc/GetSluiceFlow',
        //     method:'POST',
        //     data:{
        //         startDate:"2018-12-05",
        //         bsnm:"太湖流域",
        //         frgrd:"2"
        //     }
        // })
        // .then(response=>{
        //     //let data = JSON.parse(response.data);
        //     console.log(response.data);
        //     let data = JSON.parse(response.data);
        //     console.log(data);
        // })
    }
    render(){
        this.test();
        let state = this.state;

        console.log(this.props);
        this.props.actions.setToken("666");
        return<div>
            <p>
                <span>用户名：</span>
                <input value={state.user} onChange={e=>this.setState({user:e.target.value})}/>
                <span>密码：</span>
                <input value={state.password} onChange={e=>this.setState({password:e.target.value})}/>
                <button onClick={this.login}>登录</button>
            </p>
            <p>
                <span>token：</span>
                <input ref={e=>this.tokenPanel=e} className='tokenPanel' value={this.props.token||''} readOnly/>
                <button onClick={this.copyToken}>复制</button>
            </p>
        </div>
    }
}
LoginBox = connect(
    state=>({
        token:state.base.token,
    }),
    dispatch=>({
        actions:{
            setToken: (token) => {
                dispatch({ type: 'setToken', token });
            },

        }
       
    })
)(LoginBox);
export default LoginBox;
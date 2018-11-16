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
        // axios({
        //     url:'/SZ_YingJi.Service/IndustryAndCommerceService.svc/GetAdapterInfo',
        //     headers:{i==
        //         token:'Faitj+K8JRRXpCbDMO+l4e/e55biob8BoB5JTZfTMbhzHn2yEi+MUTFuL4jBFDIRRSpp08V8G0aaJ6lF7toDtc/kulOWLc3Q1ugQdtW1ROgfkXwTDtrMs/7eEqWJDtOGF8EWCaoinlOxfuKpKQHxXvxwrt0CBi3Ce+IC5wbg7SM=',
        //     }
        // })
        // .then(response=>{
        //     console.log(response);
        //     let data = JSON.parse(response.data);
        //     console.log(data);
        // });
        let parser = new DOMParser();
        let xmlstring = '<Documents>'+
        '<Document TaskGuid = "应用标识" DataGuid = "数据标识" DataType = "Rep_CheLXX">'+
        '<ChePH Type="TEXT">车辆(挂车)号牌</ChePH><ShiFGC Type="TEXT">是否挂车</ShiFGC>'+
        '<CheLLX Type="TEXT">车辆类型(代码)</CheLLX><JingYFWDM Type="TEXT">经营范围代码</JingYFWDM>'+
        '<JingXFWMC Type="TEXT">经营范围名称</JingXFWMC><ZhengJYXQQ Type="TEXT">证件有效期起</ZhengJYXQQ>'+
        '<ZhengJYXQZ Type="TEXT">证件有效期止</ZhengJYXQZ><YeHID Type="TEXT">车辆所属业户</YeHID>'+
        '<NianSYXRQ Type="TEXT">年审有效日期</NianSYXRQ></Document></Documents>';
        let  xmlStr = '<Documents>'+
        '<Document TaskGuid = "应用标识" DataGuid = "数据标识" DataType = "DangLocation" >'+
        '<Guid Type="GUID">数据标识</Guid>'+
        '<PlateNumber Type="TEXT">车牌号码</PlateNumber>'+
        '<DriverName Type="TEXT">驾驶员姓名</DriverName>'+
        '<LON Type="SINGLE">经度</LON>'+
        '<LAT Type="SINGLE">纬度</LAT>'+
        '<Time Type="DATE">时间</Time>'+
        '<Speed Type="DOUBLE">速度</Speed>'+
        '<Direction Type="LONG">方向</Direction>'+
        '<CLLX Type="TEXT">车辆类型</CLLX >'+
        '</Document>'+'</Documents>';
        

        //let xmlobject = parser.parseFromString(xmlstring, "text/xml");
        console.log(xmlstring);
        axios({
            url:'/SZ_YingJi.WebService/Communicate.asmx?op=SetData',
            method:'POST',
            data:{
                UserID:'8547C0B4-4CCB-437E-8B62-2B47BFEA1DFC',
                TaskGuid:'c3d791d2-8a92-44d6-aa64-ad67cd08c0cd',
                DataGuid:'b53cd8e5-91d6-404f-bea2-5af3fff27ec7',
                DataType:'DataType',
                XmlData:'',
            }
          
        })
        .then(response=>{
            //let data = JSON.parse(response.data);
            console.log(response);
        })
    }
    render(){
        //this.test();
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
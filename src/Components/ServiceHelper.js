import React,{Component} from "react";
import {connect} from 'react-redux';
class ServiceHelper extends Component{
    constructor(props){
        super(props);
        this.serviceData={
            
        };
    }
    shouldComponentUpdate(props,state){
        if(this.props.token!=null&&this.props.token!=props.token)
          return false;
        return true;
    }
    render(){
        return <div>

        </div>;
    }
}
ServiceHelper =connect(
state=>({
    token:state.base.token
})
)(ServiceHelper);
export default ServiceHelper;
import React,{Component} from 'react';
import reduxConnect from '../reducer/redux-connect';
import axios from 'axios';
class Component1 extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    componentWillReceiveProps(props){
        console.log(`${this.constructor.name} is get state`,props)
    }
    render(){
     
        return <div>
            <button onClick={this.props.actions.setToken.bind(this,'组件1')}>
                组件1
            </button>
        </div>
    }
}
Component1 = reduxConnect(   
    state=>({
         token:state.base.token
    }),
    dispatch=>({
        actions:{
            setToken: (token) => {
                dispatch({ type: 'setToken', token });
            },

        }
    })
)(Component1);
export default Component1;
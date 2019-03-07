import React,{Component} from 'react';
import reduxConnect from '../reducer/redux-connect';
import axios from 'axios';
class Component3 extends Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(props){
        console.log(`${this.constructor.name} is get state`,props)
    }
    render(){
        return <div>
            <button onClick={this.props.actions.setToken.bind(this,'组件3')}>
                组件3
            </button>
        </div>
    }
}
Component3 = reduxConnect(   
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
)(Component3);
export default Component3;
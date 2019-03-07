import React,{Component} from 'react';
import reduxConnect from '../reducer/redux-connect';
import axios from 'axios';
class Component2 extends Component{
    constructor(props){
        super(props);
       
    }
    componentWillReceiveProps(props){
        console.log(`${this.constructor.name} is get state`,props)
    }
    render(){
        return <div>
            <button onClick={this.props.actions.setToken.bind(this,'组件2')}>
                组件2
            </button>
        </div>
    }
}
Component2 = reduxConnect(   
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
)(Component2);
export default Component2;
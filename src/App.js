import React, { Component } from 'react';
import LoginBox from './Components/LoginBox';
import ServiceHelper from './Components/ServiceHelper';
import { connect } from 'react-redux';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';

class App extends Component {
  // shouldComponentUpdate(){
  //     if(this.props.token!=null)
  //       return false;
  //     return true;
  // }
  componentWillMount(){
    //this.test();
    let  a = {
      a:1,
      b:()=>{return 1;}
    };
    let b = {
      //    a:2,
      b:4
    }
    let c = {
      ...a,
      ...b
    };
    console.log(c);
  }
  componentDidUpdate(){
     
  }
  test(){
    const p1 = new Promise(function (resolve, reject) {
      console.log('p1')
      setTimeout(() => reject(new Error('fail')), 3000)
    })
    
    const p2 = new Promise(function (resolve, reject) {
      console.log('p2')
      setTimeout(() => resolve(p1), 1000)
    })
    
    p2
      .then((result) => console.log(result),reject=>{
        console.log(reject);
      })
      .catch(error => console.log(error))
    
  }
  render() {
    return (
      <div className="App">
      <Component1></Component1>
      <Component2></Component2>
      <Component3></Component3>
          {/* <LoginBox/>
          {this.props.token && <ServiceHelper/>}
          <div ref={back=>this.testDom = back}></div> */}
      </div>
    );
  }
}
// App = connect(
//   state=>({
//     token:state.base.token
//   })
// )(App);

export default App;

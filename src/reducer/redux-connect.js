import ReduxStore from '../reducer/index';
import React,{Component} from 'react';
 const reduxConnect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
      constructor () {
        super()
        this._initState();
        const store = ReduxStore
        store.subscribe(() => this._updateProps())
        console.log(React.version);
      }
      _initState(){
        const store = ReduxStore
        let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {} // 防止 mapStateToProps 没有传入
        let dispatchProps = mapDispatchToProps
          ? mapDispatchToProps(store.dispatch, this.props)
          : {} // 防止 mapDispatchToProps 没有传入
        this.state = {
          allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
          }
        } 
      }
      _updateProps () {
        const store = ReduxStore
        let stateProps = mapStateToProps
          ? mapStateToProps(store.getState(), this.props)
          : {} // 防止 mapStateToProps 没有传入
        let dispatchProps = mapDispatchToProps
          ? mapDispatchToProps(store.dispatch, this.props)
          : {} // 防止 mapDispatchToProps 没有传入
        this.setState({
          allProps: {
            ...stateProps,
            ...dispatchProps,
            ...this.props
          }
        })
      }
      render () {
        return <WrappedComponent {...this.state.allProps} />
      }
    }
    return Connect
  }
  export default  reduxConnect
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import ReduxStore from './reducer';
ReactDOM.render(
   // <Provider store={ReduxStore}>
        <App />,
  //  </Provider>,
    document.getElementById('root'));
registerServiceWorker();

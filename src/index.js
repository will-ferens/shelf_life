import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import firebase from 'firebase/app'
import { ReactReduxFirebaseProvider, } from 'react-redux-firebase';
import * as serviceWorker from './serviceWorker';
const reactReduxFireBaseProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFireBaseProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

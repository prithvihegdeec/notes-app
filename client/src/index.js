import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { setUser } from './actions/userAction'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import axios from 'axios';


const store = configureStore()

const ele = <Provider store={store}>
    <App />
</Provider>
store.subscribe(() => {
    console.log(store.getState())
})

if (localStorage.getItem('token')) {
    axios.get('http://localhost:3005/account', {
        headers: {
            'x-auth': localStorage.getItem('token')
        }
    })
        .then(response => {
            const user = response.data
            store.dispatch(setUser(user))
        })
}




ReactDOM.render(ele, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

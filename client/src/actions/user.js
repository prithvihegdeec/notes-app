import axios from '../config/axios'

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

//Async function

export const startSetUser = (formData) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then(response => {
                // console.log(response.data.token)
                // console.log(response.data.user)
                // const user = response.data
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.errors)
                } else {
                    localStorage.setItem('authToken', response.data.token)
                    dispatch(setUser(response.data.user))
                }
            })

    }
}
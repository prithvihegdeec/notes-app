import axios from '../config/axios'
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}
export const removeUser = () => {
    return {
        type: "REMOVE_USER"
    }
}
export const deleteUser = (id) => {
    return {
        type: "DELETE_USER",
        payload: id
    }
}

export const startSetUser = (body, redirect) => {
    return (dispatch) => {
        axios.post('/login', body)
            .then((response) => {
                if (response.data.user.id) {
                    localStorage.setItem('token', response.data.token)
                    redirect()
                    dispatch(setUser(response.data.user))
                }
                else if (response.data.error) {
                    window.alert(response.data.error)
                }
            })

    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        axios.delete(`/user/${id}/delete`)
    }
}
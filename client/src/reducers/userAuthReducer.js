export const userAuthReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SET_USER': {
            return { ...action.payload }
        }
        case 'REMOVE_USER': {
            return {}
        }
        case 'DELETE_USER': {
            return { ...action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
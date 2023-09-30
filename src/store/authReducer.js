const initialState = {
    userId: null,
    fname: null,
    lname: null,
    isAdmin: null
}

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return { userId: action.payload.userId,
                     fname: action.payload.fname,
                     lname: action.payload.lname,
                     isAdmin: action.payload.isAdmin   
            }
        case LOGOUT:
            return { userId: null,
                     fname: null,
                     lname: null,
                     isAdmin: null
            }
        default:
            return state
    }
}

export default authReducer
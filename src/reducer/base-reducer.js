export default function(state={}, action) {
    switch (action.type) {
        case'setToken':
            return{
                ...state,
                token : action.token,
            }
        default:
            return state;
    }
}
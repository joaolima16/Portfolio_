const initialState = {
    value: ''
}
export const ThemeReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SET_THEME':
            return{
                ...state,value: action.value
            }
        default: return state;
    }
}
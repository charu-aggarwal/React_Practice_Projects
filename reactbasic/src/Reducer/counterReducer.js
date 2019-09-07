
const initialState ={
    count:0,
}

const clickInc =(state,action) =>{
    debugger;
    return{
        ...state,
        count: state.count + 1,
    }
  
}
const clickDec =(state,action) =>{
    debugger;
    return{
        ...state,
        count:state.count-1,
    }
}

export function CounterReducer(state=initialState,action){
    console.log('reducer', state, action);
    switch(action.type){
        case 'INC_COUNTER':
            return clickInc(state,action) ;
        case 'DEC_COUNTER' :
            return clickDec(state,action);
        default:
            return state;
    }


}


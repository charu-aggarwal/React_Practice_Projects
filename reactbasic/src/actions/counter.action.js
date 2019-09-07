

function requestClickIncrement(data){
    return{
        type: 'INC_COUNTER',
        payload: data,
    }
}

function requestClickDecrement(data){
    return{
        type:'DEC_COUNTER',
        payload: data,
    }
}

//action-creator
export const clickIncrement=(data) =>{
    return ( dispatch =>{
        dispatch(requestClickIncrement(data));
    })
} 

export const clickDecrement=(data) =>{
    return(dispatch =>{
        dispatch(requestClickDecrement(data));
    })
}
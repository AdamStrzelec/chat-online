const defaultState = {
    isModalOpen: true,
}

function reducer(state = defaultState, action){
    switch(action.type){
        case "OPEN_MODAL":
            return {...state, isModalOpen: true}
        case "CLOSE_MODAL":
            return {...state, isModalOpen: false}
        default: return state
    }
}

export default reducer;
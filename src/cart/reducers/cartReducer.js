const cartReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return [...state, action.carts]
        case "REFRESH_ITEMS":
            return [...action.carts]
        case "DELETE_ITEM":
            return [...action.carts]
        default:
            return state;
    }
}

export default cartReducer;
const bookmarkReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD_BOOKMARK":
            return [...state, action.bookmarks]
        case "REFRESH_BOOKMARK":
            return [...action.bookmarks]
        case "DELETE_BOOKMARK":
            return [...action.bookmarks]
        default:
            return state;
    }
}

export default bookmarkReducer;
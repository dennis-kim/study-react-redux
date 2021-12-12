export const addBookmark = (item) => {
    return {
        type: "ADD_BOOKMARK",
        carts: item
    }
}

export const refreshBookmark = (items) => {
    return {
        type: "REFRESH_BOOKMARK",
        carts: items
    }
}

export const deleteBookmark = () => {
    return {
        type: "DELETE_BOOKMARK",
        carts: []
    }
}
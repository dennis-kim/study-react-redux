export const addCart = (item) => {
    return {
        type: "ADD_ITEM",
        carts: item
    }
}

export const refreshCart = (items) => {
    return {
        type: "REFRESH_ITEMS",
        carts: items
    }
}

export const deleteCart = () => {
    return {
        type: "DELETE_ITEM",
        carts: []
    }
}
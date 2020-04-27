
export const RatingFilter =(payload) => {
    return {
        type : 'RATING_FILTER',
        payload
    }
}
export const AddMovie =(payload) => {
    return {
        type :' ADD_MOVIE',
        payload
    }
}
export const SearchMovie =(payload) => {
    return {
        type : 'SEARCH_MOVIE',
        payload
    }
}
export const Remove =(payload) => {
    return {
        type : 'REMOVE_MOVIE',
        payload
    }
}
export const editMovie = (payload) => {
    return {
        type: "EDIT_MOVIE",
        payload
    }
}

export const saveMovie = (payload) => {
    return {
        type: "SAVE_MOVIE",
        payload
    }
}
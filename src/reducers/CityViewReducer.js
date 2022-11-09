import {FETCH_CITY, FETCH_IMAGES, FETCH_INDEX, LOADING} from "../consts";

const initialState = {
    imgLists: [],
    index: null,
    newCity: null,
    isLoading: false
}

export const CityViewReducer = (state = initialState, action) =>{
    switch (action.type){
        case FETCH_INDEX:
            return {...state, index: action?.payload}
        case LOADING:
            return {...state, isLoading: action?.payload}
        case FETCH_CITY:
            return {...state, newCity: action?.payload}
        case FETCH_IMAGES:
            return {...state, imgLists: action?.payload}
        default:
            return state
    }
}
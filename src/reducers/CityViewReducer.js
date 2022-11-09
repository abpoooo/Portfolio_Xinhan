import {FETCH_ALL_IMAGES, FETCH_CITY, FETCH_INDEX} from "../components/consts";

const initState = {
    imgLibrary: [],
    index: null,
    isLoading: false,
    newCity: null
}

export const CityViewReducer = (state = initState, action) =>{
    // let index = action.payload
    switch (action.type) {
        case FETCH_ALL_IMAGES:
            return {...state, imgLibrary: action?.payload}
        case FETCH_INDEX:
            return {...state, index: action?.payload}
        case 'LOADING':
            return {...state, isLoading: action?.payload}
        case FETCH_CITY:
            return {...state, newCity: action?.payload}
        default:
            return state
    }
}